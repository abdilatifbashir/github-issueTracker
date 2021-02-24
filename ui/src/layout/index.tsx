import React from "react";
import  { useState, useEffect } from "react";

import Menu from "../components/menu";
import SearchBox from "../components/searchBox";
import IssueCard from "../components/issuesCard";
import { LayoutContainer} from "../styles/layout"
import gql from "graphql-tag-ts"
import {useGqlQuery} from "../components/service";
import { useDispatch } from "react-redux";
import { setIssues } from "../store/actions/issuesAction"




const githubData = gql`
query{
  viewer{
    issues(last:30){
      nodes{
        id,
        title,
        url,
        closedAt,
        state,
        comments(first:5) {
          edges {
            node {
              id,
              bodyText,
              createdAt
            }
          }
        }
        assignees(first:2) {
          edges {
            node {
              id
              name
            }
          }
        }
        
        repository {
          id,
          name,
          url,
          owner {
            id,
            login
          }
        }
      }
    }
  }
}
`

const Layout: React.FC = () => {
  const {data,isLoading,error} = useGqlQuery("issueData",githubData)
  // console.log("github data",data)
  // let issues
  // if(data!=undefined){
  //   issues = data

  // }
  const issuesData = data?.viewer.issues.nodes
  const dispatch = useDispatch();
 useEffect(() => {
   dispatch(setIssues(issuesData))

 },[issuesData])

  console.log("issue data",issuesData)
  return (
    <LayoutContainer>
      <Menu />
      <div className="app-title"> 
        <h1>Github Issue tracker</h1>
      </div>
      <SearchBox />
      <div className="issues-found">
        <p>26 issues found</p>
      </div>
      <IssueCard card = {issuesData}/>
    </LayoutContainer>
  );
};
export default Layout;

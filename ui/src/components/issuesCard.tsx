import React from "react";
import  { useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { issueJson } from "./fixture";
import { CardContainer } from "../styles/issue-card";
import { filterGithubIssues } from "../service/filterHelper";
import { setFilter} from "../store/actions/filterAction"

const IssueCard: React.FC<any> = ({ card }) => {
  //get input variable from global state
  const repoInput: string = useSelector(
    (state: any) => state.repository.repoVariable
  );
  // call filter service
  const filteredData = filterGithubIssues(card, repoInput);
  console.log("filter repositories", filteredData);

  // set filtered issues in the store
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(setFilter(filteredData))

},[filteredData])
  

  return (
    <CardContainer>
      {/* {card?.map((issue:any,index:string) => { */}
      <Container>
        <Row>
          {filteredData?.map((issue: any, index: string) => {
            return (
              <Col lg={4} key={index}>
                <div className="card">
                  <div className="card-header">
                    <span>{index}</span> &nbsp;
                    <span>
                      <a href={issue.url}>
                        ISSUE: {issue.title.split(" ", 3).join(" ")}...
                      </a>
                    </span>
                    <p>
                      <a href={issue.repository.url}>{issue.repository.name}</a>
                    </p>
                  </div>
                  <div className="card-body">
                    <span>status: </span>
                    {issue.state == "OPEN" ? (
                      <span className="state-open">
                        {issue.state.toLowerCase()}
                      </span>
                    ) : (
                      <span className="state-closed">{issue.state}</span>
                    )}
                    <hr style={{ marginRight: "40px" }} />

                    <span className="comments">
                      comments:{issue.comments.edges.length}
                    </span>
                    <span className="more">More details...</span>
                  </div>
                </div>
                <br />
              </Col>
            );
          })}
        </Row>
      </Container>
      {/* })} */}
    </CardContainer>
  );
};
export default IssueCard;

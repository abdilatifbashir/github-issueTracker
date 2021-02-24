import React from "react"
import  { useState, useEffect } from "react";

import { SearchContainer } from "../styles/search";
import { setRepo } from "../store/actions/repoActions"
import { useDispatch } from "react-redux";

const SearchBox:React.FC = () => {
    const dispatch = useDispatch();
    const [repoName,setRepoName] = useState("")
    // console.log("repo name", repoName)
    useEffect(()=>{
        dispatch(setRepo(repoName))

    },[repoName])



return <SearchContainer>
    <div className="search">

        <input type="text" name=""  placeholder="search repository" onChange = {(e)=>setRepoName(e.target.value)}/>
    </div>
    </SearchContainer>
    

}
export default SearchBox
import React from "react"
import { Container, Row, Col } from "react-bootstrap";

import {issueJson } from "./fixture"
import { CardContainer} from "../styles/issue-card";




const IssueCard:React.FC<any> = ({card}) => {
    console.log(card,"oe marketplace")
    
return <CardContainer>
    {/* {card?.map((issue:any,index:string) => { */}
        <Container>
            <Row>
                {card?.map((issue:any,index:string) => {
                  return  <Col lg={4}>
                    <div className="card">
                        <div className="card-header">
                            <span>{index}</span> &nbsp;
                            <span><a href={issue.url}>ISSUE: {issue.title.split(' ', 3).join(" ")}...</a></span> 
                            <p><a href={issue.repository.url}>{issue.repository.name}</a></p>
                            
                        </div>
                        <div className="card-body">
                            <span>status: </span>
                            {issue.state=="OPEN"?(<span className="state-open">{issue.state.toLowerCase()}</span>):(<span className="state-closed">{issue.state}</span>)}
                            <hr style ={{marginRight:"40px"}}/>
                            
                            <span className="comments">comments:{issue.comments.edges.length}</span>
                            <span className="more">More details...</span>
                        </div>
            
                        
                    </div>
                    <br />
                    </Col>
                    
                })}
            </Row>
        </Container>
    {/* })} */}
    
    
    
    
</CardContainer>
}
export default IssueCard
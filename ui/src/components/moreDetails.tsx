import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { MoreDetailsContainer } from "../styles/moreDetails";
import moment from "moment";

const MoreDetails: React.FC<any> = (props) => {
  const issueId = props.match.params.issue_id;

  // returns filtered issues from the redux state.
  const filteredIssues = useSelector(
    (state: any) => state.filteredIssues.filteredIssues
  );
  const issueClicked = filteredIssues?.filter((issue: any, index: number) => {
    return issue.id == issueId;
  });

  return (
    <MoreDetailsContainer>
      {issueClicked?.map((issue: any, index: number) => {
        const assignee = issue?.assignees?.edges[1]?.node.name;
        return (
          <div className="issue-details">
            <h6>{issue.title}</h6>
            <div>
              <span>
                <span className="span-title">Assignee:</span> &nbsp;{" "}
                {assignee == null ? <span className="span-details">No one assigned</span> : assignee}
              </span>
            </div>
            <div>
              <span>
                <span className="span-title">Open Date:</span> &nbsp;
                <span className="span-details">
                  {moment(issue.createdAt).calendar()}
                </span>
              </span>
            </div>
            <div>
              {" "}
              <span>
                <span className="span-title">Status:</span> &nbsp;
                <span className="span-details">
                {issue.state == "OPEN" ? (
                      <span style={{color:"green"}}>
                        {issue.state.toLowerCase()}
                      </span>
                    ) : (
                      <span style={{color:"red"}}>{issue.state.toLowerCase()}</span>
                    )}
                </span>
              </span>
            </div>
          </div>
        );
      })}
    </MoreDetailsContainer>
  );
};
export default MoreDetails;

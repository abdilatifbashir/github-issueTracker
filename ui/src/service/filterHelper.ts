export const filterGithubIssues = (issues: any, repoSearch: string) => {
  return issues?.filter((issue: any) => {
    const filterByRepo = issue?.repository?.name
      .toLowerCase()
      .includes(repoSearch.toLocaleLowerCase());
    const filterByIssueStatus = issue?.state
      .toLowerCase()
      .includes(repoSearch.toLocaleLowerCase());
    const filterByIssueTitle = issue?.title
      .toLowerCase()
      .includes(repoSearch.toLocaleLowerCase());

    if (repoSearch == "") {
      return issue;
    } else if (filterByRepo || filterByIssueStatus || filterByIssueTitle) {
      return issue;
    }
  });
};

const core = require('@actions/core');
const { Octokit } = require('@octokit/action');

const GITHUB_DONE_COLUMN_ID = core.getInput('github_done_column_id');
const GITHUB_RELEASE_NAME = core.getInput('github_release_name');

const [owner, repo] = process.env.GITHUB_REPOSITORY.split('/');
// const owner = 'terraform-providers';
// const repo = 'terraform-provider-aws'

async function main() {
  const octokit = new Octokit();

try{
    console.log(`${owner} ${repo}`)
        // eslint-disable-next-line no-await-in-loop
    const issueResponse = await octokit.rest.issues.get({
        owner,
        repo,
        issue_number: 19300,
    });
    console.log(issueResponse);
    issue = issueResponse.data;
    } catch (error) {
    core.setFailed(`Error retrieving issue from card ${error}`);
    }
}

try {
  main();
} catch (error) {
  core.setFailed(error);
}

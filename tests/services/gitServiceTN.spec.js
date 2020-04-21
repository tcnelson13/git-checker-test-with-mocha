var chai = require('chai');
var sinon = require('sinon');
var https = require('https');
var PassThrough = require('stream').PassThrough;

chai.should();

var gitJson = {
    "login": "tcnelson13",
    "id": 16468435,
    "node_id": "MDQ6VXNlcjE2NDY4NDM1",
    "avatar_url": "https://avatars0.githubusercontent.com/u/16468435?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/tcnelson13",
    "html_url": "https://github.com/tcnelson13",
    "followers_url": "https://api.github.com/users/tcnelson13/followers",
    "following_url": "https://api.github.com/users/tcnelson13/following{/other_user}",
    "gists_url": "https://api.github.com/users/tcnelson13/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/tcnelson13/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/tcnelson13/subscriptions",
    "organizations_url": "https://api.github.com/users/tcnelson13/orgs",
    "repos_url": "https://api.github.com/users/tcnelson13/repos",
    "events_url": "https://api.github.com/users/tcnelson13/events{/privacy}",
    "received_events_url": "https://api.github.com/users/tcnelson13/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Thomas Nelson",
    "company": "@legacydevteam ",
    "blog": "",
    "location": "Chicago",
    "email": null,
    "hireable": null,
    "bio": null,
    "public_repos": 10,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2015-12-28T21:33:33Z",
    "updated_at": "2020-04-03T13:08:41Z"
};

var repoJson = [
    {
        "id": 251623314,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNTE2MjMzMTQ=",
        "name": "async-programming-promises",
        "full_name": "tcnelson13/async-programming-promises",
        "private": false,
        "owner": {
            "login": "tcnelson13",
            "id": 16468435,
            "node_id": "MDQ6VXNlcjE2NDY4NDM1",
            "avatar_url": "https://avatars0.githubusercontent.com/u/16468435?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/tcnelson13",
            "html_url": "https://github.com/tcnelson13",
            "followers_url": "https://api.github.com/users/tcnelson13/followers",
            "following_url": "https://api.github.com/users/tcnelson13/following{/other_user}",
            "gists_url": "https://api.github.com/users/tcnelson13/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/tcnelson13/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/tcnelson13/subscriptions",
            "organizations_url": "https://api.github.com/users/tcnelson13/orgs",
            "repos_url": "https://api.github.com/users/tcnelson13/repos",
            "events_url": "https://api.github.com/users/tcnelson13/events{/privacy}",
            "received_events_url": "https://api.github.com/users/tcnelson13/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/tcnelson13/async-programming-promises",
        "description": null,
        "fork": false,
        "url": "https://api.github.com/repos/tcnelson13/async-programming-promises",
        "forks_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/forks",
        "keys_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/teams",
        "hooks_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/hooks",
        "issue_events_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/issues/events{/number}",
        "events_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/events",
        "assignees_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/assignees{/user}",
        "branches_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/branches{/branch}",
        "tags_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/tags",
        "blobs_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/languages",
        "stargazers_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/stargazers",
        "contributors_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/contributors",
        "subscribers_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/subscribers",
        "subscription_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/subscription",
        "commits_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/contents/{+path}",
        "compare_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/merges",
        "archive_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/downloads",
        "issues_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/issues{/number}",
        "pulls_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/labels{/name}",
        "releases_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/releases{/id}",
        "deployments_url": "https://api.github.com/repos/tcnelson13/async-programming-promises/deployments",
        "created_at": "2020-03-31T14:12:55Z",
        "updated_at": "2020-03-31T14:13:24Z",
        "pushed_at": "2020-03-31T14:13:18Z",
        "git_url": "git://github.com/tcnelson13/async-programming-promises.git",
        "ssh_url": "git@github.com:tcnelson13/async-programming-promises.git",
        "clone_url": "https://github.com/tcnelson13/async-programming-promises.git",
        "svn_url": "https://github.com/tcnelson13/async-programming-promises",
        "homepage": null,
        "size": 2817,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    },
    {
        "id": 245683308,
        "node_id": "MDEwOlJlcG9zaXRvcnkyNDU2ODMzMDg=",
        "name": "catch-of-theday",
        "full_name": "tcnelson13/catch-of-theday",
        "private": false,
        "owner": {
            "login": "tcnelson13",
            "id": 16468435,
            "node_id": "MDQ6VXNlcjE2NDY4NDM1",
            "avatar_url": "https://avatars0.githubusercontent.com/u/16468435?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/tcnelson13",
            "html_url": "https://github.com/tcnelson13",
            "followers_url": "https://api.github.com/users/tcnelson13/followers",
            "following_url": "https://api.github.com/users/tcnelson13/following{/other_user}",
            "gists_url": "https://api.github.com/users/tcnelson13/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/tcnelson13/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/tcnelson13/subscriptions",
            "organizations_url": "https://api.github.com/users/tcnelson13/orgs",
            "repos_url": "https://api.github.com/users/tcnelson13/repos",
            "events_url": "https://api.github.com/users/tcnelson13/events{/privacy}",
            "received_events_url": "https://api.github.com/users/tcnelson13/received_events",
            "type": "User",
            "site_admin": false
        },
        "html_url": "https://github.com/tcnelson13/catch-of-theday",
        "description": "Wes Bos React Course",
        "fork": false,
        "url": "https://api.github.com/repos/tcnelson13/catch-of-theday",
        "forks_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/forks",
        "keys_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/keys{/key_id}",
        "collaborators_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/collaborators{/collaborator}",
        "teams_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/teams",
        "hooks_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/hooks",
        "issue_events_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/issues/events{/number}",
        "events_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/events",
        "assignees_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/assignees{/user}",
        "branches_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/branches{/branch}",
        "tags_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/tags",
        "blobs_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/git/blobs{/sha}",
        "git_tags_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/git/tags{/sha}",
        "git_refs_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/git/refs{/sha}",
        "trees_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/git/trees{/sha}",
        "statuses_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/statuses/{sha}",
        "languages_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/languages",
        "stargazers_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/stargazers",
        "contributors_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/contributors",
        "subscribers_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/subscribers",
        "subscription_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/subscription",
        "commits_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/commits{/sha}",
        "git_commits_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/git/commits{/sha}",
        "comments_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/comments{/number}",
        "issue_comment_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/issues/comments{/number}",
        "contents_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/contents/{+path}",
        "compare_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/compare/{base}...{head}",
        "merges_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/merges",
        "archive_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/{archive_format}{/ref}",
        "downloads_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/downloads",
        "issues_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/issues{/number}",
        "pulls_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/pulls{/number}",
        "milestones_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/milestones{/number}",
        "notifications_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/notifications{?since,all,participating}",
        "labels_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/labels{/name}",
        "releases_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/releases{/id}",
        "deployments_url": "https://api.github.com/repos/tcnelson13/catch-of-theday/deployments",
        "created_at": "2020-03-07T18:20:28Z",
        "updated_at": "2020-03-07T18:21:48Z",
        "pushed_at": "2020-03-07T18:21:39Z",
        "git_url": "git://github.com/tcnelson13/catch-of-theday.git",
        "ssh_url": "git@github.com:tcnelson13/catch-of-theday.git",
        "clone_url": "https://github.com/tcnelson13/catch-of-theday.git",
        "svn_url": "https://github.com/tcnelson13/catch-of-theday",
        "homepage": null,
        "size": 1186,
        "stargazers_count": 0,
        "watchers_count": 0,
        "language": "JavaScript",
        "has_issues": true,
        "has_projects": true,
        "has_downloads": true,
        "has_wiki": true,
        "has_pages": false,
        "forks_count": 0,
        "mirror_url": null,
        "archived": false,
        "disabled": false,
        "open_issues_count": 0,
        "license": null,
        "forks": 0,
        "open_issues": 0,
        "watchers": 0,
        "default_branch": "master"
    }];

var gitService = require('../../services/gitService')();

describe('GitService TCN', function () {
    describe.only('GetUser TCN', function () {
        beforeEach(function () {
            this.request = sinon.stub(https, 'request');
        })
        it('should return user and repos', function () {
            this.timeout(10000);
            // var gitJson = { login: 'tcnelson13' };
            var gitResponse = new PassThrough();
            gitResponse.write(JSON.stringify(gitJson));
            gitResponse.end();

            var repoResponse = new PassThrough();
            repoResponse.write(JSON.stringify(repoJson));
            repoResponse.end();

            // the first object is the callback
            this.request
                .onFirstCall().callsArgWith(1, gitResponse).returns(new PassThrough())
                .onSecondCall().callsArgWith(1, repoResponse).returns(new PassThrough());

            // https.request = {};

            return gitService.getUser('tcnelson13').then(
                (user) => {
                    // console.log('GITHUB JSON PROFILE...', user);
                    var params = this.request.getCall(0).args;
                    // console.log('Params Zero...', params[0].headers);
                    // console.log(params);
                    params[0].headers['User-Agent'].should.equal('gitExample');

                    this.request.getCall(1).args[0].path.should.equal('/users/tcnelson13/repos');

                    user.login.should.equal('tcnelson13');
                    user.should.have.property('repos');
                }
            );
        })
        afterEach(function () {
            this.request.restore();
        })
    })
});
// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

import _ from 'lodash';

const GIT_ENDPOINT = 'https://api.github.com';

class GitService {

    async getUserRepos(username) {
        const url = `${GIT_ENDPOINT}/users/${username}/repos`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`GitService get user repos failed, HTTP status ${response.status}`);
        }
        const data = await response.json();
        if (!data) {
            throw new Error(`GitService failed, children not returned`);
        }
        console.log(data);
        return _.map(data, (repo) => {
            // abstract away the specifics of the reddit API response and take only the fields we care about
            return {
                id: _.get(repo, 'id'),
                name: _.get(repo, 'name'),
                url: _.get(repo, 'html_url'),
                watchers: _.get(repo, 'watchers')
            }
        });
    }

}
export default new GitService();
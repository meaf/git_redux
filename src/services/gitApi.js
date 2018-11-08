// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

import _ from 'lodash';
import { getUserName } from '../store/repos/reducer'

const GIT_ENDPOINT = 'https://api.github.co';

class GitService {

    async getUserRepos() {
        const username = getUserName();
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
            throw new Error(`RedditService getDefaultSubreddits failed, children not returned`);
        }
        return _.map(data, (subreddit) => {
            // abstract away the specifics of the reddit API response and take only the fields we care about
            return {
                name: _.get(subreddit, 'data.name'),
                fullname: _.get(subreddit, 'data.full_name'),
                url: _.get(subreddit, 'data.html_url'),
                watchers: _.get(subreddit, 'data.watchers')
            }
        });
    }

}
export default new GitService();
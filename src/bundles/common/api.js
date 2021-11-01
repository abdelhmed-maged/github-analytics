import {config} from './config';

export function getTopRepo() {
    return fetch(`${config.baseUrl}` + 'legacy/repos/search/:keyword?sort=stars&page=1&per_page=10', {
        headers: {
         'Authorization': `token ${config.token}`,
        }
    });
}

export function getTopUsers() {
  return fetch(`${config.baseUrl}` + 'search/users?q=repos:followers:%3E2000&language:javascript&page=1&per_page=10', {
      headers: {
       'Authorization': `token ${config.token}`,
      }
  });
}
export function fetchGithubData(url) {
  return fetch(`${url}`, {
      headers: {
       'Authorization': `token ${config.token}`,
      }
  });
}
// search/users?q=repos:followers:%3E2000&language:javascript&page=1&per_page=100
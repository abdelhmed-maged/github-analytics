import {getTopUsers, fetchGithubData} from '../common/api';
import {useEffect, useState } from 'react'
function TopUsers () {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
        getTopUsers().then((response) => {
     response.json().then(data => {  
        data.items.forEach((userData, i) => {
            fetchGithubData(`${userData.repos_url}`).then((res) => {
                res.json().then((d) => {
                    data.items[i].userRepo = d;
                    i === 9 &&  setRepo(data.items);
                })
            });
        });
        })
     }, (error) => { console.log('error >>>>>>>', error) });
    }, [])
       return (
        <div className="content">
            <h4>Top Followed Users</h4>
            
             { repo.length > 0 && repo.map((r, i) =>
          <div className="container-items" key={Math.random().toString(36).substr(2, 9)}>
            <div className="title-wrapper avatar">
            <img src={r.avatar_url} />
            <span className="title">{r.login}</span>
            </div>
            <div className="flex-row"> 
            <small>repo: {r.userRepo?.length} </small>
            </div>
          </div>
            )
            } 
            {repo.length === 0 && <div><div className="card"></div><div className="card"></div><div className="card"></div></div>}
            

        </div>
      );
    }


export default TopUsers;
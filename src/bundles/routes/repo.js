import {getTopRepo} from '../common/api';
import {useEffect, useState } from 'react'
function TrendingRepos () {
    const [repo, setRepo] = useState([]);
    useEffect(() => {
      getTopRepo().then((response) => {
     response.json().then(data => {  setRepo(data.repositories)})
     }, (error) => { console.log('error >>>>>>>', error) });
    }, [])
       return (
        <div className="content">
            <h4>Top Stared Repos</h4>
            
             { repo.length > 0 && repo.map((r, i) =>
          <div className="container-items" key={Math.random().toString(36).substr(2, 9)}>
            <div className="title-wrapper">
            <small>{r.score}</small>
            <span className="title">{r.description}</span>
            </div>
            <div className="flex-row"> 
            <small>By: {r.name}  <span>{r.username}</span></small>
            <small>Language: {r.language}</small>
            <small>Created At: {new Date(r.created).toLocaleString().toString()}</small>
            </div>
          </div>
            )
            } 
            {repo.length === 0 && <div><div className="card"></div><div className="card"></div><div className="card"></div></div>}
            

        </div>
      );
    }


export default TrendingRepos;
import {Link} from 'react-router-dom';
function SideBar () {
    return (
        <div>
            <h4><Link to='/'>Repo Analytics</Link></h4>
            <ul className="nav-lists-container">
                <li className="nav-list-item"><Link to='/trending-repos'>Top Rated </Link></li>
                <li className="nav-list-item"><Link to='/trending-users'>Top Users </Link></li>
            

            </ul>
        </div>
      );
    }


export default SideBar;
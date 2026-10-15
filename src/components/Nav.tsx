import {Link} from "react-router-dom";
import './index.css'



export default function Nav() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/education'> Education </Link>
                </li>
                <li>
                    <Link to='/professional'> Professional Experience </Link>
                </li>
                <li>
                    <Link to='/volunteering'> Volunteering Experience </Link>
                </li>
                <li>
                    <Link to='/skills'> Skills </Link>
                </li>
                <li>
                    <Link to='/projects'> Projects </Link>
                </li>
            </ul>
        </nav>
    )
};
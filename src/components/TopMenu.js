import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";

function TopMenu({isAuth, toggleAuth}) {
    const history = useHistory();

    function handleClick() {
        toggleAuth(false)
        history.push("/");
    }

    return (
        <nav>
            <div className="nav-container">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    {isAuth ?
                        <li><NavLink to="/blogposts" exact activeClassName="active-link">Blog Posts</NavLink>
                        </li> : null}

                    {isAuth ? <button
                            type="button"
                            onClick={handleClick}>
                            Uitloggen
                        </button>
                        :
                        <li>
                            <NavLink to="/login" exact activeClassName="active-link">Inloggen</NavLink>
                        </li>}
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu

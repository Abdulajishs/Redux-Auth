import { useDispatch, useSelector } from 'react-redux';
import classes from './Header.module.css';
import { authAction } from '../store';


const Header = () => {
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(state => state.auth.isAuthentication)

  const logOutHandler = ()=>{
    dispatch( authAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {
        isLoggedIn &&
        <nav>
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      }
    </header>
  );
};

export default Header;

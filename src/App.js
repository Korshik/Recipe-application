import {
  AppBar,
  Toolbar,  
  Button,
  makeStyles,
  
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import Routes from "./routes/Routes";
import useAuth from "./hooks/useAuth";
import FavoritesIcon from './containers/favoriteCard/components/FavoritesIcon';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  rightToolbar: {
    flexGrow: 1,
  },
  title: {
    marginRight: theme.spacing(2),
  },
  
  }));

function App() {
  const classes = useStyles();
  const auth = useAuth();
  const navigate = useNavigate();

  const onLogOut = () => {
    auth.logOut();
    navigate("/login");
  };

  return (
    <div className={classes.root}>
      <AppBar className="app-bar" position="static" style={ {backgroundColor: 'rgba(81,80,79,1)'}}>
        <Toolbar >
          <div className={classes.rightToolbar}>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
                <Button color="inherit" component={Link} to="/Recipes">Recipes</Button>
                
                <Button color="inherit" component={Link} to="/profile">
                
                  {auth.user.firstName} {auth.user.lastName}
                </Button>
                <Button color="inherit" onClick={onLogOut}>
                  Log out
                </Button>
                <Button className="-bookmark" component={Link} to="/Favorites"><FavoritesIcon/></Button>
              </>
            ) : (
              <>
                <Button color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={Link} to="/registration">
                  Registration
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

      <Routes />
    </div>
  );
}

export default App;

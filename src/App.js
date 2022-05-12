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
import { Typography } from "@material-ui/core";

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
      <Typography>
      <AppBar className="app-bar" position="static" style={ {backgroundColor: 'rgba(81,80,79, .6)'}}>
        <Toolbar variant="body">
          <div className={classes.rightToolbar}>
            <Button variant="body2" color="inherit" component={Link} to="/">
              Home
            </Button>
          </div>
          {auth.isLoaded &&
            (auth.user ? (
              <>
                <Button variant="body2" color="inherit" component={Link} to="/Recipes">Recipes</Button>
                
                <Button variant="body2" color="inherit" component={Link} to="/profile">
                
                  {auth.user.firstName} {auth.user.lastName}
                </Button>
                <Button variant="body2" color="inherit" onClick={onLogOut}>
                  Log out
                </Button>
                <Button className="-bookmark" component={Link} to="/Favorites"><FavoritesIcon/></Button>
              </>
            ) : (
              <>
                <Button variant="body2" color="inherit" component={Link} to="/login">
                  Login
                </Button>
                <Button variant="body2" color="inherit" component={Link} to="/registration">
                  Registration
                </Button>
              </>
            ))}
        </Toolbar>
      </AppBar>

      <Routes />
      </Typography>
    </div>
  );
}

export default App;

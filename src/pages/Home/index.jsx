import { Grid, makeStyles, Container, Typography } from "@material-ui/core";
import './style.css';
 
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1.5),
  
    
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <Container maxWidth='xl' className={classes.root}>
    <div className="home-background">
      <Grid className="home-container" container spacing={3} >
        <Grid className="home-slogan-container" item lg={12}>
          <Typography className="home-slogan-header" variant="h2" >
          Cooking is for the soul
          </Typography>
          <Typography className="home-slogan-text" variant="body1" >
         
          You don’t need to cook extravagant or muddled
           perfect works of art, simply great sustenance
            from new fixings.
          </Typography>
        </Grid>
      </Grid>
      </div>
    </Container>
  );
}

export default Home;

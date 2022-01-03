import React, { useEffect, useState } from "react";
import memories from "./assets/images/memories.png";
import { useDispatch } from "react-redux";
import useStyles from './styles';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { getAllPosts } from './actions/postsActions';
import Posts from './components/Posts/Posts'
import Form from "./components/Form/Form";

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [currentID, setCurrentID] = useState(null);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [currentID, dispatch])

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} varient="h2" align="center">
          Artwork
        </Typography>
        <img className={classes.image} src={memories} alt="icon" height="120" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.mainContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentID={setCurrentID}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentID={currentID} setCurrentID={setCurrentID}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;

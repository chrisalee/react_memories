import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';
import useStyles from './styles.js';

const Posts = (props) => {
    const { setCurrentID } = props;
    const classes = useStyles();
    const posts = useSelector((state) => state.postsReducer);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6}>
                            <Post post={post} setCurrentID={setCurrentID}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;
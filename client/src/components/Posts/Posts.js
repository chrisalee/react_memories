import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import useStyles from './styles.js';
import Post from './Post/Post';

const Posts = () => {
    const classes = useStyles();
    // const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsReducer);

    console.log(posts)
    // useEffect(() => {
    //     dispatch(posts())
    // }, [dispatch])

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {
                    posts.map((post) => (
                        <Grid key={post.id} item xs={12} sm={6}>
                            <Post post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    )
}

export default Posts;
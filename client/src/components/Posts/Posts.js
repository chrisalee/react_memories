import React from 'react';
import { useSelector } from 'react-redux';
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
        <>
            <div className={classes.mainContainer}>

            </div>



            <h1 >posts</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts;
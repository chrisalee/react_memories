import React from 'react';
import useStyles from './styles.js';

const Post = () => {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            1 post
        </div>
    )
}

export default Post;
import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles.js";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/postsActions";

//get current id of the post

const Form = ({ currentID, setCurrentID }) => {
  const classes = useStyles();

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentID ? state.postsReducer.find((message) => message._id === currentID) : null
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const clearForm = () => {
    setCurrentID(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    if (currentID) {
      dispatch(updatePost(currentID, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearForm();
  };
  
  

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography varient="h6">{currentID ? `Editing "${post.title}"` : "Posting Art"}</Typography>
        <TextField
          name="creator"
          varient="outlined"
          label="Creator"
          value={postData.creator}
          onChange={(event) =>
            setPostData({
              ...postData,
              creator: event.target.value,
            })
          }
          fullWidth
        />
        <TextField
          name="title"
          varient="outlined"
          label="Title"
          value={postData.title}
          onChange={(event) =>
            setPostData({
              ...postData,
              title: event.target.value,
            })
          }
          fullWidth
        />
        <TextField
          name="message"
          varient="outlined"
          label="Message"
          value={postData.message}
          onChange={(event) =>
            setPostData({
              ...postData,
              message: event.target.value,
            })
          }
          fullWidth
        />
        <TextField
          name="tags"
          varient="outlined"
          label="Tags"
          value={postData.tags}
          onChange={(event) =>
            setPostData({
              ...postData,
              tags: event.target.value.split(',')
            })
          }
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({
                ...postData,
                selectedFile: base64,
              })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          {currentID ? "Update Memory" : "Submit Memory"}
        </Button>

        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clearForm}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;

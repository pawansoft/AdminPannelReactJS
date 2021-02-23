import React, { useState, useEffect } from "react";
import "./mentor.scss";
import {
  Divider,
  IconButton,
  Card,
  Button,
  Menu,
  MenuItem,
  Avatar,
} from "@material-ui/core";
import { lighten, makeStyles } from '@material-ui/core/styles';
import TableData from '../tableData/tableData.jsx';
import adminServices from "../../services/admin_service.js";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});



const Mentor = (props) => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [allMentors, setAllMentors] = useState([]);

  useEffect(() => {
    getAllMentors();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getAllMentors = () => {
    adminServices.fetchAllMentors().then((responce) => {
        console.log(responce);
        setAllMentors(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  

  return (
    <>
      <div className="mentorContainer">
        <div id="firstPart">
          <p id="mentorPara">admin</p>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            id="mentorBtn"
            color="primary"
          >
            popup dialog 
          </Button>
          <TableData/>
        </div>
      </div>
      
    </>
  );
};
export default Mentor;

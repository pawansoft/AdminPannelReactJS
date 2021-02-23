import React from "react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Divider from "@material-ui/core/Divider";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import axiosServices from "../../services/axios_service.js";
import "./course.scss";

class Course extends React.Component {
  constructor(props) { 
    super(props);
    this.state = {
      openDialog: false,
      anchorEl: null,
      openDialogEdit: false,
      allCourseData: null,
    };
  }
  componentDidMount() {
    axiosServices
      .getServices("http://localhost:3000/cources")
      .then((responce) => {
        console.log(responce);
        this.setState({
          allCourseData: responce.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  handleClickOpenMenu = (event) => {
    console.log(event.currentTarget);
    this.setState({
      ...this.state,
      anchorEl: event.currentTarget,
    });
  };
  handleClickOpen = () => {
    this.setState({
      openDialog: true,
    });
  };
  handleClose = () => {
    this.setState({
      openDialog: false,
    });
  };
  handleOpenEdit = () => {
    this.setState({
      openDialogEdit: true,
    });
  };
  handleCloseEdit = () => {
    this.setState({
      openDialogEdit: false,
    });
  };
  handleCloseMenu = () => {
    this.setState({
      ...this.state,
      anchorEl: null,
      anchorE1color: null,
    });
  };
  render() {
    return (
      <div className="outer-container-course">
        <Dialog
          open={this.state.openDialogEdit}
          onClose={this.handleCloseEdit}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          {" "}
          <div className="box-top-header">Edit Course</div>
          <div className="box-content-course">
            {" "}
            <form noValidate autoComplete="off">
              <div className="text-fields-student">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Course id"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className="text-fields-student">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Course Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="student-buttton-container">
                <div
                  className="student-form-cancel-button"
                  onClick={this.handleCloseEdit}
                >
                  Cancel
                </div>
                <div className="student-form-add-button">Edit</div>
              </div>
            </form>
          </div>
        </Dialog>
        <Dialog
          open={this.state.openDialog}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className="box-top-header">Add Course</div>
          <div className="box-content-course">
            {" "}
            <form noValidate autoComplete="off">
              <div className="text-fields-student">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Course id"
                  variant="outlined"
                  size="small"
                />
              </div>

              <div className="text-fields-student">
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="Course Name"
                  variant="outlined"
                  size="small"
                />
              </div>
              <div className="student-buttton-container">
                <div
                  className="student-form-cancel-button"
                  onClick={this.handleClose}
                >
                  Cancel
                </div>
                <div className="student-form-add-button">Add</div>
              </div>
            </form>
          </div>
        </Dialog>
        <div className="header-student">
          <div className="header-student-text">Course Details</div>
          <div className="student-upload-button-container">
            <div className="add-student-button" onClick={this.handleClickOpen}>
              Add Course
            </div>
          </div>
        </div>
        <div className="outer-course-map-container">
          {this.state.allCourseData &&
            this.state.allCourseData.map((course) => (
              <div className="outer-card-container">
                <div className="single-card-course">
                  <div className="course-card-title-container">
                    <div className="course-card-title">
                    {course.courceName}
                    </div>
                    <IconButton
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={this.handleClickOpenMenu}
                    >
                      <MoreVertIcon fontSize="small" />
                    </IconButton>
                    <Menu
                      id="simple-menu"
                      anchorEl={this.state.anchorEl}
                      keepMounted
                      open={Boolean(this.state.anchorEl)}
                      onClose={this.handleCloseMenu}
                    >
                      <MenuItem onClick={this.handleCloseMenu}>Edit</MenuItem>
                      <MenuItem onClick={this.handleCloseMenu}>delete</MenuItem>
                    </Menu>
                  </div>

                  <Divider />
                  <div className="course-card-code">{course.courceID}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Course;

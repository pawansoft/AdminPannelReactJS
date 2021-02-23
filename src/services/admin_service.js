/*************************************************************
 *
 * Purpose         : Define actions for various http methods which
 *                   take url path and object to do require task and
 *                   return responce or error
 *
 * @description    : Actions to be done when http methods are called.
 *
 * @file           : axiosServices.js
 * @overview       : Actions of http methods
 * @module         : service
 * @version        : 1.0
 * @since          : 1/02/2021
 *
 * **********************************************************/

import axiosServices from "./axios_service.js";

class adminServices {
  fetchAllCourse = () => {
    console.log("reach fetch all course");
    return axiosServices.getServices(
      process.env.REACT_APP_FETCH_ALL_COURSES_PATH
    );
  };

  fetchAllMentors = () => {
    console.log(process.env.REACT_APP_FETCH_ALL_MENTORS_PATH);
    return axiosServices.getServices(
      process.env.REACT_APP_FETCH_ALL_MENTORS_PATH
    );
  };

  fetchAllStudents = () => {
    return axiosServices.getServices(
      process.env.REACT_APP_FETCH_ALL_STUDENTS_PATH
    );
  };
}

export default new adminServices();

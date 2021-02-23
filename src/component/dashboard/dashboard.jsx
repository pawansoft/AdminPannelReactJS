import React, { useEffect, useState, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import clsx from "clsx";
import AppBar from "../appBar/Appbar.jsx";
import SidenavBar from "../sideNavBar/SidenavBar.jsx";
import Loader from "../lazyLoading/Loading.jsx";
import Mentor from "../mentor/Mentor.jsx";
import Student from "../student/Student.jsx";
import MainDashboard from "../mainDashboard/MainDashboard.jsx";
import adminServices from "../../services/admin_service.js";
import Course from "../course/Course.jsx";
import "./dashboard.scss";
const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("DashBoard");
  const [allCource, setAllCource] = useState(null);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  useEffect(() => {
    adminServices
      .fetchAllCourse()
      .then((responce) => {
        console.log(responce);
        setAllCource(responce.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header" data-testid="dashboard-header">
        <AppBar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      </div>
      <div className="dashboard-body">
        <div
          className={clsx("dashboard-side-navbar", {
            "dashboard-side-navbar-active": sideNavOpen,
          })}
        >
          <SidenavBar
            selectedMenu={selectedMenu}
            setSelectedMenu={setSelectedMenu}
            sideNavOpen={sideNavOpen}
            setSideNavOpen={setSideNavOpen}
          />
        </div>
        <div
          className={clsx("dashboard-details", {
            "dashboard-details-shift": sideNavOpen,
          })}
        >
          <Switch>
            <Route
              path="/dashboard/main"
              component={() => <MainDashboard allCource={allCource} />}
            />
            <Route path="/dashboard/Mentor" component={() => <Mentor />} />
            <Route
              path="/dashboard/Student"
              component={() => (
                <Suspense fallback={<Loader />}>
                  <Student />
                </Suspense>
              )}
            />
            <Route path="/dashboard/Course" component={() => <Course />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

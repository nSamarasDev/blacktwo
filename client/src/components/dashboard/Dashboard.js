import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Spinner from "../../components/layout/Spinner";
import { getCurrentProfile } from "../../actions/profile";
import Alert from "../layout/Alert";

const Dashboard = (props) => {
  return (
    <>
      <section className="container">
        <div className></div>
      </section>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

export default connect(mapstaetToProps, { getCurrentProfile })(Dashboard);

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AppButton from "./AppButton";
import { NavigationActions } from "react-navigation";

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <AppButton
    title={isLoggedIn ? "Log Out" : "Open Login Screen"}
    onPress={isLoggedIn ? logout : loginScreen}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: "Logout" }),
  loginScreen: () =>
    dispatch(NavigationActions.navigate({ routeName: "Login" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);

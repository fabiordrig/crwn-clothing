import React from "react";
import "./sign-in.styles.scss";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInPage = (props) => (
  <div className="login">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInPage;

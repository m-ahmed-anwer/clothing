import React from "react";
import Signup from "../../components/sign-up/signup.component";
import Login from "../../components/sign-up/login.component";

function SignIn() {
  return (
    <div class="grid grid-cols-2 min-[300px]:grid-cols-1  md:grid-cols-2">
      <div>
        <Login />
      </div>
      <div>
        <Signup />
      </div>
    </div>
  );
}

export default SignIn;

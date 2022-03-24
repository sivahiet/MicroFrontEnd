import React from "react";
import Signin from "./Signin";

export default ({ onSignIn }) => {
  
  return (
    <div>
      <Signin onSignIn={onSignIn} />
    </div>
  );
};

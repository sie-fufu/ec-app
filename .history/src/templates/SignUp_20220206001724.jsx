import React, {useState} from "react";
import {TextInput} from "../components/UIkit";

const SignUp = () => {

  const [username, setUsername] = useState(""),
      [email, setEmail] = useState(""),
      [password, setPassword] = useState(""),
      [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={} label={} multiline={} required={} rows={} value={} type={} onChange={}
      />
    </div>
  );
};

export default SignUp;

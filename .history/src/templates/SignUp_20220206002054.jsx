import React, {useCallback, useState} from "react";
import {TextInput} from "../components/UIkit";

const SignUp = () => {

  const [username, setUsername] = useState(""),
      [email, setEmail] = useState(""),
      [password, setPassword] = useState(""),
      [confirmPassword, setConfirmPassword] = useState("");

  const inputUsername = useCallback(() => {

  }, [setUsername])

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">アカウント登録</h2>
      <div className="module-spacer--medium" />
      <TextInput
        fullWidth={true} label={"ユーザー名"} multiline={false} required={true} rows={1} value={username} type={"text"} onChange={}
      />
    </div>
  );
};

export default SignUp;

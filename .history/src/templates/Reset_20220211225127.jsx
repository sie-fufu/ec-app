import React, { useCallback, useState } from "react";
import { TextInput, PrimaryButton } from "../components/UIkit";
import { signIn } from "../reducks/users/operations";
import { useDispatch } from "react-redux";

const Reset = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );

  return (
    <div className="c-section-container">
      <h2 className="u-text__headline u-text-center">サインイン</h2>
      <div className="module-spacer--medium" />

      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        rows={1}
        value={email}
        type={"email"}
        onChange={inputEmail}
      />

      <div className="module-spacer--medium" />
      <div className="center">
        <PrimaryButton
          label={"Reset Password"}
          onClick={() => dispatch(signIn(email, password))}
        />
      </div>
    </div>
  );
};

export default Reset;

import { signInAction } from "./actions";

export const signIn = (email, password) => {
  return async (dispatch, getState) => {
    const state = getState();
    const isSignedIn = state.users.isSignedIn;

    if (!isSignedIn) {
      const userData = await emailSignIn(eail, password);
      dispatch(
        signInAction({
          isSignedIn: true,
          uid: "0001",
          username: "trahack",
        })
      );
    }
  };
};

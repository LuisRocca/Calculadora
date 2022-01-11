import { types } from "../types/types";
import { firebase, googleAuthProvider } from "../firebase/config-firebase";
// .auth().signInWithPopup(googleAuthProvider).then(data => console.log(data))
export const googleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ dataUser }) => {
        dispatch(login(dataUser.uid, dataUser.displayName));
      });
  };
};

export const emailAndPasswordLogin = (email, password) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
         console.log(user ,"emailandpassword21action")
         dispatch(login(user.uid, user.displayName ))
        });
  };
}

export const register = (email, password, username) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( async ({user}) => {
         await user.updateProfile({displayName: username})
         dispatch(login(user.uid, user.displayName ))
        });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const logout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch({ type: types.logout })
  }
}
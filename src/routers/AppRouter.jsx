import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import AppScreen from "../pages/AppScreen";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import { firebase } from "../firebase/config-firebase";
import { login } from "../actions/authAction";
import PublicRouter from "./PublicRouter";
import { loadData } from "../helpers/loadData";
import { leerRegistros } from "../actions/nominas";

const AppRouter = () => {
  const dispatch = useDispatch();
  const [log, setLog] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged( async (user) => {
      if (user) {
        // console.log(user.uid,"linea 23")
        dispatch(login(user.uid, user.displayName));
        setLog(true);

       const nominaData = await loadData(user.uid)
       dispatch(leerRegistros(nominaData)) 
        // console.log(nominaData)
      } else {
        setLog(false);
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" log={log} component={AuthRouter} />
        <PrivateRouter exact path="/" log={log} component={AppScreen} />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};

export default AppRouter;

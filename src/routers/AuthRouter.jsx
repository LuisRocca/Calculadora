import { Switch, Route, Redirect } from "react-router-dom";
// aca tocxa tener en cuenta que estamos usado react router dom 5.ipico y no la ultima version que es la v6
import LoginScreen from "../pages/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen";

const AuthRouter = () => {
  return (
    <>
      <Switch>
        <Route exact path="/auth/login" component={LoginScreen} />
        <Route exact path="/auth/register" component={RegisterScreen} />
        <Redirect to="/auth/login" /> {/* <-- evita un blucle infinito en el sistema */}
      </Switch>
    </>
  );
};
export default AuthRouter;

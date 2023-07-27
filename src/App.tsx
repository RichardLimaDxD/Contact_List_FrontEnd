import { UserService } from "./contexts/userContext";
import { RouteMain } from "./routes/routeMain";

const App = () => {
  return (
    <>
      <UserService>
        <RouteMain />
      </UserService>
    </>
  );
};

export { App };

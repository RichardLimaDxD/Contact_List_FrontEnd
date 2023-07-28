import { UserProvider } from "./contexts/userContext";
import { RouteMain } from "./routes/routeMain";

const App = () => {
  return (
    <>
      <UserProvider>
        <RouteMain />
      </UserProvider>
    </>
  );
};

export { App };

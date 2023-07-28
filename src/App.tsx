import { ContactProvider } from "./contexts/contactContext";
import { UserProvider } from "./contexts/userContext";
import { RouteMain } from "./routes/routeMain";

const App = () => {
  return (
    <>
      <UserProvider>
        <ContactProvider>
          <RouteMain />
        </ContactProvider>
      </UserProvider>
    </>
  );
};

export { App };

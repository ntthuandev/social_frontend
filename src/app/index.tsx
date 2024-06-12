import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes";
import AppProvider from "./main-provider";

const AppRouter = () => {
  return <RouterProvider router={createRouter} />;
};

const App = () => {
  return (
    <main className="relative flex h-screen">
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </main>
  );
};

export default App;

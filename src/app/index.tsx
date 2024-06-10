import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes";

const AppRouter = () => {
  return <RouterProvider router={createRouter} />;
};

const App = () => {
  return (
    <main className="flex h-screen">
      <AppRouter />
    </main>
  );
};

export default App;

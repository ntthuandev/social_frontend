import { RouterProvider } from "react-router-dom";

import { createRouter } from "./routes";

const AppRouter = () => {
  return <RouterProvider router={createRouter} />;
};

const App = () => {
  return <AppRouter />;
};

export default App;

import { RouterProvider } from "react-router";
import AppRouter from "./routes/AppRouter";
import ThemeSync from "./features/theme/components/ThemeSync";

function App() {
  return (
    <>
      <ThemeSync />
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;

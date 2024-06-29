import { Box, ThemeProvider } from "@mui/material";
import theme from "./components/palettestyle";
import Navbar from "./components/navbar";
import Content from "./components/Landing/content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/main",
    element: <Content />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      {/* <Navbar />
      <Content /> */}
    </ThemeProvider>
  );
};

export default App;

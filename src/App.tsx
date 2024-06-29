import { Box, ThemeProvider } from "@mui/material";
import theme from "./components/palettestyle";
import Content from "./components/Landing/content";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Content />,
  },
  {
    path: "/main",
    element: <Main />,
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

import { Box } from "@mui/material";
import Navbar from "../navbar";

const Content = () => {
  return (
    <Box sx={{ backgroundColor: "secondary.main", height: "100vh" }}>
      <Navbar/>
      <h1>Content</h1>
    </Box>
  );
};

export default Content;

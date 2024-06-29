import { Box } from "@mui/material";
import Tasklist from "./tasklist";
import Drawer from "@mui/material";
import { Diversity1TwoTone } from "@mui/icons-material";

const Theme = () => {
  return (
    <Box>
        {/* outermost box which contains within it the column things*/}
        <div>
            <h1>Theme element</h1>
            {/* displays lists here */}

            <div style={{display:"flex", justifyContent: "center", alignItems: "center"}}>

                <Tasklist/>
                <Tasklist/>
                <Tasklist/>
                <Tasklist/>
            </div>



        </div>
    </Box>
  );
};

export default Theme;

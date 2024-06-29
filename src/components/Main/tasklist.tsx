import { Box } from "@mui/material";

const Tasklist = () => {
  return (
    <Box>
        {/* outermost column */}
        <div style={{
            backgroundColor: "red",
            borderWidth: "2px",
            height: "500px", 
            width: "300px", 
            borderColor: "black"}}
            >
            <h1>Task list</h1>
            {/* displays tasks here */}
            <p>task1</p>
            <p>task2</p>
            <p>task3</p>


        </div>
    </Box>
  );
};

export default Tasklist;

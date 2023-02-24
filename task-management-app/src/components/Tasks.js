import { Box, Grid, Typography } from "@mui/material";
import { useState } from "react";
import TaskList from "./TaskList";
import DATA from "./data";

const Tasks = () => {
  const [taskItems, setTaskItems] = useState(DATA);

  const taskList = taskItems.map((menu) => (
    <TaskList
      key={menu.id}
      id={menu.id}
      day={menu.day}
      breakfast={{
        assigned: menu.task.Breakfast.assigned,
        dish: menu.task.Breakfast.dish,
      }}
      lunch={{
        assigned: menu.task.Lunch.assigned,
        dish: menu.task.Lunch.dish,
      }}
      dinner={{
        assigned: menu.task.Dinner.assigned,
        dish: menu.task.Dinner.dish,
      }}
    />
  ));

  const taskEditHandler = (event) => {};

  return (
    <Box
      component="form"
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography gutterBottom variant="h3" component="div">
        Meal Management System
      </Typography>
      <Box sx={{ flexGrow: 1, mx: 5, my: 3 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {taskList.map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              {taskList[index]}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Tasks;

import {
  TextField,
  Box,
  Grid,
  Typography,
  Button,
  MenuItem,
  Paper,
} from "@mui/material";
import { useState } from "react";
import TaskList from "./TaskList";

const DATA = [
  {
    id: 1,
    day: "Monday",
    task: {
      Breakfast: {
        assigned: "Bhaven",
        dish: "Poha",
      },
      Lunch: {
        assigned: "Dhairya",
        dish: "Bhinda",
      },
      Dinner: {
        assigned: "Shubham",
        dish: "Chole Chana",
      },
    },
  },
  {
    id: 2,
    day: "Tuesday",
    task: {
      Breakfast: {
        assigned: "Dhairya",
        dish: "Omelette",
      },
      Lunch: {
        assigned: "Shubham",
        dish: "Sev Tameta",
      },
      Dinner: {
        assigned: "Bhaven",
        dish: "Quesadia",
      },
    },
  },
  {
    id: 3,
    day: "Wednesday",
    task: {
      Breakfast: {
        assigned: "Shubham",
        dish: "Masala Oats",
      },
      Lunch: {
        assigned: "Bhaven",
        dish: "Paneer Bhurji",
      },
      Dinner: {
        assigned: "Dhairya",
        dish: "Pizza",
      },
    },
  },
  {
    id: 4,
    day: "Thursday",
    task: {
      Breakfast: {
        assigned: "Bhaven",
        dish: "Cereal",
      },
      Lunch: {
        assigned: "Dhairya",
        dish: "Rasa wada Bateta",
      },
      Dinner: {
        assigned: "Shubham",
        dish: "Bhartu",
      },
    },
  },
  {
    id: 5,
    day: "Friday",
    task: {
      Breakfast: {
        assigned: "Dhairya",
        dish: "Upma",
      },
      Lunch: {
        assigned: "Shubham",
        dish: "Mushroom Methi Malai",
      },
      Dinner: {
        assigned: "Bhaven",
        dish: "Pasta",
      },
    },
  },
  {
    id: 6,
    day: "Saturday",
    task: {
      Breakfast: {
        assigned: "Shubham",
        dish: "Poha",
      },
      Lunch: {
        assigned: "Dhairya",
        dish: "Poha",
      },
      Dinner: {
        assigned: "Bhaven",
        dish: "Poha",
      },
    },
  },
  {
    id: 7,
    day: "Sunday",
    task: {
      Breakfast: {
        assigned: "Bhaven",
        dish: "Poha",
      },
      Lunch: {
        assigned: "Shubham",
        dish: "Poha",
      },
      Dinner: {
        assigned: "Dhairya",
        dish: "Poha",
      },
    },
  },
];

const taskList = DATA.map((menu) => (
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

const Tasks = () => {
  const [submitTask, setTaskIsSumbbitting] = useState();

  const taskSubmitHandler = (event) => {
    event.preventDefault();
  };

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
      <Typography gutterBottom variant="h4" component="div">
        Add Task
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="name"
              required
              fullWidth
              id="name"
              label="Full Name"
              autoFocus
              helperText="Please enter your name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="selected-task"
              name="day"
              select
              required
              fullWidth
              id="day"
              label="Select Day"
              autoFocus
              helperText="Please select your day"
            >
              {DATA.map((option) => (
                <MenuItem key={option.day} value={option.day}>
                  {option.day}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-task"
              name="task"
              select
              required
              fullWidth
              id="task"
              label="Assigned Task"
              autoFocus
              helperText="Please select your task"
            >
              <MenuItem value="Breafast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="selected-dish"
              name="dish"
              required
              fullWidth
              id="dish"
              label="Selected Dish"
              autoFocus
              helperText="Please enter the dish you will be cooking"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          onClick={taskSubmitHandler}
        >
          Submit
        </Button>
      </Box>
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

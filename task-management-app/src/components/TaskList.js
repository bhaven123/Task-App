import {
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  IconButton,
  TextField,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";

const TaskList = (props) => {
  const [saveTask, setSaveTask] = useState(false);
  const [editTask, setEditTask] = useState({
    enteredPerson: {
      breakfast: props.breakfast.assigned,
      lunch: props.lunch.assigned,
      dinner: props.dinner.assigned,
    },
    enteredDish: {
      breakfast: props.breakfast.dish,
      lunch: props.lunch.dish,
      dinner: props.dinner.dish,
    },
  });

  const [isEditingTask, setIsEditingTask] = useState({
    editBreakfast: false,
    editLunch: false,
    editDinner: false,
  });

  const saveTaskHandler = (event) => {
    event.preventDefault();
    setSaveTask(true);
    setIsEditingTask(false);
  };

  const editBreakfastHandler = () => {
    setIsEditingTask({ ...isEditingTask, editBreakfast: true });
  };

  const editLunchHandler = () => {
    setIsEditingTask({ ...isEditingTask, editLunch: true });
  };

  const editDinnerHandler = () => {
    setIsEditingTask({ ...isEditingTask, editDinner: true });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.day}
        </Typography>
        <List>
          <ListItem>
            {!isEditingTask.editBreakfast ? (
              <ListItemText
                primary="Breakfast"
                secondary={`Person: ${props.breakfast.assigned}, Dish: ${props.breakfast.dish}`}
              />
            ) : (
              <div>
                <ListItemText primary="Breakfast" />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="breakfast-assigned"
                      id="breakfast-assigned-small"
                      value={editTask.enteredPerson.breakfast}
                      size="small"
                      label="Person"
                      onChange={(e) =>
                        setEditTask((prevState) => {
                          return {
                            ...prevState,
                            enteredPerson: { breakfast: e.target.value },
                          };
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="breakfast-dish"
                      id="breakfast-dish-small"
                      value={editTask.enteredDish.breakfast}
                      size="small"
                      label="Dish"
                      onChange={(e) =>
                        setEditTask({
                          ...editTask,
                          enteredDish: { breakfast: e.target.value },
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </div>
            )}
            <IconButton aria-label="edit" onClick={editBreakfastHandler}>
              <EditIcon />
            </IconButton>
          </ListItem>
          <ListItem>
            {!isEditingTask.editLunch ? (
              <ListItemText
                primary="Lunch"
                secondary={`Person: ${props.lunch.assigned}, Dish: ${props.lunch.dish}`}
              />
            ) : (
              <div>
                <ListItemText primary="Lunch" />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lunch-assigned"
                      id="lunch-assigned-small"
                      value={editTask.enteredPerson.lunch}
                      size="small"
                      label="Person"
                      onChange={(e) =>
                        setEditTask({
                          ...editTask,
                          enteredPerson: { lunch: e.target.value },
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="lunch-dish"
                      id="lunch-dish-small"
                      value={editTask.enteredDish.lunch}
                      size="small"
                      label="Dish"
                      onChange={(e) =>
                        setEditTask({
                          ...editTask,
                          enteredDish: { lunch: e.target.value },
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </div>
            )}
            <IconButton aria-label="edit" onClick={editLunchHandler}>
              <EditIcon />
            </IconButton>
          </ListItem>
          <ListItem>
            {!isEditingTask.editDinner ? (
              <ListItemText
                primary="Dinner"
                secondary={`Person: ${props.dinner.assigned}, Dish: ${props.dinner.dish}`}
              />
            ) : (
              <div>
                <ListItemText primary="Dinner" />
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dinner-assigned"
                      id="dinner-assigned-small"
                      value={editTask.enteredPerson.dinner}
                      size="small"
                      label="Person"
                      onChange={(e) =>
                        setEditTask({
                          ...editTask,
                          enteredPerson: { dinner: e.target.value },
                        })
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      name="dinner-dish"
                      id="dinner-dish-small"
                      value={editTask.enteredDish.dinner}
                      size="small"
                      label="Dish"
                      onChange={(e) =>
                        setEditTask({
                          ...editTask,
                          enteredDish: { dinner: e.target.value },
                        })
                      }
                    />
                  </Grid>
                </Grid>
              </div>
            )}
            <IconButton aria-label="edit" onClick={editDinnerHandler}>
              <EditIcon />
            </IconButton>
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" onClick={saveTaskHandler}>
          Save
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskList;

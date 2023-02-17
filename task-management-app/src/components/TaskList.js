import {
  Card,
  CardContent,
  CardActions,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
} from "@mui/material";
const TaskList = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.day}
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="Breakfast"
              secondary={`Person: ${props.breakfast.assigned}, Dish: ${props.breakfast.dish}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Lunch"
              secondary={`Person: ${props.lunch.assigned}, Dish: ${props.lunch.dish}`}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Dinner"
              secondary={`Person: ${props.dinner.assigned}, Dish: ${props.dinner.dish}`}
            />
          </ListItem>
        </List>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small">
          Edit
        </Button>
        <Button variant="contained" size="small">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TaskList;

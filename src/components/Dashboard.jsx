import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import classNames from "classnames";
import { Money } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Switch
} from "@material-ui/core";
import { addTodo, nukeTodos, removeTodo } from "../store/actions/todoActions";
import DoneCard from "./DoneCard";
import axios from "axios";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  icon: {
    marginRight: theme.spacing.unit * 2
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: "0 auto",
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const Dashboard = React.memo(props => {
  console.log("UPDATED");
  const { classes, cs, addTodo, nukeTodos, removeTodo } = props;
  const { todos } = cs;
  const handleAddTodo = () => {
    axios.get("https://picsum.photos/g/400/300?random")
      .then(response => {
        addTodo({
          id: Math.floor(Date.now() / 1000),
          name: "Labs",
          desc: "Do CS356 Assignments",
          complete: false,
          url: response.request.responseURL
        });
      })
      .catch(error => {
        alert("Could get random image for card");
      });
  };
  console.log(todos.length);
  const tds =
    todos.length > 0 ? (
      todos.map((todo, index) => (
        <Grid item key={index} sm={6} md={4} lg={3}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={todo.url} // eslint-disable-line max-len
              // title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {todo.name} {todo.complete ? "😎" : "💩"}
              </Typography>
              <Typography>{todo.desc}</Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small" color="primary">
                View
              </Button> */}
              <Button
                size="small"
                color="primary"
                onClick={() => removeTodo(todo.id)}
              >
                Remove
              </Button>
              <Switch checked={todo.completed} />
            </CardActions>
          </Card>
        </Grid>
      ))
    ) : (
      <DoneCard />
    );
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Money className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Assignments
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.heroUnit}>
          <div className={classes.heroContent}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Computer Science Duties
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Miguel's assigments he should be doing but instead he is coding
              his life away, and drinking, wine mostly.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAddTodo}
                  >
                    Add ToDo
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="primary"
                    onDoubleClick={() => nukeTodos()}
                  >
                    Nuke ToDos!
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {tds}
          </Grid>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Miguel Velazquez
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Actually do your assigments!
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
});

const mapStateToProps = state => {
  console.log(state);
  console.log(state.cs);
  return {
    cs: state.cs
    // todos: state.cs.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: id => dispatch(removeTodo(id)),
    addTodo: todo => dispatch(addTodo(todo)),
    nukeTodos: () => dispatch(nukeTodos())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(Dashboard);

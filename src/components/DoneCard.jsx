import React from "react";

import { withStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia} from "@material-ui/core";

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
    flexDirection: "column",
    width: 1200
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  }
});

const DoneCard = props => {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image="data:image/jpeg;base64,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" // eslint-disable-line max-len
        // title="Image title"
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          Completed all assignments <span role="img" aria-label="happy">😎</span>
        </Typography>
        {/* <Typography>{todo.desc}</Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          View
        </Button>
        <Button size="small" color="primary">
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(DoneCard);

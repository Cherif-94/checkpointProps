import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const styleImage = {
  width: "100%",
  borderRadius: "20px",
  boxShadow: "10px 10px 5px #ccc",
};
const MovieCard = ({ el, handle }) => {
  const classes = useStyles();

  return (
    <Card onClick={() => handle(el.name)} className={classes.root}>
      <div className="listMovies">
        <CardActionArea>
          <img style={styleImage} src={el.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {el.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {el.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={el.rating} readOnly />
          </Box>{" "}
          {/* <p> Rating {el.rating} </p> */}
          <p> Date {el.date} </p>
          <p> Type {el.type} </p>
        </CardActions>
      </div>
    </Card>
  );
};

export default MovieCard;

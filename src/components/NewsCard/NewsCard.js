import React from "react";
import { Card, CardActions, CardActionArea, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import useStyles from './styles'
const NewsCard = ({ article: { description, publishedAt, source, title, url, urlToImage }, i }) => {
    const classes = useStyles();
  return (
      <Card className={classes.card}>
          <CardActionArea href={ url} target="_blank">
              <CardMedia
                  className={classes.media }
          image={
            urlToImage ||
            "data:image/png;base64,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"
          }
        ></CardMedia>
              <div className={classes.details
              }>
          <Typography variant="body2" color="textSecondary" component="h2">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="h2">
            {source.name}
          </Typography>
        </div>
              <Typography className={ classes.title} gutterBottom variant="h5">
          {title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
          <CardActions className={ classes.cardActions}>
        <Button size="small" color="primary">
          Learn More
        </Button>
        <Typography variant="h5" color="textSecondary">
          {i + 1}
        </Typography>
      </CardActions>
    </Card>
  );
};

export default NewsCard;

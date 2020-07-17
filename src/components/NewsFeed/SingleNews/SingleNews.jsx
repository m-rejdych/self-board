import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.04) translateY(2%)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
    },
    '&:active': {
      transform: 'scale(1.03) translateY(1%)',
      boxShadow: '0 1px 6px rgba(0, 0, 0, 0.5)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));

const SingleNews = ({ author, date, imgUrl, description }) => {
  const classes = useStyles();

  return (
    <Card elevation={3} className={classes.root}>
      <CardHeader title={author} subheader={new Date(date).toDateString()} />
      <CardMedia className={classes.media} image={imgUrl} />
      <CardContent>
        <Typography>{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleNews;

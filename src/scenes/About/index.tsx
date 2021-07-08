import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
  },
}));

const About = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>About</div>
  );
};

export default About;

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'black',
  },
}));

const GlobalStatistic = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>GlobalStatistic</div>
  );
};

export default GlobalStatistic;

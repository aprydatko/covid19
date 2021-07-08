import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // color: 'red',
  },
}));

const CountryStatistics = (): JSX.Element => {
  const classes = useStyles();

  return (
    <div className={classes.root}>CountryStatistics</div>
  );
};

export default CountryStatistics;

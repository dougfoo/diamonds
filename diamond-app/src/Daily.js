/* eslint-disable no-script-url */

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Daily() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Diamond of the Day</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 Sept, 2019
      </Typography>
      <Typography component="p" variant="subtitle2">Carat: 1.0</Typography>
      <Typography component="p" variant="subtitle2">Color: D</Typography>
      <Typography component="p" variant="subtitle2">Clarity: VS1</Typography>
      <Typography component="p" variant="subtitle2">Cut: Ideal</Typography>        
    </React.Fragment>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  header: {
    height: '200px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '30px',
    lineHeight: '133%',
    textAlign: 'center',
    color: '#0B2B5B',
    marginTop: '60px',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '133%',
    textAlign: 'center',
    color: '#0B2B5B',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.header}>
      <Grid item xs={12}>
        <h1 className={classes.title}>Patient Referral Form</h1>
        <h2 className={classes.subtitle}>Hayes Valley Health San Francisco</h2>
      </Grid>
    </Grid>
  )
}


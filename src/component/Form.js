import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationSearchInput from './LocationSearch.js';


import AccountCircle from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';


const useStyles = makeStyles(theme => ({
  'form__div': {
    maxWidth: '780px',
    backgroundColor: 'white',
    margin: '0 auto',
    borderRadius: '4px',
  },
  'flex__div': {
    display: 'flex',
    alignItems: 'center',
  },
  number: {
    margin: '0',
    color: 'white',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '26px',
    lineHeight: '32px',
    fontFeatureSettings: "'pnum' on, 'lnum' on",
  },
  'number__grid': {
    paddingTop: '0 !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40px',
    backgroundColor: '#25A575',
    borderRadius: '4px 0 0 0',
    height: '65px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '24px',
    color: '#3A719B',
    paddingLeft: '16px',
  },
  form: {
    flexGrow: 1,
    maxWidth: '780px',
    backgroundColor: 'white',
    padding: '0 56px 56px 56px',
    margin: 'auto',
    borderRadius: '4px',
    '& input': {
      color: '#3A719B',
    }
  },
  form__input: {
    width: '100%',
    fontFamily: 'Montserrat',
    fontSize: '16px',
    lineHeight: '16px',
  },
  icon: {
    color: '#B8C7CC',
    fontSize: '16px',
  },
}));


export default function Form() {

  const classes = useStyles();
  
  return (
    <div className={classes.form__div}>
      <div className={classes.flex__div}>
        <div className={classes.number__grid}>
          <h1 className={classes.number}>1</h1>
        </div>

        <div>
          <h1 className={classes.title}>New Referral</h1>
        </div>
      </div>
      <Grid container spacing={3} className={classes.form}>



        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="first-name"
            placeholder="First Name"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <AccountCircle className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="last-name"
            placeholder="Last Name"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <AccountCircle className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="birth"
            placeholder="Date of Birth"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <CakeIcon className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="language"
            placeholder="Contact Language"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <TranslateIcon className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="phone"
            placeholder="Phone"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <PhoneIcon className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            className={classes.form__input}
            required
            id="email"
            placeholder="Email"
            InputProps={{
            startAdornment: 
              <InputAdornment position="start">
                <EmailIcon className={classes.icon} />
              </InputAdornment>
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <LocationSearchInput  />
        </Grid>


        <Grid item xs={12}>
          <TextField
            className={classes.form__input}
            id="notes"
            placeholder="Notes/Reason"
          />
        </Grid>

      </Grid>
    </div>
  )
}
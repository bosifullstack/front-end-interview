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
  form: {
    flexGrow: 1,
  },
  form__input: {
    width: '100%',
  },
}));

export default function Form() {

  const classes = useStyles();
  
  return (
    <div className={classes.form}>
      <Grid container spacing={3}>


          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.form__input}
              required
              id="first-name"
              placeholder="First Name"
              InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  <AccountCircle />
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
                  <AccountCircle />
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
                  <CakeIcon />
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
                  <TranslateIcon />
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
                  <PhoneIcon />
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
                  <EmailIcon />
                </InputAdornment>
              }}
            />
          </Grid>


          <LocationSearchInput className={classes.form__input}  />


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
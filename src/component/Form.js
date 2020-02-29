import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import { TextField, Collapse } from '@material-ui/core';
import InputAdornment from '@material-ui/core/InputAdornment';
import LocationSearchInput from './LocationSearch.js';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import AccountCircle from '@material-ui/icons/AccountCircle';
import CakeIcon from '@material-ui/icons/Cake';
import TranslateIcon from '@material-ui/icons/Translate';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import DeleteIcon from '@material-ui/icons/Delete';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';


const commonNumberHeader = {  
   paddingTop: '0 !important',
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
width: '40px',
borderRadius: '4px 0 0 0',
height: '65px',}

const useStyles = makeStyles(theme => ({
  'form__div': {
    maxWidth: '780px',
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: '4px',
  },
  'flex__div': {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
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
  'number__grid--1': {
    ...commonNumberHeader,
    backgroundColor: '#25A575',
  },
  'number__grid--2': {
    ...commonNumberHeader,
    backgroundColor: '#2595A5',
  },
  'number__grid--3': {
    ...commonNumberHeader,
    backgroundColor: '#3A719B',
  },
  'number__grid--4': {
    ...commonNumberHeader,
    backgroundColor: '#254B7A',
  },
  'number__grid--5': {
    ...commonNumberHeader,
    backgroundColor: '#142B58',
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
  form__icon: {
    marginRight: 16,
  },
  icon: {
    color: '#B8C7CC',
    fontSize: '16px',
  },
}));


export default function Form(props) {

  const { firstName, lastName, birthDate, contactLanguage, phone, email, address, notes, index, handleChange, handleDeletePatient } = props;

  const classes = useStyles();

  const getClassByIndex = (index) => {
    switch(index){
      case 1: return classes['number__grid--1']
      case 2: return classes['number__grid--2']
      case 3: return classes['number__grid--3']
      case 4: return classes['number__grid--4']
      case 5: return classes['number__grid--5']
      default: 
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div className={classes.form__div}>
      <div className={classes.flex__div} onClick={handleClick}>
        <div className={getClassByIndex(index + 1)}>
          <h1 className={classes.number}>{index + 1}</h1>
        </div>

        <div>
          <h1 className={classes.title}>{firstName ? firstName : "New Referral"}</h1>
        </div>

        <div style={{flex: 1}}/>
        
        <DeleteIcon className={classes.form__icon} onClick={handleDeletePatient(index)} style={{zIndex: 99 }} />

        {open ? <KeyboardArrowUp className={classes.form__icon}/> : <KeyboardArrowDown className={classes.form__icon}/>}

      </div>

      <Collapse in={open}>

        <Grid container spacing={3} className={classes.form}>

          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.form__input}
              required
              id="first-name"
              placeholder="First Name"
              value={firstName}
              onChange={e => handleChange(index, 'firstName', e.target.value)}
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
              value={lastName}
              onChange={e => handleChange(index, 'lastName', e.target.value)}
              InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  <AccountCircle className={classes.icon} />
                </InputAdornment>
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                className={classes.form__input}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                id="date-picker-inline"
                value={birthDate}
                onChange={date => handleChange(index, 'birthDate', date)}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
                InputProps={{
                startAdornment: 
                  <InputAdornment position="start">
                    <CakeIcon className={classes.icon} />
                  </InputAdornment>
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              className={classes.form__input}
              required
              id="language"
              placeholder="Contact Language"
              value={contactLanguage}
              onChange={e => handleChange(index, 'contactLanguage', e.target.value)}
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
              value={phone}
              onChange={e => handleChange(index, 'phone', e.target.value)}
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
              value={email}
              onChange={e => handleChange(index, 'email', e.target.value)}
              InputProps={{
              startAdornment: 
                <InputAdornment position="start">
                  <EmailIcon className={classes.icon} />
                </InputAdornment>
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <LocationSearchInput index={index} handleChange={handleChange} address={address} />
          </Grid>


          <Grid item xs={12}>
            <TextField
              className={classes.form__input}
              id="notes"
              placeholder="Notes/Reason"
              value={notes}
              onChange={e => handleChange(index, 'notes', e.target.value)}
            />
          </Grid>

        </Grid>
      </Collapse>
    </div>
  )
}
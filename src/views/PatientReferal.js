import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

import Form from '../component/Form';


const useStyles = theme => ({
  'form__div': {
    backgroundColor: '#CDE7ED',
    width: '100%',
    minHeight: 'calc(100% - 200px)',
    height: 'moz-fit-content',
    position: 'absolute',
    top: '200px',
  },
  title: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '24px',
    lineHeight: '133%',
    textAlign: 'center',
    color: '#0B2B5B',
    paddingTop: '30px',
  },
  subtitle: {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '20px',
    lineHeight: '133%',
    textAlign: 'center',
    color: '#0B2B5B',
    paddingBottom: '30px',
  },
  add__btn: {
    marginTop: 12
  },
  send__btn: {
    backgroundColor: '#0B2B5B',
    width: '100%',
    maxWidth: '780px',
    marginTop: '40px',
    borderRadius: '34.5px',
  }
});

const initialState = {firstName: '', lastName: '', birthDate: new Date(), contactLanguage: '', phone: '', email: '', address: '', notes: ''}

const PatientReferral = (props) => {
  const { classes } = props;

  const [state, setState] = useState({patients: [initialState]})

  const handleChange = (index, prop, value) => {
    const newPatients = state.patients.map((patient, i) => {
      if(index === i) return {...patient, [prop]: value}
      return patient
    })
    console.log(newPatients)
    setState({patients: newPatients})
  }

  const handleAddPatient = () => {
    setState({patients: [...state.patients, initialState]})
  }

  const handleDeletePatient = (index) => (e) => {
    if(state.patients.length > 1) {
      const filteredPatients = state.patients.filter((patient, i) => index !== i)
      setState({patients: filteredPatients})
    } else setState({patients: [initialState]})
    e.stopPropagation()
  }

  const postPatients = () => {
    state.patients.forEach((patient) => fetch('/api/referrals', {method: 'POST', body: JSON.stringify(patient)}) )
    
  }

  return (
    <div className={classes.form__div}>
      <Container fixed style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h1 className={classes.title}>Referral Patients</h1>
        <h2 className={classes.subtitle}>You can add up to five patients at a time</h2>
        {state.patients.map((patient, key) => <Form key={key} index={key} {...patient} handleChange={handleChange} handleDeletePatient={handleDeletePatient} />)}
        <Button color="primary" onClick={handleAddPatient} className={classes.add__btn} disabled={state.patients.length > 4}>+ ADD ANOTHER PATIENT</Button>
        <Button variant="contained" color="primary" className={classes.send__btn} onClick={postPatients}>SEND REFERRALS</Button>
      </Container>
    </div>
  )
}

export default withStyles(useStyles)(PatientReferral)
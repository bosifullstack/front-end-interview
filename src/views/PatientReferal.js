import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import Container from '@material-ui/core/Container';

import Form from '../component/Form';


const useStyles = theme => ({
  'form__div': {
    backgroundColor: '#CDE7ED',
    width: '100%',
    height: 'calc(100% - 200px)',
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
});


class PatientReferal extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.form__div}>
        <Container fixed>
          <h1 className={classes.title}>Referral Patients</h1>
          <h2 className={classes.subtitle}>You can add up to five patients at a time</h2>
          <Form />
        </Container>
      </div>
    )
  }
}

export default withStyles(useStyles)(PatientReferal)
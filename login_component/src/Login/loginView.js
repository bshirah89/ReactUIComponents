import React, { Component } from 'react';
//import logo from './logo.svg';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import RememberMe from './RememberMe/RemeberMe'
import { Link } from 'react-router-dom'
const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    subTextWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '8px ',
      //alignItems: 'baseline',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
    },
    dense: {
      marginTop: 16,
    },
    formContainer:{
      width:'60%',
      justifyContent: 'center',
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column'
    },
    menu: {
      width: 200,
    },
    ForgotPasswordWrapper: {
      display: 'flex', alignItems:'center', fontFamily:'Roboto', fontSize:'14px',  height: '48px',
      ':hover':{
        color: 'red'
      }
    }
  });
  
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
const LoginView = (props) => {
    const { classes } = props;
    return (
      <div style={{width: '80%', margin:'20% auto 0'}}>

      <Paper className={classes.root} elevation={1}>
       <Typography variant="h5" component="h3">
          Login
      </Typography>
       <div className={classes.formContainer}>
       {/* email */}
       <TextField
          // error
          id="outlined-error"
          // label="Error"
          placeholder='email'
          //defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          />
         <TextField
          // error
          type="password"
          id="outlined-error"
          // label="Error"
          placeholder='password'
          //defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          />
        <div className={classes.subTextWrapper}>
          <span>
          <RememberMe />
          </span>
          <span className={classes.ForgotPasswordWrapper}>
          <Link style={{color:'black', textDecoration: 'none'}} to="/about">Forgot password</Link>
          </span>
        </div>

       <Button variant="contained" color="primary" className={classes.button}>
        Login
      </Button>
      </div>
      </Paper>
    </div>
    );
}
// OutlinedTextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
export default withStyles(styles)(LoginView)
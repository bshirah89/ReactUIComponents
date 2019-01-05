import React from 'react'
import LoginView from './loginView'

class LoginContainer extends React.Component{
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };
      handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

      render () {
          return(
            <LoginView {...this.props} />
          )
      }


}

export default LoginContainer

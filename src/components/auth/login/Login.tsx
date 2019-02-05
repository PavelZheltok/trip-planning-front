import React from 'react';

class Login extends React.Component {
    render() {
        return (
            <form id='loginForm'>
                <label htmlFor="loginFormNameInput">
                    <p>User name or email</p>
                    <input type="text" name="name" id="loginFormNameInput"/>
                </label>
                <label htmlFor="loginFormPasswordInput">
                    <p>Password</p>
                    <input type="password" name="password" id="loginFormPasswordInput"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default Login;
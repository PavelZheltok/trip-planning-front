import React, {FormEvent} from 'react';
import {Dispatch} from 'redux'
import {
    IUser,
    IUniversalProps,
    IUniversalState,
    IPropsWithDispatch,
    IAuthenticatingState,
    IAuthenticatingProps
} from "../../../interfaces/interfaces";
import {userActions} from "../../../actions/auth_actions";
import { connect } from 'react-redux';
import store from "../../../store";
import {userConstants} from "../../../constants";

class Login extends React.Component<IAuthenticatingProps, IUniversalState> {

    constructor(props: IAuthenticatingProps) {
        super(props);
    //
        // reset login status
        //this.props.dispatch(userActions.logout());

        this.state  = {
            user: {
                email: '',
                userName: '',
                password: '',
                token: ''
            },

            isLoading: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: any) {
        const { name, value } = e.target;
        const user = this.state.user;
        if (name === 'email') {

            user.email = value;
            this.setState({user : user} );

        }
        if (name === 'password') {
            user.password = value;
            this.setState({user : user} );

        }
        console.log(this.state)

    }

    handleSubmit(e: FormEvent) {
        e.preventDefault();

        this.setState({ isLoading: true });
        const { dispatch } = this.props;
        const user = this.state.user;
        if (user.email && user.password) {
            console.log('LOGIN>TSX63');

            // this.props.dispatch({ type: userConstants.LOGIN_REQUEST, user });
            this.props.dispatch(userActions.login(user));
        }

    }

    render() {
        const { loggingIn } = this.props;
        return (
            <form id='loginForm' onSubmit={this.handleSubmit} >
                <label htmlFor="loginFormNameInput">
                    <p>User name or email</p>
                    <input type="text" name="email" id="loginFormNameInput" onChange={this.handleChange}/>
                </label>
                <label htmlFor="loginFormPasswordInput">
                    <p>Password</p>
                    <input type="password" name="password" id="loginFormPasswordInput" onChange={this.handleChange}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}


function mapStateToProps(state: IAuthenticatingState) {
    const user = state.user;
    const isLoading = state.isLoading;
    return {
        user,
        isLoading
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (user: IUser) => dispatch(userActions.login(user)),
        dispatch
    }

}

//export default Login;
// const connectedLogLoginPagein = connect(mapStateToProps, mapDispatchToProps)(Login);
const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);
export default LoginPage;
// export { connectedLogin as LoginPage };
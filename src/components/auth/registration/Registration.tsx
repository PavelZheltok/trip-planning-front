import React from 'react';

class Registration extends React.Component {
    render() {
        return (
            <form>
                <label htmlFor="registrationFormUsername">
                    <p>
                        Username (without blanks)
                    </p>
                    <input type="text" name="username" id="registrationFormUsername"/>
                </label>
                <label htmlFor="registrationFormEmail">
                    <p>
                        Email
                    </p>
                    <input type="email" name="email" id="registrationFormEmail"/>
                </label>
                <label htmlFor="registrationFormPassword">
                    <p>
                        Email
                    </p>
                    <input type="password" name="password" id="registrationFormPassword"/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Registration;
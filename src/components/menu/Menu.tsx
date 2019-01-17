import React  from 'react';

class Menu extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <div>
                        <ul>
                            <li>Register</li>
                            <li>Login</li>
                            <li>My Trips</li>
                            <li>Send Feedback</li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Menu;
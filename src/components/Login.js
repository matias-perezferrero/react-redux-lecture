import React, { Component } from 'react';
import { connect } from 'react-redux'
import { updateUser } from '../redux/reducer'

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: '',
            email: ''
        }
    }

    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    login = (e) => {
        // console.log('I am logging in')
        e.preventDefault();
        let userObj = {
            username: this.state.username,
            age: this.state.age,
            email: this.state.email
        }

        this.props.updateUser(userObj)
        this.props.history.push('/dashboard')
    }

    render(){
        console.log(this.props)
        const {username, age, email} = this.state;

        return (
            <section className='login'>
                <form className='login-form'>
                    <input name='username' value={username} placeholder='Username' onChange={e => this.handleInput(e)}/>
                    <input name='age' value={age} placeholder='Age' onChange={e => this.handleInput(e)}/>
                    <input name='email' value={email} placeholder='Email' onChange={e => this.handleInput(e)}/>
                    <button onClick={this.login}>Sign In</button>
                </form>
            </section>
        )
    }
}


//mapStateToProps takes in the reduxState, and then maps to our compnent's props object. This function needs to return an object.
function mapStateToProps(reduxState) {
    // return reduxState;
    //the object that is returned gets merged onto this.props of this login component
    return {
        user: reduxState.user
    }
}

//shorthand syntax example:
//const mapStateToProps = reduxState => reduxStates

//the mapDispatchToProps object, puts our actions on props and hooks them up to the store reducers
const mapDispatchToProps = {
    updateUser: updateUser
}


//connect is the method that allows our component to connect to the redux store
export default connect(mapStateToProps, mapDispatchToProps)(Login);
// export default Login;
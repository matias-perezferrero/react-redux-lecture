import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Dashboard extends Component {

    render(){
        console.log(this.props)
        // if (!this.props.user.email) {
        //     return <Redirect to="/" />
        // }

        return (
            <main className='dashboard'>
                <h1>Your Pokemon</h1>
                <section>
                    <h3>No Pokemon To Display</h3>
                    <button>Change Pokemon</button>
                </section>
            </main>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user.user,
        pokemon: reduxState.pokemon.pokemon
    }
}


export default connect(mapStateToProps)(Dashboard);
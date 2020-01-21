import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Customer from 'components/Customers'

class Info extends Component {
    state = {
        customers: ''
        }
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({customers: res}))
        .catch(err => console.log(err));
        }
        
        callApi = async () => {
        const response = await fetch('/api/customers');
        const body = await response.json();
        return body;
        }
        
    render() {
        const { classes } = this.props;
        return (
            <div>
                {this.state.customers ? this.state.customers.map(c => {
                    return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                }):''}
            </div>
        );
    }
}

export default Info;
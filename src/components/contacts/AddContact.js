import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name : '',
        email: '',
        phone: '',
        errors: {}
    }
    onChange = (e) => this.setState({[e.target.name]: e.target.value})
    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const { name,email,phone } = this.state;
        // form validation
        if(name === ""){
            this.setState({errors: {name: "Name is required"}});
            return;
        }
        if(email === ""){
            this.setState({errors: {email: "Email is required"}});
            return;
        }
        if(phone === ""){
            this.setState({errors: {phone: "Phone is required"}});
            return;
        }

        const newContact = { name,email,phone };
        const res = await axios.post('http://jsonplaceholder.typicode.com/users', newContact);
        dispatch({ type:"ADD_CONTACT",  payload:res.data});

        this.setState({
            name:'',
            email:'',
            phone:'',
            errors:{}
        });

        this.props.history.push('/');
    }

    render() { 
        const { name,email,phone, errors } = this.state;
        return (
            <Consumer>
            { value => {
                const { dispatch } = value;
                return (
                    <div className="card mb-3">
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                <TextInputGroup label="name" name="name" value= {name} placeholder="Enter Name...." onChange={this.onChange} error={errors.name} />

                                <TextInputGroup label="email" name="email" value= {email} placeholder="Enter Email...." type="email"  onChange={this.onChange} error={errors.email} />

                                <TextInputGroup label="phone" name="phone" value= {phone} placeholder="Enter Phone...." onChange={this.onChange} error={errors.phone} />

                                <button className="btn btn-light btn-block" type="submit">Add Contact</button>
                            </form>
                        </div>
                    </div>
                );
            }}
            </Consumer>
        );
    }
}
 
export default AddContact;
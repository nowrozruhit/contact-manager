import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Consumer} from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state = {
        showContactInfo : false
    };

    onDeleteClick = async (id, dispatch) => {
       await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
       dispatch({type:'DELETE_CONTACT', payload:id });
    }

    render() {
        const {id,name, email, phone} = this.props.contact;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name} <i className="fa fa-sort-down" style={{cursor:'pointer'}} onClick={() => this.setState({showContactInfo : !this.state.showContactInfo})}></i>

                                <i className="fa fa-times" style={{float:'right', color:'red', cursor:'pointer'}} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>

                                <Link to={`contact/edit/${id}`}>
                                    <i className="fas fa-pencil-alt mr-2" style={{float:'right', color:'blue', cursor:'pointer'}}></i>
                                </Link>
                            </h4>
                            {showContactInfo ? <ul className="list-group">
                            <li className="list-group-item">Email: {email}</li> 
                            <li className="list-group-item">Phone: {phone}</li> 
                            </ul> : null}
                        </div>
                    );
                    
                }}
            </Consumer>
        );
    }
}

export default Contact;

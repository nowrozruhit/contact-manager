import React, { Component } from 'react';

class Test extends Component {
    state = {
        userId:'',
        title:'',
        completed:''
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                userId: data.userId,
                title: data.title,
                completed: data.completed
            }))
    }

    render() {
        const { userId, title, completed} = this.state; 
        const status = completed ? 'Yes' : 'No';
        return (
            <div>
                <h1>{ title }</h1>
                <p>ID: { userId }</p>
                <p>completed: { status }</p>
            </div>
        );
    }
}
 
export default Test;
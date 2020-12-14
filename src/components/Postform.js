import Axios from 'axios';
import React, { Component } from 'react'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        // console.log(e.target.value,e.target.name)
        // this.setState
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        Axios(
            {
                method: 'post',
                url: 'https://jsonplaceholder.typicode.com/posts',
                headers: {
                    'content-type': 'application/json'
                },
                data: post
            }
        ).then((res) => (res.data))
        .then((data) => {
            console.log(data)
        })
        .catch((error) => {
            // handle error
            console.log(error);
        }).then(() => {
            // always executed
            console.log("at the end of the API call adding a post")
        });
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br />
                        <input type='text' name='title' onChange={this.onChange} value={this.state.title} />
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br />
                        <input type='text' name='body' onChange={this.onChange} value={this.state.body} />
                    </div>
                    <br />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}


export default Postform
import React, { Component } from 'react'
const Axios = require('axios');

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: []
        }

    }


    componentDidMount() {
        // console.log("this.state")
        // console.log(this.state)

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                // handle success
                // console.log("this.state inside")
                // console.log(this.state)
                // console.log(response.data);
                this.setState({ posts: response.data })
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
            .then(() => {
                // always executed
                console.log("at the end of the API call")
            });

    }


    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        // console.log("postItems")
        // console.log(postItems)
        return (
            <div>
                <h1>Post</h1>
                {postItems}
            </div>
        )
    }
}

export default Posts



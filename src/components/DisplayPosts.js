import React, { Component } from 'react'
import { listPosts } from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'

class DisplayPosts extends Component {

    state = {
        posts: []
    }

    componentDidMount = async () => {
        this.getPosts()
    }

    getPosts = async () => {
        const result = await API.graphql(graphqlOperation(listPosts));
        this.setState({ posts: result.data.listPosts.items})
        //console.log("All posts:", JSON.stringify(result.data.listPosts.items));
    }

    render() {
        const { posts } = this.state //destruct this.state.posts
        return posts.map((post) => {
            return (
                <div className="posts" key={ post.id }>
                    <h1> { post.postTitle } </h1>
                    <span style={{ fontStyle: "italic", color: "#0ca5e297"  }}>
                        { "By: "} { post.postOwnerUsername }
                        { ", on "}
                        <time>
                            {" "}
                            { new Date(post.createdAt).toDateString() }
                        </time>
                    </span>

                    <p> { post.postBody } </p>
                </div>
            )
        })
    }
}

export default DisplayPosts;
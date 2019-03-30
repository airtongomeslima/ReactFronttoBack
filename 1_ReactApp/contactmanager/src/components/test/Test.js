import React, { Component } from "react";

class Test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
    console.log("Component did mount");
  }

  componentWillMount() {
    console.log("component Will Mount");
  }

  componentDidUpdate() {
    console.log("component update");
  }

  componentWillUpdate() {
    console.log("component will update");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("next props received");
  }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}

export default Test;

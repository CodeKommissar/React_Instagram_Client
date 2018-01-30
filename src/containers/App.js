import React, { Component } from 'react';
import './App.css';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const url = "https://api.instagram.com/v1/users/search?q=jack&access_token=3506001217.0e9af57.74db71a834234a59ab0b7f086808f4e8"

class App extends Component {
  state = {
    profile: null,
    posts: null
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(e => e);
  }

  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
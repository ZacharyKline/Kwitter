import Navbar from "./Navbar";
import React, { Component } from "react";
// import Image, {Component} from "react";

//TODO: decide what will be displayed

// Tamekia - added something to start with to build the user profile page. 
// So far the general idea is showing on screen just missing actual content 
// to make it work... Some items require styling to make them line up the way
// we would like the page to look


class UserProfile extends Component {
  state = {
    // userInfo
    username: " ", 
    img: " ", 
    bio: " ", 
    // userBar
    following: " ",
    followers: " ",
    // userContent
    content: " ", 
    likes: " ",
    comments: " ", 
    rekwit: " ",
    // logo
    kwitterLogo: " ", 
  }

  render() {
    return (
      <React.Fragment>
      <Navbar/>
    <div className = "userProfile">

    <div className = "userBar">
    <h5>Following: {this.state.following}</h5>
    <h5>Followers: {this.state.followers}</h5>
    </div>

    <div className = "userInfo"> 
    <p>This is the user profile</p>
    <h1>{this.state.username}</h1>
    <image src= {this.state.img}></image>
    <h3>Bio: {this.state.bio}</h3>
    </div>
    
    <div className = "userContent">
    <p>Users post here... {this.state.content}</p>
    <button> Load media here... </button>
    <h5>Likes: {this.state.like}</h5>
    <button>Click to Like</button>
    <h5>Comments: {this.state.comments}</h5>
    <button>Click to Comment</button>
    <h5>Rekwits: {this.state.rekwit}</h5>
    <button>Click to Rekwit</button>
    </div>

    <div className = "logo">
    <image src = {this.state.kwitterLogo}></image>
    </div>
    
    </div>
    </React.Fragment>
    )
  }
}

export default UserProfile;

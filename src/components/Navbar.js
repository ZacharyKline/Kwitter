import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";
import Logout from "./Logout";
import { Link } from "react-router-dom";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default class Navbar extends Component {
  state = { activeItem: "home" };

  render() {
    const { activeItem } = this.state;
    return (
      <List>
        <Menu style={{ backgroundColor: "#5D9DE6" }}>
          <Link to="/home">
            <Menu.Item name="home" active={activeItem === "home"} />
          </Link>
          <Link to="/profile">
            <Menu.Item name="profile" active={activeItem === "profile"} />
          </Link>
          <Link to="/">
            <Menu.Item name="landing" active={activeItem === "landing"} />
          </Link>
          <Link to="/users">
            <Menu.Item name="users" active={activeItem === "users"} />
          </Link>
          <Logout />
        </Menu>
      </List>
    );
  }
}

import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";

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
          <Menu.Item href="/home" name="home" active={activeItem === "home"} />
          <Menu.Item
            href="/profile"
            name="profile"
            active={activeItem === "profile"}
          />
          <Menu.Item
            href="/"
            name="landing"
            active={activeItem === "landing"}
          />
        </Menu>
      </List>
    );
  }
}

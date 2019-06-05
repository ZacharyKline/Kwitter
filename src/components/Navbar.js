import React, { Component } from "react";
import { Menu, List } from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default class Navbar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <List>
        <Menu>
          <Menu.Item
            href="/"
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            href="/profile"
            name="profile"
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </List>
    );
  }
}

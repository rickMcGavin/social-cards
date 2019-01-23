import React, { Component } from "react";
import Card from "./card";
import axios from "axios";
import { capitalizeFirst } from '../functions';

export default class Container extends Component {
  state = { loading: true };

  componentDidMount() {
    const url = "https://randomuser.me/api/?results=6";
    axios
      .get(url)
      .then(res => {
        return res.data.results;
      })
      .then(data => {
        this.setState({ loading: false, users: data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (!this.state.loading) {
      return this.state.users.map((user, i) => {
        const { email, phone } = user;
        const img = user.picture.medium;
        const { username } = user.login;
        const { first, last } = user.name;
        const firstName = capitalizeFirst(first);
        const lastName = capitalizeFirst(last);
        return (
          <Card
            key={i}
            first={firstName}
            last={lastName}
            img={img}
            email={email}
            phone={phone}
            username={username}
          />
        );
      });
    } else if (this.state.loading) {
      return <div>loading</div>;
    }
  }
}

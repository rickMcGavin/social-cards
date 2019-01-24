import React, { Component } from 'react';
import Card from "./card";
import Loader from './loader';
import { capitalizeFirst } from '../functions';



class CardsView extends Component {

  renderLoader() {
    return <Loader />;
  }

  renderCards() {
    return this.props.users.map((user, i) => {
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
  }
  
  renderError() {
    return <div>Error please try refreshing again</div>;
  }


  render() {
    if (!this.props.loading && this.props.users) {
      return this.renderCards();
    } else if (this.props.loading) {
      return this.renderLoader();
    } else {
      return this.renderError();
    }
  }
}

export default CardsView;
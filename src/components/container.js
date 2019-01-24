import React, { Component } from "react";
import CardsView from './cardsView';
import axios from "axios";

export default class Container extends Component {
  state = { loading: true };

  componentDidMount() {
    const baseUrl = 'https://randomuser.me/api/';
    const nationalities = 'au,br,ca,ch,de,dk,es,fi,fr,gb,ie,no,nl,nz,tr,us';
    const results = '6'
    const url = `${baseUrl}?results=${results}&nat=${nationalities}`;
    axios
      .get(url)
      .then(res => {
        return res.data.results;
      })
      .then(data => {
        this.setState({ loading: false, users: data });
      })
      .catch(error => {
        this.setState({ error: true, loading: false })
      });
  }

  render() {
    return <CardsView {...this.state} />
  }
}

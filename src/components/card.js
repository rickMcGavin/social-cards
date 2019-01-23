import React from "react";

const Card = props => (
  <div className="card">
    <div className="card__container card__container--column">
      <img className="card__image" src={props.img} alt="" />
      <div className="card__name">{`${props.first} ${props.last}`}</div>
      <div className="card__username">{props.username}</div>
    </div>
    <div className="card__container">
      <div className="card__email--title">Email</div>
      <div className="card__email">{props.email}</div>
    </div>
    <div className="card__container">
      <div className="card__phone--title">Phone</div>
      <div className="card__phone">{props.phone}</div>
    </div>
  </div>
);

export default Card;

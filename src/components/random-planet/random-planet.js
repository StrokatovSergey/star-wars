import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';
import ErrorVuew from '../error-vuew/error-vuew';

import './random-planet.css';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet: planet,
      loading: false,
      error: false,
    });
  };

  onError = () => {
    this.setState({
      error: true
    })
  }

  updatePlanet() {
    const id = 10;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  }

  render() {

    const spinner = this.state.loading && !this.state.error ? <Spinner /> : null;
    const content = !this.state.loading ?  <PlanetView planet={this.state.planet}/> : null;
    const errorView = this.state.error ?  <ErrorVuew /> : null;


    return (
      <div className="random-planet jumbotron rounded">
        {spinner}
        {content}
        {errorView}
      </div>

    );
  }
}

const PlanetView = (props) => {
  const { id, name, population, rotationPeriod, diameter } = props.planet;

  return (
    <React.Fragment>
      <img className="planet-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      <div>
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}
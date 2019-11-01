import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

  SwapiService = new SwapiService();



  state = {
    idPicture: null,
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null
  }

  constructor(){
    super();
    this.updatePlanet();
  }

<<<<<<< HEAD
  updatePlanet(){
    const idPicture = Math.floor(Math.random()*25 + 2);
  this.SwapiService.getPlanet(idPicture)
    .then((planet)=>{
      this.setState({
        idPicture: idPicture,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter
      })
    })
=======
  onPlanetLoaded = (planet) => {
    this.setState({ planet });
  };

  updatePlanet() {
    const id = 12;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
>>>>>>> b01bdc2a3173f68d8d6b8fda303c7bdba53edb89
  }

  render() {

<<<<<<< HEAD
    const {population, rotationPeriod, diameter, name, idPicture} = this.state;
=======
    const { planet: { id, name, population,
      rotationPeriod, diameter } } = this.state;
>>>>>>> b01bdc2a3173f68d8d6b8fda303c7bdba53edb89

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
<<<<<<< HEAD
             src={`https://starwars-visualguide.com/assets/img/planets/${idPicture}.jpg`}/>
=======
             src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
>>>>>>> b01bdc2a3173f68d8d6b8fda303c7bdba53edb89
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
<<<<<<< HEAD
              <span className="term">Population {population}</span>
             
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period {rotationPeriod}</span>
             
            </li>
            <li className="list-group-item">
              <span className="term">Diameter {diameter}</span>
              
=======
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
>>>>>>> b01bdc2a3173f68d8d6b8fda303c7bdba53edb89
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

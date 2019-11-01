import React, { Component } from 'react';

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
  }

  render() {

    const {population, rotationPeriod, diameter, name, idPicture} = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src={`https://starwars-visualguide.com/assets/img/planets/${idPicture}.jpg`}/>
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population {population}</span>
             
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period {rotationPeriod}</span>
             
            </li>
            <li className="list-group-item">
              <span className="term">Diameter {diameter}</span>
              
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from  '../../services/swapi-service';

export default class RandomPlanet extends Component {
  constructor(){
    super()
    this.updatePLanet()
  }

  swapiService = new SwapiService();

  state = {
    pictureId: null,
    population: null,
    name: null,
    rotationPeriod: null,
    duameter: null
  }
  

  updatePLanet(){
    const randomNum = Math.floor(Math.random() * 20 + 2);
    this.swapiService.getPlanet(randomNum)
      .then((planet)=>{
        this.setState({
          pictureId: randomNum,
          population: planet.population,
          name: planet.name,
          rotationPeriod: planet.rotation_period,
          duameter: planet.duameter
        })
      })
  }

  render() {

    const { population, name, rotationPeriod, duameter, pictureId } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${pictureId}.jpg`}/>
        <div>
          <h4>Planet Name {name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population {population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period {rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter {duameter}</span>
            </li>
          </ul>
        </div>
      </div>

    );
  }
}

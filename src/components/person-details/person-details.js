import React, { Component } from 'react';

import Spinner from '../../components/spinner/spinner';
import swapiService from '../../services/swapi-service';
import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new swapiService();

  state = {
    person: null
  }

  componentDidMount() {
    this.updatePerson()
  }
  componentDidUpdate(prevProps){
    if (this.props.personId === prevProps.personId) {
      console.log('new ID');
      
      
    }    
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  showAnimation = () => {
    return <Spinner />
  }
  updatePerson () {
    const {personId} = this.props;
    console.log(personId);
    
    if (!personId) {
      return;
    }
    this.swapiService
     .getPerson(personId) 
      .then((person)=>{
        this.setState({person})
      })
  }

  render() {

    if (!this.state.person) {
      return <span>select a person from a list</span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;
    
    
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

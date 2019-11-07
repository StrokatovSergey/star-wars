import React, { Component } from 'react';

import Spinner from '../spinner/spinner';
import swapiService from '../../services/swapi-service';
import './item-list.css';



export default class ItemList extends Component {

  swapiService = new swapiService();

  state = {
    peopleList : null,
    peopleList2 : [
      {name: 'seka'},
      {name: 'peka'},
      {name: 'sfsdsfda'}
    ]
  }

  componentDidMount(){
    this.swapiService
     .getAllPeople()
      .then((peopleList)=>{
        this.setState({
          peopleList
        })
      })     
  }

  renderItems(arr){
    return arr.map(({name, id})=>{
      return (
        <li className="list-group-item" 
        key={id}
        onClick={()=> this.props.onItemSelected(id)}
        >
        {name}
      </li>
      )
    })
  }

  render() {

    const {peopleList} = this.state;
    

    if (!peopleList) {
      return <Spinner />
    }

    const list = this.renderItems(peopleList)
    return (
      <ul className="item-list list-group">
        {/* {this.state.peopleList.map((item)=>{
          return (
            <li className="list-group-item">
              {item.name}
            </li>
        )
        })} */}

        {list}
      </ul>
    );
  }
}

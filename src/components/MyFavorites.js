import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import FavChocolateCard from './FavChocolateCard.js';
import Row from 'react-bootstrap/Row'

class MyFavorites extends React.Component {
  render() {
    
    
    return (
      
        <div>
             
            <h1>your fav are</h1>
            <h3>Select your favorites :) </h3>
            <Row>
         {this.props.favdata.map(value=>{
             return(<FavChocolateCard card={value} email={this.user}  updatedData={this.props.updatedData}/>)
            


         })} </Row>
        </div>
    )
}
}

export default withAuth0(MyFavorites);


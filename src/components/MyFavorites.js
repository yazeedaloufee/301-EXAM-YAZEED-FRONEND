import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import FavChocolateCard from './FavChocolateCard.js';
import axios from 'axios'
import Row from 'react-bootstrap/Row'

class MyFavorites extends React.Component {
  


    
async componentDidMount(){
  const { user } = this.props.auth0;

  axios.post(`${process.env.REACT_APP_SERVER}/getfav`,{email:user.email}).then(result=>{
    this.props.updatedData(result.data)


  })


}
    
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


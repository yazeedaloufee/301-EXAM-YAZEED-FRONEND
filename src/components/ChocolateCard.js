import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';

class ChocolateCard extends Component {

    addToFav=(e)=>{
     
        let favchoco=null;
        this.props.alldata.map(value=>{
      

            if(Number(e.target.id)===Number(value.id)){favchoco=value}
        })
        const { user } = this.props.auth0;
        console.log(user.email,'emaaaaaaaaaail')
        favchoco.email=user.email;

        axios.post(`${process.env.REACT_APP_SERVER}/addtofav`,favchoco).then(results=>{
            console.log(results);
            this.props.updatedData(results);
        })
   
    }

render(){
return(

    
    
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.card.imageUrl} />
  <Card.Body>
    <Card.Title>{this.props.card.title}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary" id={this.props.card.id} cardinfo={this.props.card} onClick={this.addToFav}>add to fav</Button>
  </Card.Body>
</Card>
    )

}
    
}
export default withAuth0(ChocolateCard)

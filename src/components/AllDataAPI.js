import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

import axios from 'axios';
import ChocolateCard from './ChocolateCard';
import Row from 'react-bootstrap/Row'

class AllDataAPI extends Component {

  constructor(props){
        super(props);
        this.state={
            chocolateData:[]
        }
    }
    

async componentDidMount(){
    let preparedata=await axios.get(`${process.env.REACT_APP_SERVER}/API-DATA`);

    await this.setState({
        chocolateData: preparedata.data


    })
}
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        
        return (
          
            <div>
                  { console.log(this.user,'emaaaaaaaaaaails')}
                <h1>All Data from the API</h1>
                <h3>Select your favorites :) </h3>
                <Row>
             {this.state.chocolateData.map(value=>{
                 return(<ChocolateCard card={value} email={this.user} alldata={this.state.chocolateData} updatedData={this.props.updatedData}/>)
                


             })} </Row>
            </div>
        )
    }
}

export default withAuth0(AllDataAPI);









  





import React from 'react';
import axios from 'axios';


class AllCocolate extends React.Component{
    constructor(props){
        super(props);
        this.state({
            chocolateData:[]
        })
    }

async componentDidMount(){
    let preparedata=await axios.get(`${process.env.REACT_APP_SERVER}/API-DATA`);

    await this.setState({
        chocolateData: preparedata.data


    })
}



render(){


    return(
        console.log(this.state.chocolateData)


    )
}


}
import React from 'react';
import Header from './Header';
import Profile from './Profile';
import Login from './Login';
import MyFavorites from './components/MyFavorites';
import AllDataAPI from './components/AllDataAPI'
import Footer from './Footer';
import { withAuth0 } from '@auth0/auth0-react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      favdata:[]
    }
  }

  updatedData=async (value)=>{
    this.setState({
      favdata:value

    })
  }

  render() {
    return(
      <>
        <Router>
            <Header />
            <Switch>

              <Route exact path="/">#
              {console.log(process.env.REACT_APP_DOMAIN, 'process env check')}
                {this.props.auth0.isAuthenticated ? <MyFavorites updatedData={this.updatedData} favdata={this.state.favdata}/> : <Login />}
              </Route>

              <Route path="/profile">
                <Profile/>
              </Route>

              <Route path="/getAPIData">
                <AllDataAPI updatedData={this.updatedData}/>
              </Route>
              
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);


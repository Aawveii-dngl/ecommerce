import React from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Routes from './Pages/Homepage/ROUTE/Routes';
import {auth} from './Firebase/firebase.util'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser:null
    }
   }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user=>{
          this.setState({currentUser:user});
          console.log(user);
      })
  }

  componentWillUnmount(){
      this.unsubscribeFromAuth();
  }
  render(){
  return (
    <div >
      <Header currentUser = {this.state.currentUser}/>
      <Routes/>
    </div>
  );
}}

export default App;

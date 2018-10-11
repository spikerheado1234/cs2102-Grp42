//import React from 'react';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

/*for log in page*/
//import './App.css';
import Loginscreen from './Login/Loginscreen';
/*for log in page*/

import Home from './Home/Home';
import StylesContainer from './Styles/StylesContainer';
import ProductsContainer from './Products/ProductsContainer';
import SingleProductContainer from './Products/SingleProductContainer';
import OrderConfirmationContainer from './Orders/OrderConfirmationContainer';
import NotFound from './global/NotFound';
// import MobileNav from './global/Mobile/MobileNav';
import Footer from './global/Footer';

//injectTapEventPlugin();

const App = props => (
  <div>
    {/* <MobileNav /> */}

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/styles" component={StylesContainer} />
      <Route path="/products" component={ProductsContainer} />
      <Route
        path="/order-confirmation"
        component={OrderConfirmationContainer}
      />
      <Route path="/product/:id" component={SingleProductContainer} />
    </Switch>

    <Footer />
  </div>
);

// class App extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       loginPage:[],
//       uploadScreen:[]
//     }
//   }
//   componentWillMount(){
//     var loginPage =[];
//     loginPage.push(<Loginscreen parentContext={this}/>);
//     this.setState({
//                   loginPage:loginPage
//                     })
//   }
//   render() {
//     return (
//       <div className="App">
//         {this.state.loginPage}
//         {this.state.uploadScreen}
//       </div>
//     );
//   }
// }
// const style = {
//   margin: 15,
// };

export default App;

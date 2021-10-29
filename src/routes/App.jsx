import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Password from '../containers/Password';
import Recovery from '../containers/Recovery';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Checkout from '';
import '../assets/styles/global.css';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/password" component={Password}/>
					<Route exact path="/recovery" component={Recovery}/>
					<Route path="*" component={NotFound}/>
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;

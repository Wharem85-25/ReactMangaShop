import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import Password from '@pages/Password';
import Recovery from '@pages/Recovery';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Checkout from '@pages/Checkout';
import CreateAccount from '@pages/CreateAccount';
import Login from '@pages/Login';
import MyAccount from '@pages/MyAccount';
import Orders from '@pages/Orders';
import SendEmail from '@pages/SendEmail';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/global.css';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route exact path="/" component={Home}/>
						<Route exact path="/login" component={Login}/>
						<Route exact path="/recovery" component={Recovery}/>
						<Route exact path="/send-email" component={SendEmail}/>
						<Route exact path="/password" component={Password}/>
						<Route exact path="/my-account" component={MyAccount}/>
						<Route exact path="/create-account" component={CreateAccount}/>
						<Route exact path="/checkout" component={Checkout}/>
						<Route exact path="/orders" component={Orders}/>
						<Route path="*" component={NotFound}/>
					</Switch>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
	);
}

export default App;

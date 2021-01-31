// Libraries
import React from 'react';
import Header from 'containers/Header';

// Containers
import HomeContainer from 'containers/Home';


import { initFacebookSdk, errorInterceptor } from '../_helper';
initFacebookSdk();

const Home = () => {
	return (
		<HomeContainer />
	)
};

export default Home;
// Libraries
import AOS from 'aos';
import NextApp from "next/app";
import React, { useEffect } from 'react'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Provider } from 'react-redux'

// Store redux toolkit
import withReduxStore from '../lib/witdh-redux-store'

// Styles React-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';

// Styles custom scss
import '../styles/global.scss';

// Styles animate
import "animate.css/animate.css";

// Styles Tailwind
import "tailwindcss/tailwind.css";

// Styles AOS
import "aos/dist/aos.css";

class App extends NextApp {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return {
			pageProps,
		};
	}

	componentDidMount() {
		AOS.init({
			duration: 1200,
			mirror: true
		});
	}

	render() {
		const { Component, pageProps, reduxStore } = this.props;

		return (
			<Provider store={reduxStore}>
				<AnimateSharedLayout type='crossfade'>
					<Component {...pageProps} />
				</AnimateSharedLayout>
			</Provider>
		);
	}
}

export default withReduxStore(App)

// Libraries
import AOS from 'aos';
import React, { useEffect } from 'react'
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";

// Styles React-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'semantic-ui-css/semantic.min.css';

// Styles custom scss
import '../styles/global.scss';

// Styles animate
import "animate.css/animate.css";

// Styles Tailwind
import "tailwindcss/tailwind.css";

// Styles AOS
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			mirror: true
		});
	}, []);

	return (
		<AnimateSharedLayout type='crossfade'>
			<Component {...pageProps} />
		</AnimateSharedLayout>
	)
}

export default MyApp

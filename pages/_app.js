// Libraries
import AOS from 'aos';
import React, { useEffect } from 'react'

// Styles React-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return <Component {...pageProps} />
}

export default MyApp

import { ChakraProvider } from "@chakra-ui/react";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { AnimateSharedLayout } from "framer-motion";
import PlausibleProvider from 'next-plausible'


import "@fontsource/ibm-plex-sans/100.css";
import "@fontsource/ibm-plex-sans/200.css";
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

import crowdTheme from "../lib/theme";

dayjs.extend(advancedFormat);

const MyApp = ({ Component, pageProps }) => {
  return (
    <PlausibleProvider domain="changelog.crowd.dev">
      <AnimateSharedLayout>
        <ChakraProvider theme={crowdTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </AnimateSharedLayout>
    </PlausibleProvider>
  );
};

export default MyApp;

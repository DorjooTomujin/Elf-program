import { ChakraProvider } from "@chakra-ui/react";
import theme from "../src/theme";
import Layout from "../src/components/layout";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import "../src/styles/style.css";
import i18next from "i18next";
import { useEffect } from "react";



function MyApp({ Component, pageProps }) {

  useEffect( () => {

    const test = async () => {
     i18next.init({
       lng:'mn',
       debug: true,
       resources: {
         mn: {
           translation: {
             "key": "hello"
           }
         },
         en: {
           translation: {
             "key": "world"
           }
         },
       }
     })
    }
    test().catch(console.error)

  

 },[])
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Layout>
        
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

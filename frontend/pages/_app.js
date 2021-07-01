import React from "react";
import App from "next/app";
import Layout from "../components/Layout";
import withData from "../lib/apollo";

// function MyApp({ Component, pageProps }) {
//   return (
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }

// export default MyApp

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}
export default withData(MyApp);
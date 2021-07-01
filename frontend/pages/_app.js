import React from "react";
import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

// class MyApp extends App {
//   render() {
//     const { Component, pageProps } = this.props;
//     return (
//       <>
//         <Head>
//           <link
//             rel="stylesheet"
//             href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
//             integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
//             crossOrigin="anonymous"
//           />
//         </Head>
//         <Layout>
//           <Component {...pageProps} />
//         </Layout>
//       </>
//     );
//   }
// }
// export default withData(MyApp);
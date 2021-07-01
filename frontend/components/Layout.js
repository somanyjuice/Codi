import React from "react";
import Head from "next/head";
import { Container} from "reactstrap";
import Navigation from "./Nav";

const Layout = ({children}) => {
    const title = "codi"

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
                />
                <script src="https://js.stripe.com/v3" />
            </Head>
            <Navigation />

            <Container>{children}</Container>
        </div>
    )
}

export default Layout
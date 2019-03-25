import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
  }
  .noselect {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  .pointer {
    cursor: pointer;
  }
`;

const Main = styled.main`
  margin: 0;
  padding: 0;
`;

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;

    return (
      <>
        <Head>
          <title>{title}</title>
          <link href='https://api.mapbox.com/mapbox-gl-js/v0.53.0/mapbox-gl.css' rel='stylesheet' />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
        <Container>
          <Main>
            <Component {...pageProps} router={router} />
          </Main>
          <GlobalStyle />
        </Container>
      </>
    );
  }
}

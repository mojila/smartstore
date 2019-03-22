import App, { Container } from "next/app";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import { title } from "./_document";

// Any global CSS variables and selectors we want
const GlobalStyle = createGlobalStyle`
  body {
    background: var(--background--1);
    font-family: 'PT Sans', sans-serif;
    margin: 0;
    padding: 0;
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

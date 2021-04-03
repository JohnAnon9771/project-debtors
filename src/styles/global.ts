import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow: hidden;
  }

  :root {
    font-size: 62.5%
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    outline: none;
  }
`

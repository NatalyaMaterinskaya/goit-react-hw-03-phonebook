import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,h2,h3,h4,p{
    margin-top: 0;
    margin-bottom: 0;
}

ul{
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
}

img{
    display: block;
    max-width: 100%;
    height: auto;
}

button{
     cursor: pointer;
}`;

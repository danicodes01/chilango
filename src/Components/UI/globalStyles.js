import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
 
}

li {
  list-style-type: none;
  padding: 12px 0 12px 0;
  color: ${props => props.theme.mode === 'dark' ? 'gray' : '#1f1f1f'};
  text-transform: uppercase;
  /* font-weight: 600; */
  
}
p {
  color: ${props => props.theme.mode === 'dark' ? 'gray' : '#1f1f1f'};
  text-decoration: none;
  font-size: 14px;
}

h1 {
  color: ${props => props.theme.mode === 'dark' ? 'gray' : '#1f1f1f'};
  text-decoration: none;
}
h4 {
  color: ${props => props.theme.mode === 'dark' ? 'gray' : 'black'};
  opacity: .60;
}
h3 {
  color: ${props => props.theme.mode === 'dark' ? 'gray' : '#1f1f1f'};
}
div {
  background: ${props => props.theme.mode === 'dark' ? '#1f1f1f' : 'aliceblue'};
  color: ${props => props.theme.mode === 'dark' ?  'gray': '#1f1f1f'}
}

input {
  background: white;
  color: black;
}


body {
  margin: 0;
  background: ${props => props.theme.mode === 'dark' ? '#1f1f1f' : 'aliceblue'};
}
button {
    text-align: center;
    color: ${props => props.theme.mode === 'dark' ? 'black' : 'black'};
    width: 70%;
    padding: 15px;
    background-color: ${props => props.theme.mode === 'dark' ? '#93FFD8' : 'aliceblue'};
    opacity: .65;
    font-size: 15px;
    border-radius: 6px;
    border-width: 1px;
    border-color: black;
    text-transform: uppercase;
    box-shadow: 0px 2px 2px black;

    transition: ease background-color 250ms;
    :active {
        opacity: .5;
        color: black;
        background-color: ${props => props.theme.mode === 'dark' ? '#93FFD8' : 'purple'};
       
    }
}
`

export default GlobalStyle
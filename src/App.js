import logo from './logo.svg';
import './App.css';
import styled from "styled-components";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div>
      <h1>gonzalez herrera diego</h1>
      <h1>practica compnentes</h1>
      <Button href="https://utd.edu.mx/">utd</Button>
      <Button href="https://github.com/">git</Button>
      <Button href="https://twitter.com/?lang=es">twiter</Button>
    </div>
  );
}

export default App;





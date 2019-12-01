import React from 'react';
import styled from "styled-components"

const Container = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`

const Title = styled.Text`
  color:pink;
  font-weight:600;
`

const Title2 = styled.Text`
  color:blue;
  font-weight:600;
`

export default function App() {
  return (
    <Container>
      <Title>Open up App.js to start working on your app!</Title>
      <Title2>Open up App.js to start working on your app!</Title2>      
    </Container>
  );
}
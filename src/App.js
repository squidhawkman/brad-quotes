import { GlobalStyles } from './Components/Styles/Global';
import QuoteBox from "./Components/QuoteBox";
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Container } from './Components/Styles/Container.styled';


function App() {
  const [themeColor, setThemeColor] = useState('brown');

  const theme = {
    color: themeColor
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Container>
        <QuoteBox theme={theme} setThemeColor={setThemeColor}/>
        <p style={{color: "white"}}>by squidhawkman</p>
        </Container>
        </ThemeProvider>
  );
}

export default App;

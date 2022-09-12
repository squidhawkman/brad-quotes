import axios from 'axios'
import { useEffect } from 'react';
import { ButtonStyles } from './Styles/ButtonStyles.styled';


export default function NewQuoteButton({setQuoteProp, setThemeColor, theme}) {

  

//clickhandler
const quoteClickHandler = () => {

  const colors = ['#B33F62', '#1C1D21', '#A288A6', '#BB9BB0', '#83BCA9', '#3E5641', '#A24936', '#D36135', '#282B28', '#5D737E', '#3F4045'];
      let currColor = theme.color;
      const newColor = () => {return colors[Math.floor(Math.random() * colors.length)]};
      let nextColor = newColor();
      while (currColor === nextColor) {
      nextColor = newColor();
      }

    const config = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }
    
    //updating the quote
    axios.get('https://icanhazdadjoke.com', config)
    .then((response) => {
      //this is given to the setQuoteProp which is ultimately run as setQuote in the parent component, QuoteBox
      setQuoteProp(response.data.joke);
      setThemeColor(nextColor);
    })
    .catch((error) => {
      console.log(error);
    })

  }

// wanting to make new quotes appear on key press
useEffect(() => {
  document.addEventListener('keyup', handleKeyUp, true)
}, []);

const handleKeyUp = (event) => {
  console.log(event.key);
  if (event.key === ' ' || event.key === 'ArrowRight' || event.key === 'ArrowDown') {
    return quoteClickHandler();
  }
};
  
  return (
    <ButtonStyles>
        <button onKeyUp={handleKeyUp} onClick={quoteClickHandler}>New Quote</button>
        </ButtonStyles>
  )
}

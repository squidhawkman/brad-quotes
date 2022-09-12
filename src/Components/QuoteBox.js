import axios from 'axios'
import { useEffect, useState } from 'react';
import NewQuoteButton from './NewQuoteButton';
import { FaTwitter, FaTumblr } from 'react-icons/fa';
import { StyledQuoteBox } from './Styles/QuoteBox.styled';
import { Flex } from './Styles/Flex.styled.js'
import { ButtonStyles } from './Styles/ButtonStyles.styled';

export default function QuoteBox({setThemeColor, theme}) {

  const [quote, setQuote] = useState('');
  
  useEffect(() => {
    //this needs to be inside the useEffect or it will be considered a dependency
    const config = {
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    }

    //note, if we had a changing url (like with the pokeAPI requests), we would use axios.create and a baseurl. You can see that in the clever programmer video
    async function getJoke() {
      await axios.get('https://icanhazdadjoke.com', config)
        .then((response) => {
          setQuote(response.data.joke);
    })
        .catch((error) => {
          console.log(error);
        })
    }

//running the functions
    getJoke();
  }, []);

  return (
    <StyledQuoteBox>
        <span alt='the quote'>{quote}</span>
        <p>- Brad</p>
        <Flex>
        <div>
          <ButtonStyles>
          <a href={`https://twitter.com/intent/tweet?text=${quote}`} target='_blank' rel='noreferrer'><FaTwitter />
          </a>
          <a href={`https://www.tumblr.com`} target='_blank' rel='noreferrer'>
            <FaTumblr />
          </a>
          </ButtonStyles>
        </div>
        <NewQuoteButton theme={theme} setQuoteProp={setQuote} setThemeColor={setThemeColor} />
        </Flex>
    </StyledQuoteBox>
  )
}

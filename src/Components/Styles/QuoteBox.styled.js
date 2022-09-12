import styled from "styled-components";

export const StyledQuoteBox = styled.div`
//make it so that when the quote changes number of lines nothing else changes
width: 500px;
padding: 20px 30px;
margin: none;
border-radius: 30px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
background-color: white;
color: ${({theme}) => theme.color};
transition: color 1s;

span {
    text-align: center;
    font-size: 1.15em;
    animation: fadeIn 3s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
  100% { opacity: 1; }
}

p {
    text-align: right;
    animation: fadeIn 3s;
}

div a {
    margin-right: 10px;
}
`
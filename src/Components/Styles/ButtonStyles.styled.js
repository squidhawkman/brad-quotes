import styled from "styled-components";

export const ButtonStyles = styled.div`

& > button, & > a {
border-radius: 5px;
background-color: ${({theme}) => theme.color};
color: white;
transition: background-color 1s;
border: none;
padding: 5px;
box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
animation: fadeIn 3s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
  100% { opacity: 1; }
}

& > button:hover, & > a:hover {
    opacity: 0.9;
}

& > a {
    padding: 9px 9px 4px 9px;
}
`
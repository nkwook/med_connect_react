import React from 'react';
import styled from 'styled-components';
import { greenA100, greenA200, greenA400 } from 'material-ui/styles/colors';
import { shadow } from 'lib/styleUtils';


const Wrapper = styled.div`
    margin-top: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.5rem;

    background: ${greenA200};
    color: white;

    text-align: center;
    font-size: 1.25rem;
    font-weight: 500;

    cursor: pointer;
    user-select: none;
    transition: .2s all;
    border-radius : 20px;
    &:hover {
        background: ${greenA100};
        ${shadow(0)}
    }

    &:active {
        background: ${greenA400};
    }

`;

// onClick = e =>{
//     console.log("clicked");
// };


const AuthButton = ({ children, onClick }) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>

);

//how to submit?

export default AuthButton;
import React, { Component } from 'react';
import { render } from '@testing-library/react';
import styled, { ThemeProvider, keyframes } from "styled-components";
import { theme } from "components";
import RaisedButton from 'material-ui/RaisedButton';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';
import './Home.css';
// flex: to control ratios of components
const Container = styled.div`
            position: absolute;
            top: 0%;
            left: 0%;
            display: flex;
            width: 100%;
            height: 68%;
            background-color:#0CCD55;
        
            
`;
// background: url(${process.env.PUBLIC_URL + '/sample.png'});
const Positioner = styled.div`
    position: absolute;
    top: 107%;
    left: 50%;
    width: 250px;
    height: 130px;
    transform: translate(-50%, -50%);
`;

const ShadowedBox = styled.div`
    ${shadow(2)}
`;

const Wheal = styled.div`
    position: absolute;
    top: 30%;
    left: 30%;
    width: 795px;
    height: 150px;
    transform: translate(-50%, -50%);
    background: url(${process.env.PUBLIC_URL + '/Logo.png'});
    animation: ${props => props.out ? fadeOut : fadeIn} 6s linear infinite;
`;

const fadeIn = keyframes`
  from {
    transform: scale(.75);
    opacity: 0.7;
  }
  to {
    transform: scale(1.05);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1.05);
    opacity: 0.7;
  }
  to {
    transform: scale(.75);
    opacity: 1;
  }
`;


// const RaisedButton=styled.div`
//     background:#74F3A4
// `;

class Home extends Component {

    render() {
        return (
            <div>
                <Container theme={theme}>
                    <Wheal/>
                    <Positioner>
                        <ShadowedBox>
                            <Link to ="/auth/login">
                                <RaisedButton
                                    className="button"
                                    backgroundColor="#74F3A4"
                                    label="Start"
                                    fullWidth={true}
                                    // primary={true}
                                    labelStyle={{ fontSize: '30px' }}
                                    
                                ></RaisedButton>
                            </Link>
                        </ShadowedBox>
                    </Positioner>
                </Container>
            </div>
        )
    }
}


export default Home;
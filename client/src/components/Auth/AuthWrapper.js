import React from 'react';
import styled from 'styled-components';
import { shadow } from 'lib/styleUtils';
import { Link } from 'react-router-dom';
import { greenA200 } from 'material-ui/styles/colors';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  
`;
const Containver = styled.div`
    width: 500px;
`;

// 너비, 그림자 설정
const ShadowedBox = styled.div`
    width: 500px;
    border-radius: 20px;
    
    ${shadow(2)}
`;

// 로고
const LogoWrapper = styled.div`
    background: ${greenA200};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const Logo = styled(Link)
    `
    color: white;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
`;

// children 이 들어가는 곳
const Contents = styled.div`
    background: white;
    padding: 2rem;
    height: auto;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;
const Wheal = styled.div`
    position: absolute;
    top: 10%;
    left: 50%;
    width: 262px;
    height: 70px;
    transform: translate(-50%, -50%);
    background: url(${process.env.PUBLIC_URL + '/Logo2.png'});
`;


const AuthWrapper = ({ children }) => (
    <Positioner>
        <Containver>
            <ShadowedBox>
                <LogoWrapper>
                    <Logo to="/" > 
                        <Wheal/>
                    </Logo>
                </LogoWrapper>
                <Contents>
                    {children}
                </Contents>
            </ShadowedBox >
        </Containver>
    </Positioner>
);


export default AuthWrapper;
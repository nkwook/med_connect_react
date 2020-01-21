import React, { Component } from 'react';
import { AuthWrapper } from 'components/Auth';
import { Route, Switch } from 'react-router-dom';
import styled from "styled-components";
import { Login, Register } from 'containers/Auth';
// import { cyan400 } from 'material-ui/styles/colors';

class Auth extends Component {
    render() {
        return (
            <div>
                <Container>
                    <AuthWrapper>
                        <Route path="/auth/login" component={Login} />
                        <Route path="/auth/register" component={Register} />
                    </AuthWrapper>
                </Container>
            </div>
        );
    }
}
//아마 요기 바꿔야할듯

export default Auth;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background-color:#0CCD55;
`;
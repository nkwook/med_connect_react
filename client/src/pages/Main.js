import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { WorkSpace, History } from 'pages'
import { render } from '@testing-library/react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';


{/* <NavLink tag={Link} onClick={this.toggleSidebar}>
                                        {profile}
                                    </NavLink> */}


class Main extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <MainContainer>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/main">MEDCONNECT</NavbarBrand>
                        <Collapse isOpen={true} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavbarText>내 정보</NavbarText>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} exact to="/main"> WorkSpace </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} exact to="/main/history"> History </NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText> MEDCONNECT</NavbarText>
                        </Collapse>
                    </Navbar>


                    <div>
                        <Container>
                            <Route exact path="/main" component={WorkSpace} />
                            <Route path="/main/history" component={History} />
                            {/* <Route path="/main/borrow" component={Borrow} />
                                <Route path="/main/register/:id" component={Regibook} /> */}
                        </Container>
                    </div>
                </MainContainer>
            </div>

        )
    }

}

export default Main;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFF; 
`;

const MainContainer = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    height: 1000px
    overflow-y: auto;
`


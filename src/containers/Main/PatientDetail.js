import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import styled from 'styled-components';
import { CurrentTab } from 'components/Main/Detail'
import Divider from '@material-ui/core/Divider';


// import Patient from './patient.png';


const useStyles = makeStyles(theme => ({
    root: {
        width: '600px',
       
        marginLeft: '100px'
      
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,

    },
    detail: {
        display: 'flex',
        flexDirection: 'column'
    },
    expandBar: {
        background: '#DAF7A6'
    },
    expandBar2: {
        background: '#E9FFE2'
    }



}));

var currentTitle = "현재 진료중 아님";
const isPatient = true;
const patientName = "김채원"
if (isPatient) {
    currentTitle = " 대기 중: " + patientName + " 환자";
}

var imgStyle = {
    width: "128px",
    height: "128px"
};

const birth = "98.06.11"
const phoneNum = "010-8272-8669"
const gender = "여"





export default function PatientDetail(props) {
    const classes = useStyles();
    console.log(props.visible)
    return (

        <div className={classes.root}>

            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.expandBar}
                visible={props.visible}
            >
                <Typography className={classes.heading}>  {currentTitle}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.detail}>
                <Media>
                    <Media left href="#">
                        <Media style={imgStyle} object src={'./chaewonkim.png'} alt="Generic placeholder image" />
                    </Media>
                    <Media body >
                        <Media heading>
                            {patientName} 님
                            </Media>
                        <Container >

                            <Row>
                                {/* <Col md={{ span: 4 }}> <Wheal /> </Col> */}
                                {/* <Col xs="2"> <Wheal /></Col> */}
                                <Col md="3"> 생년월일: {birth}</Col>
                                <Divider component="li" orientation="vertical" />
                                <Col md="3"> 성별: {gender}</Col>
                                <Divider component="li" orientation="vertical" />
                                <Col md="4"> 보호자 연락처: {phoneNum} </Col>

                            </Row>
                        </Container>
                    </Media>
                </Media>
                <br />
                <CurrentTab>
                </CurrentTab>

                <br />
                <Button>
                    진료 시작
                </Button>
                <Button>
                    제거
                </Button>
                
            </ExpansionPanelDetails>
       
        </div>

    )
}

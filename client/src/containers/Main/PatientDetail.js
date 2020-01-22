import React, { Component, useState, useEffect } from 'react';
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
import axios from 'axios';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
// import Patient from './patient.png';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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
    },
    div: {
        display: 'flex',
        flexDirection: 'row',
        left: '50%'

    },
    button: {
        width: '250px'

    },
    button2: {
        width: '250px',
        marginLeft: '50px'
    }



}));


// var currentTitle = "현재 진료중 아님";
const isPatient = true;
const patientName = "김채원"
// if (isPatient) {
//     currentTitle = " 대기 중: " + patientName + " 환자";
// }

var imgStyle = {
    width: "128px",
    height: "128px"
};

const birth = "98.10.09"
const phoneNum = "010-8272-8669"
const gender = "여"






export default function PatientDetail(props) {

    const classes = useStyles();

    //여기서 row props 받아서 데이터 불러오고 넣으면됨ㅋ

    let pop = (e) => {
        console.log('pop');
        console.log(props);
    }
    let onFormSubmit = (e) =>{
        console.log(123);
        e.preventDefault();
      
        props.onSubmit();
    }

    // console.log
    var preReport = {};
    var prePatient = {};

    useEffect(() => {
        findReport()
        // findPatient()
    }, []);

    useEffect(() => {
        // findReport()
        findPatient()
    }, []);

    // const 
    const [reportData, setReport] = useState(preReport);
    const [patientData, setPatient] = useState(prePatient);
    const [imageURL, setURL]=useState('./123.png');



    const findReport = async () => {
        axios.get("/api/reports/" + props.row)
            .then((resolvedData) => {
                const temp = resolvedData.data;
                setReport(temp);
                console.log(temp);
                // console.log(reportData);
            })
    }
    const findPatient = async () => {
        axios.get("/api/patients/nok/" + props.row)
            .then((resolvedData) => {
                const temp = resolvedData.data;
                setPatient(temp);
                console.log(temp);
                // console.log(reportData);
            })
    }

    // useEffect(()=>{
        
    if(patientData.NOKid == '12345' && !(imageURL =='./12345.png')){
        console.log(999);
        setURL('./12345.png')
    }else if(patientData.NOKid== '1234' && !(imageURL=='./1234.png')){
        setURL('./1234.png')
    }

    // },[])


    //tab
    const [value, setValue] = React.useState(2);
    // const classes = useStyles();
    const handleChange = (event, newValue) => {
        setValue(newValue);
  
    }
    console.log(reportData)

    console.log(patientData)

   

        return (

            <div className={classes.root}>

                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className={classes.expandBar}

                >
                    <Typography className={classes.heading}>  대기 중: {reportData.name} 환자</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classes.detail}>
                    <Media>
                        <Media left href="#">
                            <Media style={imgStyle} object src={imageURL} alt="Generic placeholder image" />
                        </Media>
                        <Media body >
                            <Media heading>
                                {reportData.name} 님
                            </Media>
                            <Container >

                                <Row>
                                    {/* <Col md={{ span: 4 }}> <Wheal /> </Col> */}
                                    {/* <Col xs="2"> <Wheal /></Col> */}
                                    <Col md="3"> 나이: {patientData.age}</Col>
                                    <Divider component="li" orientation="vertical" />
                                    <Col md="3"> 성별: {patientData.sex}</Col>
                                    <Divider component="li" orientation="vertical" />
                                    <Col md="4"> 연락처: {patientData.phonenum} </Col>

                                </Row>
                                <Row>
                                    <Col md="3"> 신장: {reportData.height}cm</Col>
                                    <Divider component="li" orientation="vertical" />
                                    <Col md="3"> 체중: {reportData.weight}kg</Col>

                                </Row>

                            </Container>
                        </Media>
                    </Media>
                    <br />
                    <Paper square>
                        <Tabs
                            TabIndicatorProps={{ style: { background: '#689F38' } }}
                            value={value}
                            onChange={handleChange}
                            aria-label="disabled tabs example"

                        >
                            <Tab label="과거력" />

                            <Tab label="사회력" />

                            <Tab label="가족력" />

                            {/* <Tab label="보호자의 말" /> */}

                        </Tabs>
                        <TabPanel value={value} index={0}>
                            {reportData.past}
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            {reportData.social}
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            {reportData.family}
                        </TabPanel>
                        {/* <TabPanel value={value} index={2}>
                            {reportData.family}
                        </TabPanel> */}
                    </Paper>

                    <br />
                    <div className={classes.div}>
                        <Button className={classes.button}
                        onClick={onFormSubmit}
                        >
                            진료 시작
    
                    </Button>
                        <br />
                        <Button className={classes.button2} onClick={pop} >
                            대기 명단에서 제외
                    </Button>
                    </div>
                </ExpansionPanelDetails>

            </div>

        )
    }

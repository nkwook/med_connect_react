import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, Row, Col, Media, InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import styled from 'styled-components';
import './CurrentWrapper.css'
import { CurrentTab } from 'components/Main/Detail'
import Divider from '@material-ui/core/Divider';
import { WatingTable } from './Detail';
import { PatientDetail } from 'containers/Main';
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
import axios from "axios";
// import Patient from './patient.png';





const useStyles = makeStyles(theme => ({
    root: {
        width: '900px',
        left: '20%'
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
        flexDirection: 'row'

    }



}));

var currentTitle = "현재 진료중 아님";
const isPatient = true;
const patientName = "이준명"
if (isPatient) {
    currentTitle = " 현재 진료 중: " + patientName + " 환자";
}

var imgStyle = {
    width: "128px",
    height: "128px"
};

const birth = "98.06.11"
const phoneNum = "010-8272-8669"
const gender = "남"

const queueNum = 3;

//table example data
var data = [
    { id: 1, name: '김도영', age: '23', gender: '남' },
    { id: 2, name: '김채원', age: '23', gender: '여' },
    { id: 3, name: 'George Michael', age: '23', gender: '남' }
];

function Example() {
    const [isOpened, setOpened] = useState(false);
}

//환자 정보 가져오는 코드




export default function CurrentWrapper(props) {
    console.log(props)

    // useEffect(() => {
    //     findReport()
    //     // findPatient()
    // }, []);

    useEffect(() => {
        findPatient()


    }, []);

    var preTable = [];
    const classes = useStyles();
    // this.setState({})
    const [isOpened, setOpened] = useState(false);
    const [selectedRow, setRow] = useState();
    let [tableData, setData] = useState(preTable);
    const [nowPatient, setNow] = useState();
    const [reportData, setReport] = useState();




    const findPatient = async () => {

        axios.get("/api/patients")
            .then((resolvedData) => {
                const temp = resolvedData.data;

                temp.forEach((entry) => {


                    if (entry.onQueue) {
                        // preTable.push({
                        //     id: a,
                        //     name: entry.name,
                        //     age: entry.age,
                        //     gender: entry.sex
                        // })
                        setData(tableData.concat({

                            NOKid: entry.NOKid,
                            name: entry.name,
                            age: entry.age,
                            gender: entry.sex
                        }))

                    }
                    if (entry.onTreat) {
                        setNow(entry)

                    }

                }
                )
                // setData(preTable)
                console.log(preTable);
                // console.log(typeof(data))
                console.log(tableData);

            })
    }


    const findReport = async () => {
        await axios.get("/api/reports/123")
            .then((resolvedData) => {
                const temp = resolvedData.data;
                setReport(temp);
                console.log(temp);
                // console.log(reportData);
            })
    }





    console.log(reportData)
    console.log(preTable);
    console.log(nowPatient)
    // findPatient
    // console.log(temp)



    var options = {
        // this.onRowClick=this.onRowClick.bind(this);
        onRowClick(row) {
            //일단 row
            // test1();
            console.log(row)
            //   this.setState(()=>({ isOpen: !this.state.isOpen }, this ));
            //   setState2();
            console.log(selectedRow);
            if (selectedRow == row.NOKid) {
                setOpened(!isOpened)
            } else {
                setOpened(true)
                setRow(row.NOKid)
            }
            //아마 여기서 row.id를 잡아서 렌더를 시킬거임. 
            // patientdetail row={row.id} 하겠지
            //   setRow(row.id)

        }
    }
    // .bind(this)


    // }

    return (
        <div className={classes.div}>

            <div className={classes.root}>

                <ExpansionPanel >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className={classes.expandBar}
                    >
                        <Typography className={classes.heading}>  {currentTitle}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className={classes.detail}>
                        <Media>
                            <Media left href="#">
                                <Media style={imgStyle} object src={'./patient.png'} alt="Generic placeholder image" />
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
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>한줄 소견</InputGroupText>
                            </InputGroupAddon>
                            <Input placeholder="please write today's comment" />
                            <Button> 진료 완료</Button>
                        </InputGroup>
                        <br />
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <ExpansionPanel
                >
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                        className={classes.expandBar2}
                    >
                        <Typography className={classes.heading}>대기 중인 환자: {queueNum}명</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ marginLeft: '100px', marginTop: '10px' }}>
                        <div>
                            <BootstrapTable data={tableData}
                                options={options}

                            >

                                <TableHeaderColumn isKey dataField='NOKid'
                                    dataAlign='center'
                                    headerAlign="left"
                                    width="150"
                                    tdStyle={
                                        { backgroundColor: '#E9FFE2' }}>
                                    NOKID
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='name'
                                    dataAlign='center'
                                    headerAlign="center"
                                    width="400">
                                    Name
                                 </TableHeaderColumn>
                                <TableHeaderColumn dataField='age'
                                    dataAlign='center'
                                    headerAlign="center"
                                    width="100">
                                    Age
                                </TableHeaderColumn>
                                <TableHeaderColumn dataField='gender'
                                    dataAlign='center'
                                    headerAlign="center"
                                    width="100">
                                    Gender
                                </TableHeaderColumn>
                            </BootstrapTable>
                        </div >




                    </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel disabled>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
                    </ExpansionPanelSummary>
                </ExpansionPanel>
            </div>


            <div>

                {isOpened ?
                    <PatientDetail className={classes.patient} row={selectedRow}
                        onSubmit={findReport} />



                    : null}

            </div>

        </div>
    )
}

// const Container=styled.div`


// `;

const Wheal = styled.div`
            position: absolute;
        
            width: 120px;
            height: 120px;
        
    background: url(${process.env.PUBLIC_URL + 'Logo2.png'});
        `;

        // top: 10%;
        // left: 50%;
        // transform: translate(-50%, -50%);
// export default CurrentWrapper;
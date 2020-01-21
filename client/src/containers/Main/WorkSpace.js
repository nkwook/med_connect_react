import React, { Component, useState, useEffect } from 'react';
import {CurrentWrapper} from 'components/Main'
import axios from 'axios';
// import { WorkSpace } from '.';

// export default function WorkSpace(){
//     // const [current, setCurrent]=useState();
//     // useEffect(() => {
//     //     findCurrent()
//     // }, []);

//     // const findCurrent= async() =>
//     // await axios.get("/api/patients/onTreat")
//     // .then((resolvedData) => {
        
//     //     setCurrent(resolvedData.data);
//     //     // console.log(temp);
//     //     // console.log(reportData);
//     // }) 
//     // console.log(current)




//     return(
//                 <CurrentWrapper >

//                 </CurrentWrapper>
//     )
// }





class WorkSpace extends Component{
    
    render(){
        return(
            <div style={{marginLeft: '100px', marginTop: '40px'}}>
                
                <CurrentWrapper >

                </CurrentWrapper>
            </div>
        )
    }
}


export default WorkSpace;
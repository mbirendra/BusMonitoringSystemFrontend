import React,{useState,useEffect} from 'react';
import {Container,Row,Col} from 'react-bootstrap';

 
const TabPanel = (props) => {
    const {children,value,index} = props;
 
    return (
        <React.Fragment>
            {
                value == index &&
                (
                   
                    <p>{children}</p>
                )
            }
        </React.Fragment>
    )
}
 
export default TabPanel
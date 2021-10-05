import React,{useState,useEffect} from 'react';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Container,Row,Col} from 'react-bootstrap';
import {AiFillPlusCircle} from 'react-icons/ai'
import {MdTimer} from 'react-icons/md'
import TabPanel  from './TabPanel';
import AddBus from './AddBus'
import Map from '../images/gps.png';
import RetrieveUpdateDelete from './RetrieveUpdateDelete'

 
const Admin = () => {
    let [value,setValue] = useState(0);
    const handleChange = (e,val)=>{
        setValue(
            val
        )
    }
    return (
        <React.Fragment>
            <Container>
                <Row>
                <img src={Map} className="w-100 border-bottom" alt="Bus"/>
                    <Col lg={2} className="d-none d-md-block"></Col>
                    <Col lg={7}>
                    <div className="tab__toggle mt-2">
                        
                        <TabPanel value={value} index={0}>
                           <AddBus/>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                           <RetrieveUpdateDelete/>
                        </TabPanel>
                        <AppBar position="static" style={{background:"green"}}>
                            <Tabs
                               value={value}
                               onChange={handleChange}
                               
                            >
                                
                                <Tab icon={<AiFillPlusCircle style={{fontSize:"50px"}}/>} label="Add Bus"/>
                                <Tab icon={<MdTimer style={{fontSize:"50px"}}/>} label="Update/Delete Bus"/>
                                
                            </Tabs>
                        </AppBar>
                        
                    </div>
                    </Col>   
                    <Col lg={2} className="d-none d-md-block"></Col>
                </Row>
            </Container>
            
        </React.Fragment>
    )
}
 
export default Admin;
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Navber from '../Navber/Navber';
import Image from '../../../Image/Clock.png'
import Home from '../../../Image/Home.png'

const Header = () => {
    return (
        <div>
            <div class='d-flex justify-content-sm-center'>
                <Row class='d-flex  justify-content-sm-between' style={{ width: '100%' }}>
                    <Col >
                        <div class="d-flex flex-row mb-3">

                            <div>
                                <img style={{ height: '50px', width: '50px' }} src={Image} alt="hello" srcset="" />
                            </div>
                            <div>
                                <p className="h7">Opening Hours
                       <br /><small>Mon - Sat : 9:00 AM to 7:00 PM</small>
                                </p>

                            </div>

                        </div>

                    </Col>
                    <Col><h3 class='justify-content-center'>Protikar</h3></Col>
                    <Col >

                        <div class="d-flex flex-row mb-3 justify-content-center" >
                            <div  >
                                <p className="h7">Address:
                                   <br />
                                    <small>202A, Helsinki, New Alaska, USA.</small>
                                </p>
                            </div>
                            <div >
                                <img style={{ height: '50px', width: '50px' }} src={Home} alt="hello" srcset="" />
                            </div>

                        </div>


                    </Col>
                </Row>
            </div>
            <div>
                <Navber></Navber>
            </div>

        </div>
    );
};

export default Header;
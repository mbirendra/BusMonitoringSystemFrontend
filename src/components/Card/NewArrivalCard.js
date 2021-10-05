import React from 'react'
import Bus1 from '../images/m2.png';
import Bus2 from '../images/m1.png';
import Bus3 from '../images/m3.jpg';
import Bus4 from '../images/Sajha.jpg';
import Bus5 from '../images/city.jpg';
import Bus6 from '../images/mayur.jpg';
import {Link} from 'react-router-dom';

function NewArrivalCard() {
    return (
        <section className="section newarrival">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="heading">Availbale Bus</h3>
                            <div className="underline mx-auto"></div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Bus Stop 1</h6>
                                    <img src={Bus1} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus is at station 1</p>
                                    <Link to="/shop" className="btn btn-warning shadow">View Location</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Bus Stop 2</h6>
                                    <img src={Bus2} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus is at station 2</p>
                                    <Link to="/shop" className="btn btn-warning shadow">View Location</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Seat Availability</h6>
                                    <img src={Bus3} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus seat is available</p>
                                    <Link to="/shop" className="btn btn-warning shadow">View Location</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Sajha Yatayat</h6>
                                    <img src={Bus4} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus seat is available</p>
                                    <Link to="/shop" className="btn btn-warning shadow">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>City Bus</h6>
                                    <img src={Bus5} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus seat is available</p>
                                    <Link to="/shop" className="btn btn-warning shadow">Learn More</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <div className="card-body">
                                    <h6>Mayur Yatayat</h6>
                                    <img src={Bus6} className="w-100 border-bottom" alt="Arrivals"/>
                                    <p>Bus seat is available</p>
                                    <Link to="/shop" className="btn btn-warning shadow">Learn More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default NewArrivalCard;

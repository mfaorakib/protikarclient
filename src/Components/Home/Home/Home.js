import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Offer from '../Offer/Offer';
import Service from '../ServiceCard/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Banner></Banner>
        <Service></Service>
        <Offer></Offer>
        <Testimonial></Testimonial>
        <Footer></Footer>
         </div>
    );
};

export default Home;
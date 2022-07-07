import './product.css';

import React from "react";
import TabContainer from '../components/TabContainer.js';
import Tab from '../components/Tab.js';
import Carousel, { CarouselItem } from '../components/Carousel.tsx';

const Product = () => {
    return (
        <div className="product-page">
            <section className="top">
                <h1 className="header1">So, how does Arc work?</h1>
                <p>Arc is a comprehensive safety system for both agents and managers.</p>
            </section>
            <TabContainer>
                <Tab label="FOR AGENTS">
                    <h3>Arc is a mobile safety app that keeps you safe during showings.</h3>
                    <h4>Step 1:</h4>
                    <p>You arrive at a showing or open house.</p>
                    <Carousel>
                        <CarouselItem>
                            <img className="product-img" src={"Step 1 graphic.svg"} />
                        </CarouselItem>
                        <CarouselItem>
                            <img className="product-img" src={"image 19.png"} />
                            <img className="product-img" src={"image 20.png"} />
                        </CarouselItem>
                    </Carousel>
                    <p>Before you get out of the car, you can easily start a timer with the interval of your choice. This is just how often you want the app to check in with you!</p>
                    <h4>Step 2:</h4>
                    <p>Proceed with your showing as usual.</p>
                    <p>When your timer reaches zero, the app will send you a check-in notification. Simply enter your 4-digit safety code and the app will automatically restart the timer.</p>
                    <h4>Step 3:</h4>
                    <p>If you ever feel unsafe, simply let the check-in timer run out or tap the Early Alert button to  instantly notify everyone in your safety network that you may be in danger.</p>
                    <p>Your safety network will receive your current location, a short audio clip, and the details of any ongoing calendar events.</p>
                </Tab>
                <Tab label="FOR MANAGERS">
                    <h3>Arc is a web app that keeps you informed about your agents' safety.</h3>
                </Tab>
            </TabContainer>
        </div>
    )
}

export default Product;
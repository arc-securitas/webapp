import React from "react";
import styles from './product.module.css';
import TabContainer, { Tab } from '../components/TabContainer.js';
import Carousel, { CarouselItem } from '../components/Carousel.tsx';
import CallToAction from '../components/CallToAction.js';

import productGraphic1 from '../images/product-graphic1.svg';
import productGraphic2 from '../images/product-graphic2.svg';
import productGraphic3 from '../images/product-graphic3.svg';
import productScreenshot1 from '../images/product-screenshot1.png';
import productScreenshot2 from '../images/product-screenshot2.png';
import productScreenshot3 from '../images/product-screenshot3.png';
import construction from '../images/construction.svg';

import ArcAudioSvg from '../animations/ArcAudioSvg.js';
import ArcCalendarSvg from '../animations/ArcCalendarSvg.js';
import ArcNetworkSvg from '../animations/ArcNetworkSvg.js';


const Product = () => {
    return (
        <div>
            <div className={styles.product_page}>
                <section className={styles.top}>
                    <h1 className={styles.header1}>So, how does Arc work?</h1>
                    <p>Arc is a comprehensive safety system for both agents and managers.</p>
                </section>
                <TabContainer>
                    <Tab label="FOR AGENTS">
                        <section className={styles.story}>
                            <h3 className={styles.blue}>Arc is a mobile safety app that keeps you safe during showings.</h3>
                            <h3>Step 1:</h3>
                            <p>You arrive at a showing or open house.</p>
                            <Carousel>
                                <CarouselItem>
                                    <img className={styles.story_img} src={productGraphic1} alt={'Real estate agent getting out of her car in front of a showing, using Arc\'s safety app'} />
                                </CarouselItem>
                                <CarouselItem>
                                    <img className={styles.story_img} src={productScreenshot1} alt={'Screenshot of UI to set a new safety timer and screenshot of active timer'} />
                                </CarouselItem>
                            </Carousel>
                            <p>Before you get out of the car, you can easily start a timer with the interval of your choice. This is just how often you want the app to check in with you!</p>
                            <h3>Step 2:</h3>
                            <p>Proceed with your showing as usual.</p>
                            <Carousel>
                                <CarouselItem>
                                    <img className={styles.story_img} src={productGraphic2} alt={'Real estate agent talking with client while phone buzzes'} />
                                </CarouselItem>
                                <CarouselItem>
                                    {/* TODO: Fix this image, it reads "Enter safety code to cancel timer" but it should say "Enter safety code to confirm safety and restart timer." */}
                                    <img className={styles.story_img} src={productScreenshot2} alt={'Screenshot of UI showing depleted timer and prompt to enter safety code to cancel timer'} />
                                </CarouselItem>
                            </Carousel>
                            <p>When your timer reaches zero, the app will send you a check-in notification. Simply enter your 4-digit safety code and the app will automatically restart the timer.</p>
                            <h3>Step 3:</h3>
                            <p>If you ever feel unsafe, simply let the check-in timer run out or tap the Early Alert button to  instantly notify everyone in your safety network that you may be in danger.</p>
                                <Carousel>
                                    <CarouselItem>
                                        <img className={styles.story_img} src={productGraphic3} alt={'Real estate agent attacked by client'} />
                                    </CarouselItem>
                                    <CarouselItem>
                                        <img className={styles.story_img} src={productScreenshot3} alt={'Screenshot of UI showing danger notification'} />
                                    </CarouselItem>
                                </Carousel>
                            <p>Your safety network will receive your current location, a short audio clip, and the details of any ongoing calendar events.</p>
                        </section>
                        <section className={styles.highlight}>
                            <div className={styles.graphicCal}><ArcCalendarSvg /> </div>
                            <p className={styles.story_center}>Never forget to start a timer by letting Arc automatically schedule them for you. Just sync with your work calendar and we'll do the rest.</p>
                            <div className={styles.graphicNetwork}><ArcNetworkSvg /></div>
                            <p className={styles.story_center}>Update your Safety Network at any time by adding contacts. All you need is a name and a phone number.</p>
                            <div className={styles.graphicAudio}><ArcAudioSvg /></div>
                            <p className="story-center">Arc can record audio clips in the event of a presumed emergency to help others get a better understanding of the situation.</p>
                        </section>
                    </Tab>
                    <Tab label="FOR MANAGERS">
                        <h3 className={styles.blue}>Arc is a web app that keeps you informed about your agents' safety.</h3>
                        <div className={styles.center}>
                            <img className={styles.product_img} src={construction} />
                        </div>
                        <p>Our Arc-itects are hard at work getting this part of the site up and running.</p>
                    </Tab>
                </TabContainer>
            </div>
            <CallToAction />
        </div>
    )
}

export default Product;
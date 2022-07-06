// import './home2.css';
import './homeMobile.css';
import './homeTablet.css';
import './homeLaptop.css';

import React from "react";
import Footer from "../components/Footer";
import { Button } from 'react-bootstrap';

const Home = () => {
    return (
        <>
            <div id="overall">
                <section id="section1">
                    <div className='left'>
                        <div className='insideContent'>
                            <p className='safetyRe'>Safety, Reimagined.</p>
                            <p className='sec1Content'>Helping brokerages prioritize agent <strong>safety</strong> and <strong>productivity</strong>.</p>
                            <Button id="getStart">
                                Get Started
                            </Button>
                        </div>
                    </div>
                    <div className='right'>
                        <img className="img1" src={"mockup.png"} />
                    </div>
                </section>

                <section id="section2">
                    <div className='left'>
                        <div className='insideContent'>
                            <p className='h2s'>The best way to stay safe is to stay connected.</p>
                            <p className='otherContent'>Automatically check in with friends, family, and coworkers when you add them to your safety network!</p>
                        </div>
                    </div>
                    <div className='right'>
                        <img className="img2" src={"Group19.png"} />
                    </div>
                </section>

                <section id="section3">
                    <div className='right'>
                        <div className='insideContent'>
                            <p className='h2s'>Stay informed of your team’s safety.</p>
                            <p className='otherContent'>Our web app allows managing brokers to see all agent safey metrics and easily manage their subscriptions.</p>
                        </div>
                    </div>
                    <div className='left'>
                        <img className="img3" src={"Group22.png"} />
                    </div>
                </section>

                <section id="section4">
                    <div className='left'>
                        <div className='insideContent'>
                            <p className='h2s'>Verify that your agents are safe, minute by minute.</p>
                            <p className='otherContent'>With Arc’s safety timer, agents can periodically check in on their own customized schedule to stay safe without sacrificing productivity. Schedule safety timers easily when you connect your calendar!</p>
                        </div>
                    </div>
                    <div className='right'>
                        <img className="img4" src={"Group15.png"} />
                    </div>
                </section>

                <section id="section5">
                    <div className='right'>
                        <div className='insideContent'>
                            <p className='h2s'>Help your agents the right way, right away.</p>
                            <p className='otherContent'>If you feel that you might be in danger, send an alert with a single click. Your safety network will be notified with your most recent location, your calendar event details, and a short audio clip to contextualize the situation.</p>
                        </div>
                    </div>
                    <div className='left'>
                        <img className="img5" src={"Group17.png"} />
                    </div>
                </section>
            </div>
            {/* TODO: Turn section6 into a component named "CallToAction" */}
            <div id="section6">
                <p className="h3s">Step into the future of real estate safety.</p>
                <Button id="getStartWhite">
                    GET STARTED
                </Button>
            </div>

        </>
    )
}

export default Home;
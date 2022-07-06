// import './home2.css';
import './homeMobile.css';
import './homeTablet.css';
import './homeLaptop.css';

import JoinModal from "../components/joinModal.js";

import React from "react";
import Button from '@mui/material/Button';

const Home = () => {
    return (
        <>
            <div id="overall">
                <section id="section1">
                    <div className='left'>
                        <div className='insideContent'>
                            <p className='safetyRe'>Safety, Reimagined.</p>
                            <p className='sec1Content'>Helping brokerages prioritize agent <strong>safety</strong> and <strong>productivity</strong>.</p>
                            <JoinModal buttonStyling = {{
                                display: 'inline',
                                backgroundColor: "#3684C9",
                                border: 'none',
                                borderRadius: '4px',
                                fontFamily: "Outfit",
                                fontWeight: '700',
                                textTransform: 'none',
                                color: "#fff",
                                padding: '12px 20px',
                                textAlign: 'center',
                                gap: '4px',
                                justifyContent: 'center',
                                position: 'relative',

                                '@media screen and (min-width: 320px)': {
                                    width: '280px',
                                    marginLeft: 'calc(50% - 280px / 2)'
                                },

                                '@media screen and (min-width: 480px)': {
                                    width: '374px',
                                    marginLeft: 'calc(50% - 374px / 2)'
                                },

                                '@media screen and (min-width: 768px)': {
                                    width: '335px',
                                    marginLeft: 'calc(50% - 335px / 2)'
                                },

                                '@media screen and (min-width: 820px)': {   //CHECK THIS ONE!!!!!!!!!!!!
                                    width: '320px',
                                    marginLeft: 'auto'
                                },

                                '@media screen and (min-width: 1024px)': {
                                    width: '370px',
                                    marginLeft: 'auto'
                                },

                                '@media screen and (min-width: 1440px)': {
                                    width: '443px',
                                    marginLeft: 'auto'
                                },

                                '&:hover': {
                                    backgroundColor: '#3684C9'
                                }

                            }} />
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
            <div id="section6">
                <p className="h3s">Step into the future of real estate safety.</p>
                <JoinModal buttonStyling = {{
                    display: 'inline',
                    backgroundColor: "#fff",
                    border: 'none',
                    borderRadius: '4px',
                    fontFamily: "Outfit",
                    fontWeight: '700',
                    textTransform: 'none',
                    color: '#3684C9',
                    padding: '12px 20px',
                    textAlign: 'center',
                    gap: '4px',
                    justifyContent: 'center',
                    fontWeight: 700,
                    marginLeft: 'calc(50% - 48px)',

                    '&:hover': {
                        backgroundColor: '#fff'
                    }
                }} />
            </div>

        </>
    )
}

export default Home;
// import './home2.css';
import './homeMobile.css';
import './homeTablet.css';
import './homeLaptop.css';
import mockup from '../images/mockup.svg';
import ArcWallSvg from '../animations/ArcWallSvg.js';
import HomeMetricsSvg from '../animations/HomeMetrics.js';
import TimelineSvg from '../animations/HomeTimeline.js';
import HomeAlertSvg from '../animations/HomeAlert.js';
import CallToAction from '../components/CallToAction.js';

import JoinModal from "../components/joinModal.js";

import React from "react";

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

                                '@media screen and (min-width: 769px)': {
                                    width: '95%',
                                    marginLeft: 'auto'
                                },

                                '@media screen and (min-width: 820px)': {
                                    width: '95%',
                                    marginLeft: 'auto'
                                },

                                '@media screen and (min-width: 1024px)': {
                                    width: '95%',
                                    marginLeft: 'auto'
                                },

                                '@media screen and (min-width: 1441px)': {
                                    width: '95%',
                                    marginLeft: 'auto'
                                },

                                '&:hover': {
                                    backgroundColor: '#3684C9'
                                }

                            }} />
                        </div>
                    </div>
                    <div className='right'>
                        <img className="img1" src={mockup} />
                    </div>
                </section>
                <div id="suboverall">
                    <section id="section2">
                        <div className='left'>
                            <div className='insideContent'>
                                <p className='h2s'>The best way to stay safe is to stay connected.</p>
                                <p className='otherContent'>Automatically check in with friends, family, and coworkers when you add them to your Safety Network!</p>
                            </div>
                        </div>
                        <div className='right'>
                            <ArcWallSvg />
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
                            <HomeMetricsSvg />
                        </div>
                    </section>

                    <section id="section4">
                        <div className='left'>
                            <div className='insideContent'>
                                <p className='h2s'>Verify that your agents are safe, minute by minute.</p>
                                <p className='otherContent'>With Arc’s Safety Timer, agents can periodically check in on their own customized schedule to stay safe without sacrificing productivity. Schedule Safety Timers easily when you connect your calendar!</p>
                            </div>
                        </div>
                        <div className='right'>
                            <TimelineSvg />
                        </div>
                    </section>

                    <section id="section5">
                        <div className='right'>
                            <div className='insideContent'>
                                <p className='h2s'>Help your agents the right way, right away.</p>
                                <p className='otherContent'>If you feel that you might be in danger, send an alert with a single click. Your Safety Network will be notified with your most recent location, your calendar event details, and a short audio clip to contextualize the situation.</p>
                            </div>
                        </div>
                        <div className='left'>
                            <HomeAlertSvg />
                        </div>
                    </section>
                </div>
            </div>
            <CallToAction />
        </>
    )
}

export default Home;
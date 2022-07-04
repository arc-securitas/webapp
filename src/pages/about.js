import './about.css';
import useGoogleSheets from 'use-google-sheets';

import React from "react";
import Footer from "../components/Footer";
import Row from 'react-bootstrap/Row';

const About = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_API_KEY,
        sheetId: process.env.REACT_APP_SHEET_ID,
        sheetsNames: ['arcmembers'],
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error!</div>;
    }

    const memdata = data[0].data;
    console.log(memdata);

    return (
        <>
            <div className='content'>
                <section>
                    <p className='subheads'>We are <span className='blueStuff'>Arc Security</span>.</p>
                </section>
                <section>
                    <p className='subtitles'>OUR MISSION</p>
                    <p>We envision a world in which people can feel safe on the job. However, from our extensive research, we know that many real estate professionals fear for their personal safety. Yet there is no industry-wide solution for employee safety management. We streamline processes for both the brokerage and the agent, providing peace of mind for everyone. With Arc, you can prioritize safety without sacrificing productivity.</p>
                </section>
                <section>
                    <p className='subheads'>We are <span className='blueStuff'>committed</span> to building a <span className='blueStuff'>safer world</span>.</p>
                    <p>We were founded with the mission to <strong>raise the bar for personal safety</strong> in the real estate space.</p>

                    <p>When asked about her safety, one agent told us: “At the end of the day after many long hours of showing homes, I pour myself a glass of wine, sit down on the couch, and think about all the moments that things could have gone wrong.”</p>

                    <p>We believe in developing technology that helps combat this fear so you can do what you do best.</p>
                </section>
                <section>

                </section>
                <section>
                    <p className='subtitles2'>OUR COMMUNITY</p>
                    <p>Our community is made up of a large network of real estate professional across the West Coast and beyond. We recognize the unique needs of our users and continuously develop features that benefit you the way you want. We are proud of the work we do and the community we have built.</p>
                </section>
                <section>
                    <p className='subheads'>Meet the Team</p>
                    <Row className='overallPpl1' xs={3} sm={5}>
                    {memdata.map((val, index) => (
                        <div className='overallPpl'>
                            <img class="profileImg" src={val["Your professional picture for the Website"].replace("open?", "uc?export=view&")} alt={val["Your Name (As you would like it to appear on the website)"]}></img>
                            <p className='profileData1'><strong>{val["Your Name (As you would like it to appear on the website)"]}</strong></p>
                            <p className='profileData'>{val["Role"]}</p>
                        </div>
                    ))}
                    </Row>
                </section>
            </div>
        </>
    )
}

export default About;
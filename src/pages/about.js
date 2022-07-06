import './about.css';
import useGoogleSheets from 'use-google-sheets';

import React from "react";
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
                    <p>We envision a world in which people can feel safe in their everyday lives, including in their careers. However, from our extensive research, we know that client-facing real estate professionals fear for their personal safety. Yet, there is no industry-wide solution for employee safety management. We integrate various safety-oriented features into a system that streamlines processes for the brokerage, providing peace of mind for everyone while improving firm efficiency. Arc is our contribution towards the world we envision.</p>
                </section>
                <section>
                    <p className='subheads'>We are <span className='blueStuff'>committed</span> to the vision of a <span className='blueStuff'>safer world</span>.</p>
                    <p><strong>We were founded with the mission</strong> to reinvent real estate safety</p>

                    <p>During our early days being exposed to real estate, we heard stories from agents that shocked us and highlighted the dangers inherent to the industry. Since then, we’ve continued to hear stories every day. Every day, we hear real estate agents tell us how they fear for their own safety while on the job because there is no industry-wide safety solution. We believe in developing technology that helps combat this fear and ensure that real estate professionals can work safely and comfortably.</p>
                </section>
                <section>

                </section>
                <section>
                    <p className='subtitles'>OUR COMMUNITY</p>
                    <p>Our community is made up of a large network of real estate professionals across the West Coast and beyond. We recognize the unique needs of our users and continuously strive to develop features that reflect the individual and collective experiences we see in our community. We are proud to see our original vision for Arc flourish and grow with the support of agents in our community.</p>
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
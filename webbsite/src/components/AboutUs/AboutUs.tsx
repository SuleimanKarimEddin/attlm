import React from 'react'
import WithVisible from '../../HighOrderComponent/WithVisible'

function AboutUs() {
    return (
        <WithVisible className='about_us' id='About'>
            <div className='left_side' >
                <h1>About Us</h1>
                <p>At SmartTik , we are passionate about leveraging technology to create innovative solutions for businesses across different industries. With years of experience, we’ve built a reputation for delivering reliable and scalable software that empowers our clients.</p>
            </div>
            <div className='right_side'>
                <div>
                    <h2>Innovative Software Solutions</h2>
                    <p>We specialize in developing cutting-edge software solutions tailored to meet the unique needs of businesses, ensuring high-quality results through innovation and expertise.</p>
                </div>
                <div>
                    <h2>
                        Experienced Team</h2>
                    <p>Our team consists of seasoned developers, designers, and project managers, all working together to deliver robust and scalable software products.</p>
                </div>
                <div>
                    <h2>
                        Client-Centric Approach</h2>
                    <p>We believe in a client-first approach, focusing on collaboration and understanding the core needs of our clients to provide customized solutions that drive success.</p>
                </div>
            </div>
        </WithVisible>
    )
}

export default AboutUs
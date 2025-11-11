import React, { useState } from 'react';
import Button from '@mui/material/Button';
import LAPTOP from '../../assets/laptop.png';
import MOBILE from '../../assets/Phone.png';
import './MathTrade.css'
// You would need to import a separate CSS file, e.g., import './MathTrade.css';

const MathTrade = (props) => {
    const { titleRef } = props;
    // Note: 'mobile_img' and similar are assumed to be CSS classes
    // that style the background or size of an image container.
    const [img, setImg] = useState('mobile_img');

    const handleBackClick = () => {
        titleRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        // Main container uses a class for layout consistency (e.g., max width and padding)
        <div className="math-trade-container"> 

            {/* --- Section 1: Hero/Introduction --- */}
            <div className="section-1-hero">
                
                {/* Mobile Image Container - Absolute positioning is removed and managed by CSS class */}
                <div className="mobile-image-wrapper">
                    <img src={MOBILE} alt="Mobile" className="mobile-image" />
                </div>
                
                {/* Text and Buttons Container */}
                <div className="hero-content">
                    {/* Header Group */}
                    <div className="header-group">
                        <h4 style={{ color: '#545454', letterSpacing: '3px' }}>Welcome to MATHTRADE</h4>
                        <h2 className="main-title">Smart and Simple Trading for Everyone</h2>
                        <h4 style={{ color: '#50967d', letterSpacing: '3px', fontStyle: 'italic' }}>Roboadvisor on Blockchain</h4>
                    </div>
                    
                    {/* Buttons Group */}
                    <div className="buttons-group">
                        <Button size='medium' onClick={handleBackClick} variant="contained" color="primary">
                            Explore
                        </Button>
                        <Button size='medium' variant="outlined" color="primary">
                            Sign Up
                        </Button>
                    </div>
                </div>

                {/* Why MATHTRADE Section (Moved inside to be logically grouped or kept outside) */}
                <div className="why-mathtrade-content">
                    <h3 className="why-title">Why MATHTRADE ?</h3>
                    
                    <h2 className="algorithm-title">
                        Transaparent Algorithms
                    </h2>
                    
                    <div className="algorithm-text">
                        <h4>
                            no more paying for black box algorithms
                        </h4>
                        <h4>
                            Here in MATHTRADE, we provide thorough information of all the algorithms <b>for free even before you sign up</b> because we believe that our users have the right to know what they are relying on.
                        </h4>
                    </div>
                </div>
            </div>
            
            <hr />

            {/* --- Section 2: Laptop Image & Explore Content --- */}
            <div className="section-2-laptop">
                <img src={LAPTOP} alt='Laptop' className="laptop-image" />
                
                <div className="laptop-explore-content">
                    <h3 className="explore-text">
                        Explore up to 50 strategies<br />
                        Check their performance and working principles Choose the one that fits your appetite
                    </h3>
                    <h3 onClick={handleBackClick} className="explore-now-btn">
                        <b>EXPLORE NOW</b>
                    </h3>
                </div>
            </div>

            <hr />

            {/* --- Section 3: Simple Investing Steps --- */}
            <div className="section-3-steps">
                <h2 className="steps-main-title">
                    Simple Investing
                </h2>
                <h3 className="steps-subtitle">
                    just a few steps and you will be ready to start
                </h3>
                
                <div className="steps-content-wrapper">
                    {/* Step List */}
                    <div className="step-list">
                        <h4 className="step-item">1. Create an account</h4>
                        <h4 
                            onMouseOver={() => setImg('mobile_img2')} 
                            onMouseOut={() => setImg('mobile_img')}
                            className="step-item"
                        >
                            2. Choose and subscribe the strategy that fits you
                        </h4>
                        <h4 
                            onMouseOver={() => setImg('mobile_img3')} 
                            onMouseOut={() => setImg('mobile_img')}
                            className="step-item"
                        >
                            3. Follow the action messages provided
                        </h4>
                    </div>
                    
                    {/* Image Placeholder */}
                    <div className={`steps-mobile-img ${img}`}>
                        {/* The actual image or background for the steps */}
                        {/* <img src={ACC_MOBILE} alt='LOGO' /> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MathTrade;
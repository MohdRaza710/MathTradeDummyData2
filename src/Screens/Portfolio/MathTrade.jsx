import React, { useState } from 'react'
import Button from '@mui/material/Button'
import LAPTOP from '../../assets/laptop.png'
import MOBILE from '../../assets/Phone.png'

function MathTrade(props) {
    const { titleref } = props
    const mobile_1 = 'mobile.img'
    const [img, setImg] = useState('mobile.img')

    const handleBackclick = () => {
        titleref?.current?.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <div style={{ marginBottom: '100px', position: 'relative' }}>
                <div className='mobile_img_top' style={{ position: 'absolute', top: '300px', right: 20, paddingRight: '66px' }}>
                    <img src={MOBILE} alt="Mobile" />
                </div>
                <div className='main_panel_math'>
                    <div className='math_panel'>
                        <h4 style={{ color: '#545454', letterSpacing: '3px' }}>Welcome To MATHDTRADE</h4>
                        <h2 className='smart_simple' style={{}}>Smart and Simple Trading for Everyone</h2>
                        <h4 style={{ color: '#50967d', letterSpacing: '3px', fontStyle: 'italic' }}>Roboadvisor on Blockchain</h4>
                    </div>
                    <div className='' style={{ display: 'flex', flex: '1', position: 'relative' }}>
                        <div className='btn_explore_signup'>
                            <Button size='medium' className='btn_math glow-on-hover' variant="contained" onClick={handleBackclick}>
                                Explore
                            </Button>
                            <Button size='medium' className='btn_math glow-on-hover' variant="contained">
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '0px 4px 4px 76px', marginTop: '50px' }}>
                    <h3 className='why_math_trade' >
                        Why MATHTRDAE ?
                    </h3>
                    <h2 style={{ letterSpacing: '3px', fontWeight: 'bold', marginTop: '30px', width: '50%' }}>
                        Trasnparent Algorithum
                    </h2>
                    <div style={{ backgroundColor: '', padding: '10px' }}>
                        <h4 className='math_info_algo' style={{}}>
                            Here in MATHTRADE, we provide thorough information of all the algorithms
                            for free even before you sign up because we believe that our users have
                            the right to know what they are relying on.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='bg_blue'>
                <img style={{ marginTop: '80px' }} src={LAPTOP} alt='Laptop' />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '300px', width: '600px' }}>
                    <h3 className='font_20 font_18' style={{}}>
                        Explore up to 50 strategies <br />
                        Check their performance and working principles Choose the one that fits your appetite
                    </h3>
                    <h3 onClick={handleBackClick} className='explore_txt font_20 font_18' style={{ textAlign: 'center', letterSpacing: '6px', color: '#3c738a' }}>
                        <b className='exp-btn'>EXPLORE NOW</b>
                    </h3>
                </div>
            </div>
            <div className='investing'>
                <h2 style={{ letterSpacing: '3px', textAlign: 'center' }}>
                    Simple Investing
                </h2>
                <h3 style={{ letterSpacing: '3px', textAlign: 'center' }}>
                    just a few steps and you willbe ready to start
                </h3>
                <div className='mobile'>
                    <div style={{ marginTop: '100px', width: '300px', textAlign: 'left' }}>
                        <ul>
                            <li className='account effct-type-writter'>
                                Create an account
                            </li>
                            <li className='subs effct-type-writter' onMouseOver={() => setImg('mobile_img2')} onMouseOut={() => setImg(`mobile.img`)}>
                                Choose and subcribe the startegy that fits you
                            </li>
                            <li className='follow effct-type-writter' onMouseOver={() => setImg('mobile_img3')} onMouseOut={() => setImg(`mobile.img`)}>
                                Foolow the action messages provided
                            </li>
                        </ul>
                    </div>
                    <div className={`${img}`}>
                        {/* <img src={ACC_MOBILE} alt='LOGO' /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MathTrade
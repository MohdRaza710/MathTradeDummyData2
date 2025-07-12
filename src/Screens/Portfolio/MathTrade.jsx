import React, { useState } from 'react'
import Button from '@mui/material/Button'
import LAPTOP from '../../assets/laptop.png'
import MOBILE from '../../assets/Phone.png'

const MathTrade = (props) => {
    const { titleRef } = props
    const mobile_1 = 'mobile_img'
    const [img, setImg] = useState('mobile_img')

    const handleBackClick = () => {
        titleRef?.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div>

            <div style={{ marginBottom: '100px', position: 'relative' }}>
                <div className='mobile_img_top' style={{ position: 'absolute', top: '300px', right: 20 , paddingRight: '66px'}}>
                    <img src={MOBILE} alt='Mobile' />
                </div>
                <div className='main_panel_math'>
                    <div className='math_panel'>
                        <h4 style={{ color: '#545454', letterSpacing: '3px' }}>Welcome to MATHTRADE</h4>
                        <h2 className='smart_simple' style={{}}>Smart and Simple Trading for Everyone</h2>
                        <h4 style={{ color: '#50967d', letterSpacing: '3px', fontStyle: 'italic' }}>Roboadvisor on Blockchain</h4>
                    </div>
                    <div className='' style={{ display: 'flex', flex: '1', position: 'relative' }}>
                        <div className='btn_explore_signup'>
                            <Button size='medium' className='btn_math glow-on-hover' onClick={handleBackClick}>
                                Explore
                            </Button>
                            <Button size='medium' className='btn_math glow-on-hover' >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </div>
                <div style={{ padding: '0px 4px 4px 76px', marginTop: '50px' }}>
                    <h3 className='why_math_trade' >
                        Why MATHTRADE ?
                    </h3>
                    <h2 style={{ letterSpacing: '3px', fontWeight: 'bold', marginTop: '30px', width: '50%' }}>
                        Transaparent Algorithms
                    </h2>
                    <div style={{ backgroundColor: '', padding: '10px' }}>
                        <h4 className='blk_box_algo' style={{}}>
                            no more paying for black box algorithms
                        </h4>
                        <h4 className='math_info_algo' style={{}}>
                            Here in MATHTRADE, we provide thorough information of all the algorithms <b>for free even before you sign up</b> because we believe that our users have the right to know what they are relying on.
                        </h4>
                    </div>
                </div>
            </div>
            <div className='bg_blue'>
                <img style={{ marginTop: '80px' }} src={LAPTOP} alt='Laptop' />
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '300px', width: '600px' }}>
                    <h3 className='font_20 font_18' style={{}}>
                        Explore up to 50 strategies<br />
                        Check their performance and working principles Choose the one that fits your appetite
                    </h3>
                    <h3 onClick={handleBackClick} className='explore_txt font_20 font_18' style={{ textAlign: 'center', letterSpacing: '6px', color: '#3c738a' }}>
                        <b className='exp-btn'>EXPLORE NOW</b>
                    </h3>
                </div>
            </div >
            <div className='investing'>
                <h2 style={{ letterSpacing: '3px', textAlign: 'center' }}>
                    Simple Investing
                </h2>
                <h3 style={{ letterSpacing: '3px', textAlign: 'center' }}>
                    just a few steps and you willbe ready to start
                </h3>
                <div className='mobile'>
                    <div style={{ marginTop: '100px', width: '300px', textAlign: 'left' }}>
                        <h4 className='account effct-type-writter' >1. Create an account</h4>
                        <h4 className='subs effct-type-writter' onMouseOver={() => setImg('mobile_img2')} onMouseOut={() => setImg('mobile_img')}>2. Choose and subscribe the strategy that fits you</h4>
                        <h4 className='follow effct-type-writter' onMouseOver={() => setImg('mobile_img3')} onMouseOut={() => setImg('mobile_img')}>3. Follow the action messages provided</h4>
                    </div>
                    <div className={`${img}`}>
                        {/* <img src={ACC_MOBILE} alt='LOGO' /> */}
                    </div>
                </div>
            </div>

        </div >
    )
}

export default MathTrade
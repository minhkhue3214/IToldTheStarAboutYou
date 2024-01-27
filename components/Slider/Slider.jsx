import React from 'react'
import { Carousel } from 'antd';
import './style.css'
import MagicBg from '../MagicBg/MagicBg';


const Slider = () => {

    const contentStyle = {
        height: '100vh',
        width: '100%',
        borderImage: 'fill 0 linear-gradient(#001, #000)',
        // color: '#fff',
        objectFit: 'cover',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
    };
    

    return (
        <div className='slider_container'>
            <Carousel autoplay>
                <div className='slider'>
                    <img style={contentStyle} src="/bgslider/cake1.webp" alt="" />
                    {/* <img style={contentStyle} src="/img/1.jpg" alt="" /> */}
                </div>
                <div className='slider'>
                    <img style={contentStyle} src="/bgslider/cake2.webp" alt="" />
                    {/* <img style={contentStyle} src="/img/1.jpg" alt="" /> */}
                </div>
                <div className='slider'>
                    <img style={contentStyle} src="/bgslider/cake3.webp" alt="" />
                    {/* <img style={contentStyle} src="/img/1.jpg" alt="" /> */}
                </div>
                <div className='slider'>
                    <img style={contentStyle} src="https://live.staticflickr.com/5161/5261871951_7af75f2cd8_b.jpg" alt="" />
                    {/* <img style={contentStyle} src="/img/1.jpg" alt="" /> */}
                </div>
            </Carousel>
            <MagicBg />
        </div>
    )
}

export default Slider
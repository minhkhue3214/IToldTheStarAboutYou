import React, { useState } from 'react';
import LightBox from '../LightBox/LightBox.jsx';
import './style.css';

const GridGift = () => {
    const [isDisplay, setisDisplay] = useState(false);
    const [isGiftGox, setisGiftGox] = useState(false);
    const [imgBox, setImgBox] = useState('');

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const openLightBox = (e) => {
        setisGiftGox(false)
        // console.log("openLightBox", e.target.src);
        setImgBox(e.target.src);
        setisDisplay(true)
    }

    const openGiftBox = () => {
        setisGiftGox(true)
        setisDisplay(true)
    }

    return (
        <>
            <LightBox isDisplay={isDisplay} setisDisplay={setisDisplay} imgBox={imgBox} isGiftGox={isGiftGox} />
            <div className='gridgift_container'>
                <div className="layer1">
                    <div className="angry-grid">
                        <div className="item-0">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">1</p>
                                </div>
                                <div className="page__2">
                                    {/* <p>Surprise!</p> */}
                                    {/* <img onClick={(e) => (openLightBox(e))} className='box_image' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" /> */}
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap4.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className="item-1">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">2</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/gif/gif1.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-2">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">3</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/1.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-3">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">4</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap5.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-4">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">5</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/2.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-5">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">6</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap6.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="angry-grid1">
                        <div className="item-6">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">7</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/3.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-7">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">8</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap7.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-8">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">9</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/4.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-9">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">10</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap12.gif" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-10">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">11</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/5.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-11">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">12</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap9.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-12">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">13</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/6.webp" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="layer1">
                    <div className="angry-grid2">
                        <div className="item-13">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">14</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/14.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-14">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">15</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/12.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="item-15">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">16</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap23.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-16">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">17</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/8.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-17">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">18</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap21.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-18">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">19</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={() => (openGiftBox())} className='box_image' src="../../public/img/box.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-19">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">20</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap20.webp" alt="" />
                                </div>
                            </div></div>
                    </div>
                    <div className="angry-grid3">
                        <div className="item-20">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">21</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/9.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-21">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">22</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap19.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-22">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">23</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/10.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-23">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">24</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap24.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-24">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">25</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap15.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-25">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">26</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap16.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-26">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">27</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/meme/13.webp" alt="" />
                                </div>
                            </div></div>
                        <div className="item-27">
                            <div className="page">
                                <div className="page__1">
                                    <p className="number">28</p>
                                </div>
                                <div className="page__2">
                                    <img onClick={(e) => (openLightBox(e))} className='box_image' src="/tap/tap17.webp" alt="" />
                                </div>
                            </div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridGift





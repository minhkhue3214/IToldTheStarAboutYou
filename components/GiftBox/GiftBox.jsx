import React, { useEffect, useState } from 'react'
import './style.css'

const GiftBox = ({ openGift, setOpenGift, onStart }) => {
  const openBox = () => {
    setOpenGift(true)
  }

  useEffect(() => {
    // onStart()
  }, [])

  return (
    <div className="giftBox bounce-in-top ">
      <div className={`box ${openGift ? 'invisible' : ''}`} onClick={() => openBox()}>
        <div className="box-tape">
          <div className="box-tape-left"></div>
          <div className="box-tape-right"></div>
          <div className="box-tape-center"></div>
        </div>
        <div className="box-gifts">
          <div className="box-gift-shadow"></div>
        </div>
        <div className="box-gift"></div>
        <div className="box-star box-star-1"></div>
        <div className="box-star box-star-2"></div>
        <div className="box-star box-star-3"></div>
        <div className="box-star box-star-4"></div>
        <div className="box-star box-star-5"></div>
      </div>
      {
        openGift ? <div className="box-content" >
          <img className='slide-top' src="/gif/webear.gif" loop playsInline autoPlay />
          <img className='scale-up-center' src="/tap/tap8.webp" />
          <div className='tracking-in-contract'>Chúc bạn có một sinh nhật thật ấm áp , đón tuổi 18 theo một cách đặc biệt nhất <br></br>
          p/s Ảnh yêu thích nên xin phép dùng lại :]]
           </div>
        </div> : ""
      }
    </div>
  )
}

export default GiftBox
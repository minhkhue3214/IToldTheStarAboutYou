import React from 'react'
import './style.css'

const MagicVideo = () => {
  return (
    <div className='magic_video'>
      <div className="video_content">
        <div className="content">
          <div className="video">
            {/* <img className='tiktok' src="https://i.pinimg.com/564x/7e/46/11/7e46117026b0109bb3c8e0fda4485de5.jpg" alt="" /> */}
            <video className='tiktok' autoPlay loop muted>
              <source src="/video/vd3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img className='tiktok' src="/tap/save1.gif" alt="" /> */}
          </div>
          <div className="text">
            <p>Vài nét đẹp của người lao động mà tôi ăn trộm được =))</p>
          </div>
        </div>
      </div>
      <div className="video_content">
        <div className="content">
          <div className="text">
            <p>Đến đây thì không biết viết cái gì rồi , khách hàng cứ lăn chuột xuống tiếp nhé</p>
          </div>
          <div className="video">
            {/* <img className='tiktok' src="https://i.pinimg.com/564x/57/39/b9/5739b948b0b453f309b191614e82b73b.jpg" alt="" /> */}
            <video className='tiktok' autoPlay loop muted>
              <source src="/video/vd2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img className='tiktok' src="/tap/save2.gif" alt="" /> */}
          </div>
        </div>
      </div>
      <div className="video_content">
        <div className="content">
          <div className="video">
            {/* <img className='tiktok' src="https://i.pinimg.com/564x/4c/2d/9a/4c2d9ab9d16c001348494518d43d6ef4.jpg" alt="" /> */}
            <video className='tiktok' autoPlay loop muted>
              <source src="/video/vd4.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* <img className='tiktok' src="/tap/save3.gif" alt="" /> */}
          </div>
          <div className="text">
            <p>Bên dưới có 28 hộp quà khác nhau , trong đấy có 1 món quà có lời chúc phiền khách hàng tìm hộ tui nhé =)) nếu thấy thì ới hộ tui xem nó nằm ở đâu với</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MagicVideo
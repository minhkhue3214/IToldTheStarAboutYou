import React from 'react'

const Gallery1 = () => {
  return (
    <>
      <div className="gallery-wrap">
        <div className="gallery gallery--row" id="gallery-1">
          <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(/look01/01.webp)' }}></div>
          <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(/look01/02.webp)' }}></div>
          <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(/look01/03.webp)' }}></div>
          <div className="gallery__item gallery__item--xl gallery__item--center" style={{ backgroundImage: 'url(/look01/06.webp)' }}></div>
          <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(/look02/01.webp)' }}></div>
          <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(/look02/02.webp)' }}></div>
          <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(/look02/03.webp)' }}></div>
          <div className="caption">
          DESIGN BY _TapTap_82
          </div>
        </div>
      </div>
      <section className="project project--details project--left">
        <span className="project__label project__label--default">Béo Bank:</span>
        <p>Xin chào , chúc mừng sinh nhật khách hàng , trước khi khách hàng tiến tới các dịch vụ bên dưới thì xin phép cho nói đôi lời đã =))), đáng lẽ ăn trộm ảnh thế này phải xin phép trước , nhưng mà để giữ tính bí mật và món quà này là độc quyền của bạn nào đấy thế nên là tui xin phép nhen, hehe</p>
      </section></>
  )
}

export default Gallery1
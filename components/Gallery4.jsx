import React from 'react'

const Gallery4 = () => {
    return (
            <div className="gallery-wrap gallery-wrap--dense">
            <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-dark" id="gallery-4">
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/01.webp)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/02.webp)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/03.webp)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/04.webp)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/05.webp)' }}></div>
                <div className="gallery__item" style={{ backgroundImage: 'url(/look01/06.webp)' }}></div>
                <div className="caption">
                    <p>Wishing you a day</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery4
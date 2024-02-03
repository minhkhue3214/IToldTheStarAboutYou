import React, { useEffect, useState } from 'react';
import './style.css';
import MusicPlayer from '../MusicPlayer/MusicPlayer';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const isTop = scrollTop < 100;

      setIsScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isScrolled ? 'navbar' : 'navbar black';

  return (
    <nav className={navClass}>
      <div className='nav-text left-corner'><a href={`/`}>Dumiendu</a></div>
      <div className='nav-text right-corner'>
        <a href={`/happy`}>Happy Birthday</a>
      </div>
      <div className='nav-text main-menu'>
        {/* <MusicPlayer /> */}
        <a href="https://www.instagram.com/_taptap_82/">#TapTap82</a>
        {/* <img className='avatar' src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" alt="" /> */}
      </div>
    </nav>
  )
}

export default Navbar
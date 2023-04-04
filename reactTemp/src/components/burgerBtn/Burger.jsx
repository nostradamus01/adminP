import { useEffect } from 'react';
import './Burger.css';
import Aren from '../JavaScript/sidebars';

function Burger() {
  async function Miqo() {
    const firstobject = new Aren();
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.toggle('menu-open');
    const burgerMenu = document.querySelector('.burgerMenu');
    await firstobject.toggleSidebar(false, burgerMenu);
  }
  return (
    <div className="menu-btn" onClick={Miqo}>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
      <div className="btn-line"></div>
    </div>
  )
}
export default Burger
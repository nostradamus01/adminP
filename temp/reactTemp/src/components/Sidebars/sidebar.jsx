import './sidebar.css'
import BurgerMenu from '../burgerMenu/BurgerMenu'
import Aren from '../JavaScript/sidebars';

function Sidebar() {
  async function Miqo() {
    const firstobject = new Aren();
    const menuBtn = document.querySelector('.menu-btn');
    menuBtn.classList.toggle('menu-open');
    await firstobject.toggleSidebar(true);
  }
  return (
    <div className="sidebars">
      <div className="sidebars-bg" onClick={Miqo}></div>
      <div className="sidebars-cont">
        <BurgerMenu />
      </div>
    </div>
  )
}
export default Sidebar
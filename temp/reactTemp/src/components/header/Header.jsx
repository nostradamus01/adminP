import './Header.css'
import { MySvg } from '../icons/My'
import { MobileSvg } from '../icons/Mobile'
import { SearchSvg } from '../icons/Search'
import { BurgerSvg } from '../icons/Burger'
import ScaleSvg from '../icons/Scale'
import { CartSvg } from '../icons/Cart'
import { LoginSvg } from '../icons/Login'
import { SunSvg } from '../icons/Sun'
import { MoonSvg } from '../icons/Moon'
import { useEffect, useState } from 'react'
import Select from '../ui/select/Select'
import Burger from '../burgerBtn/Burger'

const Header = () => {
  const Themes = Gb.Themes;
  const [isDarkTheme, setDarkTheme] = useState(currentTheme === Themes.DARK);
  
  useEffect(() => {
    const theme = isDarkTheme ? Themes.DARK : Themes.LIGHT;
    if (currentTheme !== theme) {
      Gb.setTheme(theme, true);
    }
  }, [isDarkTheme]);

  useEffect(() => {
    const selectConts = document.querySelectorAll('.custom-select');
    let x = null;
    selectConts.forEach(selectCont => {
      const selectedOption = selectCont.querySelector('.selected-option-name');
      selectCont.addEventListener('click', () => {
        if (x && x !== selectCont) {
          x.classList.remove('expanded')
        }
        x = selectCont;        
        selectCont.classList.toggle('expanded');
      });
      const options = selectCont.querySelectorAll('.custom-option');
      options.forEach(option => {
        option.addEventListener('click', (e) => {
          e.stopPropagation();
          const value = +option.dataset.value; // will be needed
          const text = option.dataset.text;
          selectedOption.innerHTML = text;
          selectCont.classList.remove('expanded');
        });
      });
    });
  }, []);

  return (
    <header>
      <div className="header-cont container">
        <div className="inner-header">
          <div className="logo">
            <MySvg />
            <MobileSvg />
          </div>
          <form className="form">
            <input className="search" type="text" placeholder="Search" />
            <SearchSvg />
          </form>
          <div className="menu">
            <div className="burger">
              <BurgerSvg />
            </div>
            <div className="comprasion">
              <ScaleSvg />
            </div>
            <div className="cart">
              <CartSvg />
            </div>
            <div className="login">
              <LoginSvg />
            </div>
          </div>
          <Select options={['AM', 'EN']}/>
          <Select options={['AMD', 'USD']}/>
          <div className="theme">
            <input className="toggle-theme" type="checkbox" id="theme" name="theme" checked={isDarkTheme} onChange={(e) => { setDarkTheme(e.target.checked) }} />
            <label className="toggle-theme-label" htmlFor="theme">
              <div className="checkbox-theme">
                <SunSvg />
                <MoonSvg />
                <div className="circle"></div>
              </div>
            </label>
          </div>
          <Burger />
        </div>
      </div>
    </header>
  )
}

export default Header
import './Home.css'

function Home() {
  return (
    <section>
      <div class="photos">
        <div class="photo1">
          <img src="img/photo1.png" />
        </div>
        <div class="photo2">
          <img src="img/photo2.png" />
        </div>
        <div class="photo3">
          <img src="img/photo3.png" />
        </div>
        <div class="photo4">
          <img src="img/photo4.png" />
        </div>
      </div>
      <div class="smartphones">
        <div class="parent-filters">
          <div class="filters-head">
            <div class="filtername">
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.4578 1.04167H2.54218C1.46567 1.04167 0.926548 2.34321 1.68776 3.10442L7.72942 9.14609C7.95603 9.37269 8.08334 9.68004 8.08334 10.0005V14.9375C8.08334 15.3178 8.2624 15.676 8.56667 15.9042L11.95 18.4417C12.3483 18.7404 12.9167 18.4562 12.9167 17.9583V10.0005C12.9167 9.68004 13.044 9.37269 13.2706 9.14609L19.3122 3.10442C20.0735 2.34321 19.5343 1.04167 18.4578 1.04167Z"
                  stroke="black" stroke-width="2" stroke-linecap="round" />
              </svg>
              <h3 class="h3">Filters</h3>
            </div>
            <div class="esc">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M13.4744 11L20.9872 3.48726C21.6714 2.80301 21.6714 1.69701 20.9872 1.01276C20.3029 0.32851 19.1969 0.32851 18.5127 1.01276L10.9999 8.52551L3.4872 1.01276C2.80295 0.32851 1.69695 0.32851 1.0127 1.01276C0.328449 1.69701 0.328449 2.80301 1.0127 3.48726L8.52545 11L1.0127 18.5128C0.328449 19.197 0.328449 20.303 1.0127 20.9873C1.35395 21.3285 1.80195 21.5 2.24995 21.5C2.69795 21.5 3.14595 21.3285 3.4872 20.9873L10.9999 13.4745L18.5127 20.9873C18.8539 21.3285 19.3019 21.5 19.7499 21.5C20.1979 21.5 20.6459 21.3285 20.9872 20.9873C21.6714 20.303 21.6714 19.197 20.9872 18.5128L13.4744 11Z" />
              </svg>
            </div>
          </div>
          <div class="filters">
            <div class="parent-brands">
              <h5>Brands</h5>
              <div class="brands">
                <div>
                  <input class="input" type="checkbox" id="vehicle1" name="vehicle1" />
                  <label class="label" for="vehicle1">
                    <div class="checkbox">
                      <svg class="check-svg" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.2194 10C4.9894 10 4.7694 9.905 4.6119 9.7375L0.559404 5.42166C0.24357 5.08666 0.26107 4.55916 0.59607 4.24416C0.931904 3.92916 1.4594 3.94583 1.77357 4.28083L5.21107 7.94L12.2177 0.271664C12.5294 -0.0691694 13.0561 -0.0916693 13.3961 0.218331C13.7352 0.528331 13.7586 1.05583 13.4486 1.395L5.8344 9.72833C5.67857 9.9 5.4569 9.99833 5.22524 10H5.2194Z" />
                      </svg>
                    </div>
                    <span> Apple</span>
                  </label>
                </div>
                <div>
                  <input class="input" type="checkbox" id="vehicle2" name="vehicle2" />
                  <label class="label" for="vehicle2">
                    <div class="checkbox">
                      <svg class="check-svg" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.2194 10C4.9894 10 4.7694 9.905 4.6119 9.7375L0.559404 5.42166C0.24357 5.08666 0.26107 4.55916 0.59607 4.24416C0.931904 3.92916 1.4594 3.94583 1.77357 4.28083L5.21107 7.94L12.2177 0.271664C12.5294 -0.0691694 13.0561 -0.0916693 13.3961 0.218331C13.7352 0.528331 13.7586 1.05583 13.4486 1.395L5.8344 9.72833C5.67857 9.9 5.4569 9.99833 5.22524 10H5.2194Z" />
                      </svg>
                    </div>
                    <span> Samsung</span>
                  </label>
                </div>
                <div>
                  <input class="input" type="checkbox" id="vehicle3" name="vehicle3" />
                  <label class="label" for="vehicle3">
                    <div class="checkbox">
                      <svg class="check-svg" width="14" height="10" viewBox="0 0 14 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.2194 10C4.9894 10 4.7694 9.905 4.6119 9.7375L0.559404 5.42166C0.24357 5.08666 0.26107 4.55916 0.59607 4.24416C0.931904 3.92916 1.4594 3.94583 1.77357 4.28083L5.21107 7.94L12.2177 0.271664C12.5294 -0.0691694 13.0561 -0.0916693 13.3961 0.218331C13.7352 0.528331 13.7586 1.05583 13.4486 1.395L5.8344 9.72833C5.67857 9.9 5.4569 9.99833 5.22524 10H5.2194Z" />
                      </svg>
                    </div>
                    <span> Xiaomi</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="parent-price">
              <h5>Price</h5>
              <div class="range">
                <div class="range-price">
                  <input class="price" type="number" name="min" value="100000" />
                  <input class="price" type="number" name="max" value="550000" />
                </div>
                <div class="range-slider">
                  <span class="range-selected"></span>
                </div>

                <div class="range-input">
                  <input type="range" class="min" min="0" max="1000000" value="100000" step="100" />
                  <input type="range" class="max" min="0" max="700000" value="550000" step="100" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="parent-phones">
          <div class="smart-head">
            <h3 class="h3">Smartphones</h3>
            <div class="filter-price">
              <div class="filtr">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.4578 1.04167H2.54218C1.46567 1.04167 0.926548 2.34321 1.68776 3.10442L7.72942 9.14609C7.95603 9.37269 8.08334 9.68004 8.08334 10.0005V14.9375C8.08334 15.3178 8.2624 15.676 8.56667 15.9042L11.95 18.4417C12.3483 18.7404 12.9167 18.4562 12.9167 17.9583V10.0005C12.9167 9.68004 13.044 9.37269 13.2706 9.14609L19.3122 3.10442C20.0735 2.34321 19.5343 1.04167 18.4578 1.04167Z"
                    stroke="black" stroke-width="2" stroke-linecap="round" />
                </svg>
                <h3>Filters</h3>
              </div>
              <select class="phone-select" name="phone" id="phone">
                <option value="value1">Price</option>
                <option value="value1">Price</option>
                <option value="value1">Price</option>
              </select>
            </div>
          </div>
          <div class="phones">
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/iPhone14Pro_Gold.jpg" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/iPhone14ProMax_Deep-Purple.jpg" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/SamsungGalaxyS23Ultra_Green-removebg-preview.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/phone.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/phone.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/phone.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/phone.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card-parent">
              <div class="card">
                <div class="img">
                  <img src="img/phone.png" />
                </div>
                <div class="about">
                  <h5>Apple iPhone 14 Pro Max</h5>
                  <div class="rating">
                    <div>
                      <img src="img/rating.png" />
                    </div>
                    <div class="compare">
                      <svg width="19" height="19" viewBox="0 0 19 19" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7.125 16.625L7.125 2.375M2.375 16.625L2.375 12.6667M11.875 16.625L11.875 5.54167M16.625 16.625V9.5"
                          stroke="#27187E" stroke-width="4" stroke-linecap="round" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="buy">
                  <p>480 000 AMD</p>
                  <div class="buy-cart">
                    <svg width="36" height="31" viewBox="0 0 36 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.61414 2.46802H3.67842C5.46994 2.46802 6.97407 3.71069 7.16836 5.35131L8.59185 17.3718C8.78614 19.0124 10.2903 20.2551 12.0818 20.2551H27.2695C28.8742 20.2551 30.2747 19.2527 30.6712 17.8202L33.0935 9.07042C33.6595 7.02561 31.9824 5.03726 29.6917 5.03726H8.9333M8.97676 26.1166H10.2932M8.97676 27.3294H10.2932M28.2853 26.1166H29.6018M28.2853 27.3294H29.6018M11.3908 26.7231C11.3908 27.6161 10.6049 28.3401 9.63543 28.3401C8.66599 28.3401 7.88011 27.6161 7.88011 26.7231C7.88011 25.8301 8.66599 25.1061 9.63543 25.1061C10.6049 25.1061 11.3908 25.8301 11.3908 26.7231ZM30.6993 26.7231C30.6993 27.6161 29.9134 28.3401 28.944 28.3401C27.9746 28.3401 27.1887 27.6161 27.1887 26.7231C27.1887 25.8301 27.9746 25.1061 28.944 25.1061C29.9134 25.1061 30.6993 25.8301 30.6993 26.7231Z"
                        stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home
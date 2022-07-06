export default class SideBar {

  constructor(someBar={}){
    this.item = someBar;
  this.render();
  }

  getTemplate(){
    return `<div class="Side-bar">
    <div class="Double-slider-wrapper">
      <h3 class="Price-title">Price</h3>
      <div data-element="priceSlider">
        <div class="range-slider range-slider-dragging">
          <span data-element="thumb-left"><svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeftThumb">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81745 0.368609C5.0104 0.332985 5.20958 0.354915 5.39016 0.431669C5.57075 0.508423 5.72476 0.636608 5.83302 0.80026C5.94128 0.963908 5.999 1.15579 5.999 1.352C5.999 1.35201 5.999 1.352 5.999 1.352V16.93L5.999 16.9313C5.99851 17.1189 5.94524 17.3027 5.84528 17.4614C5.74532 17.6202 5.6027 17.7477 5.43372 17.8293C5.26474 17.9108 5.07622 17.9432 4.88971 17.9227C4.7032 17.9022 4.52622 17.8296 4.379 17.7133L0.756211 14.8387C0.520358 14.6513 0.329658 14.413 0.198752 14.1417C0.0678689 13.8704 -7.12609e-05 13.5732 5.6088e-08 13.272C5.6088e-08 13.272 5.6088e-08 13.2721 5.6088e-08 13.272V5.632C0.000166025 5.36307 0.0545679 5.09663 0.159952 4.8492C0.265303 4.60186 0.419441 4.37829 0.613153 4.19187C0.613213 4.19181 0.613092 4.19193 0.613153 4.19187L4.30494 0.632074C4.44621 0.495897 4.62449 0.404234 4.81745 0.368609ZM1.30667 4.91231C1.20977 5.00554 1.13267 5.11735 1.07998 5.24107C1.0273 5.36474 1.0001 5.49776 1 5.63218V13.272C0.999952 13.4226 1.03392 13.5714 1.09938 13.7071C1.16483 13.8427 1.26007 13.9618 1.378 14.0555L4.999 16.9287L4.999 1.352L1.30667 4.91231Z" fill="#C2CFE0"/>
            </svg>
            </span>
          <div data-element="inner" class="range-slider_inner">
            <span data-element="progress" class="range-slider_progress"></span>
          </div>
          <span data-element="thumb-right"><svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="RightThumb">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.18255 17.6314C0.989596 17.667 0.790421 17.6451 0.609836 17.5683C0.429251 17.4916 0.275238 17.3634 0.166977 17.1997C0.0587196 17.0361 0.000997543 16.8442 0.000999928 16.648C0.000999928 16.648 0.000999928 16.648 0.000999928 16.648L0.000999928 1.07L0.00100183 1.0687C0.00148916 0.881062 0.0547585 0.69735 0.154719 0.538557C0.25468 0.379766 0.397299 0.2523 0.56628 0.170731C0.735263 0.089159 0.923782 0.0567818 1.11029 0.0772877C1.2968 0.0977955 1.47378 0.170366 1.621 0.286699L5.24379 3.16132C5.47964 3.34867 5.67034 3.58705 5.80125 3.85833C5.93213 4.12955 6.00007 4.42684 6 4.728C6 4.72805 6 4.72794 6 4.728L6 12.368C5.99983 12.6369 5.94543 12.9034 5.84005 13.1508C5.7347 13.3981 5.58056 13.6217 5.38685 13.8081C5.38679 13.8082 5.38691 13.8081 5.38685 13.8081L1.69506 17.3679C1.55379 17.5041 1.37551 17.5958 1.18255 17.6314ZM4.69333 13.0877C4.79023 12.9945 4.86733 12.8826 4.92002 12.7589C4.9727 12.6353 4.9999 12.5022 5 12.3678L5 4.728C5.00005 4.57739 4.96608 4.42856 4.90062 4.29292C4.83517 4.15729 4.73993 4.03818 4.622 3.94451L1.001 1.0713L1.001 16.648L4.69333 13.0877Z" fill="#C2CFE0"/>
            </svg>
            </span>
        </div>
      </div>
      <div class="Slider-money">
        <div class="Money-left">0 UAH</div>
        <div class="Money-right">9999 UAH</div>
      </div>
    </div>
    <div class="Categories-filter">
      <h3 class="Category-title">Category</h3>
      <div class="Category-device-checkbox">
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=monitors" class="Custom-checkbox">
          <label for="category=monitors">Monitors</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=laptops" class="Custom-checkbox">
          <label for="category=laptops">Laptops</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=VideoCards" class="Custom-checkbox">
          <label for="category=VideoCards">Video cards</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=GamingKeyboards" class="Custom-checkbox">
          <label for="category=GamingKeyboards">Gaming keyboards</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=Mouse" class="Custom-checkbox">
          <label for="category=Mouse">Mouse</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=SSD" class="Custom-checkbox">
          <label for="category=SSD">SSD</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="category=SoundCards" class="Custom-checkbox">
          <label for="category=SoundCards">Sound cards</label>
        </div>
        <div class="Filter-panel-checkbox Underline-box">
          <input type="checkbox" name="filter" value="category=RAM" class="Custom-checkbox">
          <label for="category=RAM">RAM</label>
        </div>
      </div>
    </div>

    <div class="Brand-filter">
      <h3 class="Brand-title">Brands</h3>
      <div class="Brand-device-checkbox">
        <div class="Brand-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Asus"  class="Custom-checkbox">
          <label for="brand=Asus">Asus</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Acer"  class="Custom-checkbox">
          <label for="brand=Acer">Acer</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=VideoCards" class="Custom-checkbox">
          <label for="brand=VideoCards">Apple</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Dell" class="Custom-checkbox">
          <label for="brand=Dell">Dell
          </label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Dynamode" class="Custom-checkbox">
          <label for="brand=Dynamode">Dynamode</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Gigabyte" class="Custom-checkbox">
          <label for="brand=Gigabyte">Gigabyte</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Kingston" class="Custom-checkbox">
          <label for="brand=Kingston">Kingston</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Lenovo" class="Custom-checkbox">
          <label for="brand=Lenovo">Lenovo</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=Logitech" class="Custom-checkbox">
          <label for="brand=Logitech">Logitech</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=MSI" class="Custom-checkbox">
          <label for="brand=MSI">MSI</label>
        </div>
        <div class="Filter-panel-checkbox">
          <input type="checkbox" name="filter" value="brand=BenQ" class="Custom-checkbox">
          <label for="brand=BenQ">BenQ</label>
        </div>
        <div class="Filter-panel-checkbox Underline-box">
          <input type="checkbox" name="filter" value="brand=A4Tech" class="Custom-checkbox">
          <label for="brand=A4Tech">A4Tech</label>
        </div>
    </div>

    </div>

    <div class="Double-slider-wrapper">
    <h3 class="Price-title">Rating</h3>
    <div data-element="priceSlider">
      <div class="range-slider range-slider-dragging">
        <span data-element="thumb-left"><svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="LeftThumb">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81745 0.368609C5.0104 0.332985 5.20958 0.354915 5.39016 0.431669C5.57075 0.508423 5.72476 0.636608 5.83302 0.80026C5.94128 0.963908 5.999 1.15579 5.999 1.352C5.999 1.35201 5.999 1.352 5.999 1.352V16.93L5.999 16.9313C5.99851 17.1189 5.94524 17.3027 5.84528 17.4614C5.74532 17.6202 5.6027 17.7477 5.43372 17.8293C5.26474 17.9108 5.07622 17.9432 4.88971 17.9227C4.7032 17.9022 4.52622 17.8296 4.379 17.7133L0.756211 14.8387C0.520358 14.6513 0.329658 14.413 0.198752 14.1417C0.0678689 13.8704 -7.12609e-05 13.5732 5.6088e-08 13.272C5.6088e-08 13.272 5.6088e-08 13.2721 5.6088e-08 13.272V5.632C0.000166025 5.36307 0.0545679 5.09663 0.159952 4.8492C0.265303 4.60186 0.419441 4.37829 0.613153 4.19187C0.613213 4.19181 0.613092 4.19193 0.613153 4.19187L4.30494 0.632074C4.44621 0.495897 4.62449 0.404234 4.81745 0.368609ZM1.30667 4.91231C1.20977 5.00554 1.13267 5.11735 1.07998 5.24107C1.0273 5.36474 1.0001 5.49776 1 5.63218V13.272C0.999952 13.4226 1.03392 13.5714 1.09938 13.7071C1.16483 13.8427 1.26007 13.9618 1.378 14.0555L4.999 16.9287L4.999 1.352L1.30667 4.91231Z" fill="#C2CFE0"/>
          </svg>
          </span>
        <div data-element="inner" class="range-slider_inner">
          <span data-element="progress" class="range-slider_progress"></span>
        </div>
        <span data-element="thumb-right"><svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="RightThumb">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.18255 17.6314C0.989596 17.667 0.790421 17.6451 0.609836 17.5683C0.429251 17.4916 0.275238 17.3634 0.166977 17.1997C0.0587196 17.0361 0.000997543 16.8442 0.000999928 16.648C0.000999928 16.648 0.000999928 16.648 0.000999928 16.648L0.000999928 1.07L0.00100183 1.0687C0.00148916 0.881062 0.0547585 0.69735 0.154719 0.538557C0.25468 0.379766 0.397299 0.2523 0.56628 0.170731C0.735263 0.089159 0.923782 0.0567818 1.11029 0.0772877C1.2968 0.0977955 1.47378 0.170366 1.621 0.286699L5.24379 3.16132C5.47964 3.34867 5.67034 3.58705 5.80125 3.85833C5.93213 4.12955 6.00007 4.42684 6 4.728C6 4.72805 6 4.72794 6 4.728L6 12.368C5.99983 12.6369 5.94543 12.9034 5.84005 13.1508C5.7347 13.3981 5.58056 13.6217 5.38685 13.8081C5.38679 13.8082 5.38691 13.8081 5.38685 13.8081L1.69506 17.3679C1.55379 17.5041 1.37551 17.5958 1.18255 17.6314ZM4.69333 13.0877C4.79023 12.9945 4.86733 12.8826 4.92002 12.7589C4.9727 12.6353 4.9999 12.5022 5 12.3678L5 4.728C5.00005 4.57739 4.96608 4.42856 4.90062 4.29292C4.83517 4.15729 4.73993 4.03818 4.622 3.94451L1.001 1.0713L1.001 16.648L4.69333 13.0877Z" fill="#C2CFE0"/>
          </svg>
          </span>
      </div>
    </div>
    <div class="Slider-money">
      <div class="Money-left">0</div>
      <div class="Money-right">5</div>
    </div>
    </div>
  </div>
  <button class="Clear-button">CLEAR ALL FILTERS</button>`;
  }
  render(){
    const SideBar = document.createElement('div');

    SideBar.innerHTML = this.getTemplate();
    this.element = SideBar;

  }
}

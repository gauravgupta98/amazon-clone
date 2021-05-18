import { LocationOn, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import amazonlogo from "../../resources/amazonlogo.png";
import "./Header.css";
import { IBasketState } from "../../store/reducer";
import { auth } from "../../firebase";

function Header() {
  const { basket, user } = useSelector<IBasketState, IBasketState>(
    (state) => state
  );

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={amazonlogo} alt="amazon logo" />
      </Link>

      <div className="header__address">
        <LocationOn />
        <div className="header__option">
          <span className="header__optionLineOne">Hello </span>
          <span className="header__optionLineTwo">Select your address</span>
        </div>
      </div>

      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login">
          <div className="header__option" onClick={handleAuthentication}>
            <span className="header__optionLineOne">
              Hello {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartOutlined />
            <span className="header__optionLineTwo header__basketCount">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

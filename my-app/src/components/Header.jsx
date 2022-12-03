import React from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FlutterDashIcon from '@mui/icons-material/FlutterDash';
import "./Header.css";
function Header() {
      return (
            <div className='header'>

                  {/* {search} */}
                  <div className='header__search'>
                        <button type="button" className="btn btn-outline-light btn-lg">Search</button>
                  </div>
                  {/* {icon} */}
                  <div className='header__logo'>
                        <FlutterDashIcon className=' header__logo__img' />
                        <h4>  Savannahh</h4>

                  </div>

                  {/* {sign IN } */}

                  <div className='navBar'>

                        <div className='header__options'>
                       <span className='optionLineOne'>Hello Guest</span>
                       <span className='optionLineTwo'>Sign In</span>

                        </div>


                        {/* {wallet} */}
                        <div className='header__options'>


                              <AccountBalanceWalletIcon className='header__options' />

                        </div>
                        {/* {cart} */}

                        <div className='header__options'>
                              <AddShoppingCartIcon className='header__options' />
                        </div>

                  </div>
            </div>

      )
}

export default Header

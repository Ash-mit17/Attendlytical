import { Avatar, Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { APP_LOGO_URL } from '../../../assets';
import './HeaderNavbar.css';

// const { Header } = Layout;

export default () => {
  const pathname =
    window.location.pathname; /* e.g: pathname="/signin" or "/" or "/signup" */
  const path = pathname.substr(1); //skip '/' character
  return (
    <div className='headerNavbar'>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {/* <div>
          <Link to='/'>
            <Avatar
              shape="square"
              className='avatar'
              size='large'
              alt='Attendlytics'
              src={APP_LOGO_URL.link}
              onError={(err) => {
                console.log(err);
              }}
            />
          </Link>
          </div> */}
          <div>
            <Link to="/">
              <span style={{ color: '#FEE715', fontSize: '20px', fontWeight: 'bold', marginLeft: '10px' }}>Secure attendance</span>
            </Link>
          </div>
        </div>
        <div style={{ marginRight: '10px' }}>
          {/* <Menu mode='horizontal' defaultSelectedKeys={[path]}>
            <Menu.Item key='signin'>
              <Link to='/signin'>Sign in</Link>
            </Menu.Item>
            <Menu.Item key='signup'>
              <Link to='/signup'>Sign up</Link>
            </Menu.Item>
          </Menu> */}
          <div>
            <Link to='/signin'>
              <span style={{ color: 'white', fontSize: '15px', marginLeft: '10px' }}>SignIn</span>
            </Link>
            <Link to='/signup'>
              <span style={{ color: 'white', fontSize: '15px', marginLeft: '10px' }}>SignUp</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

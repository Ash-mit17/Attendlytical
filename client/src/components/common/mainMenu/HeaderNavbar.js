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
          <div>
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
          </div>
          <div>

            <span style={{ color: 'white', fontSize: '20px', fontWeight: 'bold' }}>Attendlytical</span>

          </div>
        </div>
        <div  style={{marginRight: '10px'}}>
          <Menu mode='horizontal' defaultSelectedKeys={[path]}>
            <Menu.Item key='signin'>
              <Link to='/signin'>Sign in</Link>
            </Menu.Item>
            <Menu.Item key='signup'>
              <Link to='/signup'>Sign up</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

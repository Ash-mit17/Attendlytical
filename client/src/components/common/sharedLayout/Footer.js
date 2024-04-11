import { Layout } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <footer style={{ textAlign: 'center', padding: '15px 0' }}>
    <span>&copy; Secure attendance {new Date().getFullYear()}</span>
    {/* <span>&nbsp;&nbsp;&nbsp; <Link to="/privacypolicy">Privacy Policy</Link></span> */}
    {/* <span>&nbsp;&nbsp;&nbsp; <Link to="/termandcondition">Term & Condition</Link></span> */}
    <span>&nbsp;&nbsp;&nbsp; <Link to="/userguidelines">User Guidelines</Link></span>
  </footer>
);

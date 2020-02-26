import React from 'react';
import logo from './logo.svg';
import './App.css';
import Template from './template/Template';
import SiderMenu from './components/SiderMenu/SiderMenu';
import Content from './components/Content/Content';

function App() {
  return (
    <Template
      sider={<SiderMenu />}
      content={<Content/>}
    />
  );
}

export default App;

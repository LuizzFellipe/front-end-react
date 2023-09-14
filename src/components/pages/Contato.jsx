import Footer from "../layout/Footer";
import Headers from '../layout/Headers';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';

import React from 'react'

const Contato = () => {
  return (
    <>
      <Headers />
      <div id="main">
        <Sidebar />
        <Content>
          <h1>Contato</h1>
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default Contato;
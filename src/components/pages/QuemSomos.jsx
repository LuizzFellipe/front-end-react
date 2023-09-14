import Headers from '../layout/Headers';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Footer from '../layout/Footer';

import React from 'react'

const QuemSomos = () => {
  return (
    <>
      <Headers />
      <div id='main'>
        <Sidebar />
        <Content>
          <h1>Quem Somos</h1>
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default QuemSomos;
import React from 'react'

import Headers from "../layout/Headers";
import Sideber from "../layout/Sidebar";
import Content from "../layout/Content";
import Footer from "../layout/Footer";

const home = () => {
  return (
    <>
        <Headers />
        <div id='main'>
            <Sideber />
            <Content />
        </div>
        <Footer />
    </>
  )
}

export default home
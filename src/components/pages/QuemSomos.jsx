import Headers from '../layout/Headers';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import CardUser from '../utils/CardUser';

// import React from 'react'

const user = {
  nome: "Luizz Fellipe",
  email: "luiz@gmail.com",
  phono: "https://avatars.githubusercontent.com/u/127341699?v=4"
}

const QuemSomos = () => {
  return (
    <>
      <Headers />
      <div id='main'>
        <Sidebar />
        <Content>
          <h1>Quem Somos</h1>
          <CardUser user={user} />
          <CardUser />
          <CardUser />
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default QuemSomos;
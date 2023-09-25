import Headers from '../layout/Headers';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import CardUser from '../utils/CardUser';
import { useEffect, useState } from 'react';

// import React from 'react'


const QuemSomos = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const listUser = async () => {
      const response = await fetch('http://127.0.0.1:3000/user/list')
      const data = await response.json()
      setUsers(data.users)
    }

    listUser()
  }, []);

  return (
    <>
      <Headers />
      <div id='main'>
        <Sidebar />
        <Content>
          <h1>Quem Somos</h1>
          {

            users.length > 0 ? users.map((user) => {
              return <CardUser key={user.nome} user={user} />
            }) : <h1>Carregando...</h1>
          }
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default QuemSomos;
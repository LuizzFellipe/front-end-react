import Headers from '../layout/Headers';
import Sidebar from '../layout/Sidebar';
import Content from '../layout/Content';
import Footer from '../layout/Footer';
import CardUser from '../utils/CardUser';
import { useEffect, useState } from 'react';

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"

const QuemSomos = () => {

  const [users, setUsers] = useState([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const listUser = async () => {
      const response = await fetch('http://127.0.0.1:3000/user/list')
      const data = await response.json()
      setUsers(data.users)
    }

    listUser()
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault()

    const newUser = {
      nome: event.target.nome.value,
      email: event.target.email.value,
      senha: event.target.senha.value,
      photo: event.target.photo.value
    }

    const response = await fetch('http://localhost:3000/user/cadastro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    if (response.ok) {
      const data = await response.json()
      alert(data.success)
      setShowModal(false)
      setUsers([...users, data.user])
    }
  }

  return (
    <>
      <Headers />
      <div id='main'>
        <Sidebar />
        <Content>
          <h1>Quem Somos</h1>
          <Button as="button" variant="primary" onClick={() => setShowModal(true)}>Cadastrar Usuário</Button>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Cadastrar Usuário
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control type="text" name="nome" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="senha" name="senha" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>URL Foto</Form.Label>
                  <Form.Control type="text" name="photo" />
                </Form.Group>
                <Button variant="primary" type="submit">Cadastrar</Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
          {
            users.length > 0 ?
              users.map((user) => {
                return <CardUser key={user.id} user={user} />
              })
              :
              <p>Carregando...</p>
          }
        </Content>
      </div>
      <Footer />
    </>
  )
}

export default QuemSomos;


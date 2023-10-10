import './CardUser.css'
import { BsFillTrashFill as IconTrash } from 'react-icons/bs'
import { BiEdit as IconEdit } from 'react-icons/bi'

import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CardUser = ({ user, users, setUsers }) => {

    const [showEditModal, setShowEditModal] = useState(false)
    const [nome, setNome] = useState(user.nome)
    const [email, setEmail] = useState(user.email)
    const [photo, setPhoto] = useState(user.photo)

    const handleDelete = async (id) => {
        const response = await fetch('http://localhost:3000/user/apagar', {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })

        if (response.ok) {
            const data = await response.json()
            if (data?.success) {
                alert(data.success)
                const newUsers = users.filter((user) => user.id != id)
                setUsers(newUsers)
            }
        }
    }


    const handleSubmit = async (event) => {
        event.preventDefault()
        const newUser = {
            id: user.id,
            nome: nome,
            email: email,
            photo: photo
        }
        const response = await fetch('http://localhost:3300/user/atualizar', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })

        if (response.ok) {
            const data = await response.json()
            alert(data.success)
            setShowEditModal(false)
            const newUsers = users.map((userC) => {
                if (userC.id == user.id) {
                    return data.user
                } else {
                    return userC
                }
            })
            setUsers(newUsers)
        }

    }

    return (
        <>
            <div className="cardUser">
                <img src={user.photo} alt={user.name} />
                <div>
                    <h3>{user.nome}</h3>
                    <span>{user.email}</span>
                    <IconEdit className='IconEdit' onClick={() => setShowEditModal(true)} />
                    <IconTrash className='IconTrash' onClick={() => handleDelete(user.id)} />
                </div>
            </div>
            <Modal
                show={showEditModal}
                onHide={() => setShowEditModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Editar Usuário
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" name="name" value={nome} onChange={(event) => setNome(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>URL Foto</Form.Label>
                            <Form.Control type="text" name="photo" value={photo} onChange={(event) => setPhoto(event.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">Editar</Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowEditModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CardUser;
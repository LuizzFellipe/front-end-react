import './CardUser.css'

const CardUser = ({ user }) => {
    return (
        <div className="cardUser">
            <img src={user.photo} alt={user.nome} />
            <div>
                <h3>{user.nome}</h3>
                <span>{user.email}</span>
            </div>
        </div>
    )
}

export default CardUser;
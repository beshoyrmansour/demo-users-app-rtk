import React from 'react'
import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { User } from '../../../app/models/users/user'
import { getUserName } from '../../../utils/getUserName'

interface Props {
    user: User
}

const UserCard = (props: Props) => {
    const { user } = props
    return (
            <NavLink to={`/Users/${user.id}`}>
        <Card>
            <Card.Body>
                <Card.Title>
                    {getUserName(user)}
                </Card.Title>
            </Card.Body>
            <Card.Img variant="bottom" src={user.picture}/>
        </Card></NavLink>
    )
}

export default UserCard

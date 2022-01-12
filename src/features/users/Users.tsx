import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { User } from '../../app/models/users/user'
import UserCard from './components/UserCard'
import { useUsersListQuery } from './usersAPI'

interface Props {

}

const Users = (props: Props) => {
    const { data, error, isLoading, isFetching, isSuccess } = useUsersListQuery();
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        if (data) {
            if ("data" in data) {
                setUsers(data?.data)
            }

        }
    }, [data])
    return (<Row xs={1} md={4} lg={3} className="g-4">
        {isLoading && <h2>...Loading</h2>}

        {isFetching && <h2>...isFetching</h2>}

        {error && <h2>Something went wrong</h2>}

        {isSuccess && data && (
            users.map((user: User) => <Col>
                <UserCard user={user} key={user.id} />
            </Col>)
        )})
    </Row>)
    // {isLoading ? <>{Array.from({ length: 4 }).map((_, id) => <Col key={id}>
    //     {/* <h1>Loading...</h1> */}
    //     <UserCard user={{
    //         firstName: "string",
    //         id: "string",
    //         lastName: "string",
    //         picture: "string",
    //         title: "string",
    //         dateOfBirth: "string",
    //         email: "string",
    //         gender: "string",
    //         phone: "string",
    //         registerDate: "string",
    //         updatedDate: "string",
    //     }} />
    // </Col>)}</> : <>
    //     {/* {users.map((user: User) => <Col>
    //         <UserCard user={user} key={user.id} />
    //     </Col>)} */}
    // </>}
    // 

}

export default Users

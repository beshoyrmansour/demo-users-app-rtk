import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

interface Props {

}

const NavBar = (props: Props) => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">USERS APP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Users" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} >Users</NavLink>
                        </li>
                        {/* <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        //     <div className="container-fluid">
        //         <a className="navbar-brand" href="#">USERS APP</a>
        //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className="collapse navbar-collapse" id="navbarSupportedContent">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} >Home</NavLink>
        //                 </li>
        //                 <li className="nav-item">
        //                     <NavLink to="/Users" className={({ isActive }) => isActive ? "active nav-link" : "nav-link"} >Users</NavLink>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    )
}

export default NavBar

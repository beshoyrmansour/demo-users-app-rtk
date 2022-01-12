import React from 'react'

interface Props {

}

const Footer = (props: Props) => {
    return (
        <footer className="border-top  mt-4 ">
            <div className="container-fluid">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 ">
                    <div className="col-md-4 d-flex align-items-center">
                        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            USERS APP
                        </a>
                        <span className="text-muted">© 2022 Company, Inc</span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">

                        <li className="ms-3"><a className="text-muted " target="_blank" href="https://redux-toolkit.js.org/">REDUX TOOLKIT</a></li>
                        <li className="ms-3"><a className="text-muted " target="_blank" href="https://dummyapi.io/docs">DUMMYAPI.IO</a></li>
                        <li className="ms-3"><a className="text-muted " target="_blank" href="https://surge.sh/">SURGE.SH</a></li>

                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer

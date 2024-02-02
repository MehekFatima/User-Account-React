import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import ProfileEdit from './ProfileEdit';  // Import the ProfileEdit component

const Details = () => {
    const [logindata, setLoginData] = useState([]);
    const history = useNavigate();
    const [show, setShow] = useState(false);

    const todayDate = new Date().toISOString().slice(0, 10);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const userlogout = () => {
        localStorage.removeItem("user_login");
        history("/");
    };

    useEffect(() => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
            setLoginData(user);
        }
    }, []);

    return (
        <>
            {logindata.length === 0 ? (
                "error"
            ) : (
                <>
                    <h1>Details page</h1>
                    <h1>{logindata[0].name}</h1>
                    <Button onClick={userlogout}>Log Out</Button>

                    {logindata[0].date === todayDate ? (
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Wish you many many happy returns of the day! 🍰</Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ) : (
                        ""
                    )}

                    {/* Profile Edit Button */}
                    <Button onClick={handleShow} style={{
                         marginLeft: '30px',  
                         }}>
                        
                        Edit Profile</Button>

                    {/* Profile Edit Modal */}
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* Include the ProfileEdit component */}
                            <ProfileEdit />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {/* You can include a Save Changes button here if needed */}
                        </Modal.Footer>
                    </Modal>
                </>
            )}
        </>
    );
};

export default Details;

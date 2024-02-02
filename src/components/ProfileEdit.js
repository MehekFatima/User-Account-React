import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileEdit = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem("user_login"));
        if (userData && userData.length > 0) {
            setInpval({
                email: userData[0].email,
                password: userData[0].password,
            });
        }
    }, []);

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevData) => {
            return {
                ...prevData,
                [name]: value,
            };
        });
    };

    const updateProfile = (e) => {
        e.preventDefault();

        const { email, password } = inpval;
        if (email === "") {
            toast.error('Email field is required', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('Please enter a valid email address', {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error('Password field is required', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('Password length should be greater than five', {
                position: "top-center",
            });
        } else {
            localStorage.setItem("user_login", JSON.stringify([{ email, password }]));

            // Show success message using toast
            toast.success('Profile updated successfully!', {
                position: "top-center",
            });

            // Redirect to the details page
            history("/details");
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Edit Profile</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} value={inpval.email} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} value={inpval.password} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={updateProfile} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Update Profile
                            </Button>
                        </Form>
                    </div>
                   
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default ProfileEdit;

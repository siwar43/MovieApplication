import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function AddMovie({ movies, setmovies }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newmovie, setnewmovie] = useState({
        name: "",
        posterurl: "",
        description: "",
        rating: ""
    });

    const handleadd = () => {
        setmovies([...movies, newmovie]);
    };

    return (
        <>
            <div>
                <Button
                    variant="danger"
                    onClick={handleShow}
                    style={{
                        backgroundColor: '#E50914',
                        border: 'none',
                        fontWeight: 'bold',
                        padding: '10px 20px',
                        borderRadius: '8px',
                        boxShadow: '0 0 10px rgba(229, 9, 20, 0.4)',
                    }}
                >
                    Add movies
                </Button>
            </div>

            <Modal show={show} onHide={handleClose} centered contentClassName="bg-dark text-white rounded">
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title style={{ color: '#E50914', fontWeight: 'bold' }}>Add a Movie</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label> Movie Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter movie name"
                                className="custom-input"
                                onChange={(e) => setnewmovie({ ...newmovie, name: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> Poster URL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter image URL"
                                className="custom-input"
                                onChange={(e) => setnewmovie({ ...newmovie, posterurl: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> Description</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter movie description"
                                className="custom-input"
                                onChange={(e) => setnewmovie({ ...newmovie, description: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label> Rating</Form.Label>
                            <Form.Control
                                type="number"
                                min="0"
                                max="5"
                                placeholder="Enter movie rating"
                                className="custom-input"
                                onChange={(e) => setnewmovie({ ...newmovie, rating: e.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        onClick={() => {
                            handleadd();
                            handleClose();
                        }}
                        style={{
                            backgroundColor: '#E50914',
                            border: 'none',
                            fontWeight: 'bold',
                        }}
                    >
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;

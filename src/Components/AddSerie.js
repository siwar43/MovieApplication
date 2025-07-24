import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddSerie({ series, setSeries }) {
  const [show, setShow] = useState(false);
  const [newserie, setNewSerie] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = () => {
    setSeries([...series, newserie]);
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
            fontSize: '16px',      
            minWidth: '140px',   
          }}
        >
          Add series
        </Button>
      </div>

      <Modal 
        show={show} 
        onHide={handleClose} 
        centered 
        contentClassName="bg-dark text-white rounded"
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title style={{ color: '#E50914', fontWeight: 'bold' }}>Add a Serie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Serie Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter serie name"
                className="custom-input"
                onChange={(e) => setNewSerie({ ...newserie, name: e.target.value })}
                value={newserie.name}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                className="custom-input"
                onChange={(e) => setNewSerie({ ...newserie, posterurl: e.target.value })}
                value={newserie.posterurl}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter serie description"
                className="custom-input"
                onChange={(e) => setNewSerie({ ...newserie, description: e.target.value })}
                value={newserie.description}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="5"
                placeholder="Enter serie rating"
                className="custom-input"
                onChange={(e) => setNewSerie({ ...newserie, rating: e.target.value })}
                value={newserie.rating}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={handleClose}
            style={{ fontWeight: 'bold' }}
          >
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleAdd();
              handleClose();
            }}
            style={{
              backgroundColor: '#E50914',
              border: 'none',
              fontWeight: 'bold',
              fontSize: '16px',
              minWidth: '100px',
            }}
          >
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddSerie;

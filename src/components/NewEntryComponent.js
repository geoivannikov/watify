import React, { Component, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./floating_window_component/floating_window_component.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NewEntry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button onClick={handleShow} style={{  position: 'fixed', right: 30, bottom: 100, width: 80, height: 80, borderRadius: 100, fontSize: 20, fontWeight: 300, textAlign: "center" }} variant="success">
        New
      </Button>
      <div className="modal-w">
        <Modal show={show} onHide={handleClose}>
          <div className="send-password-header">
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="white-title">
                  New client
            </div>
              </Modal.Title>
            </Modal.Header>
          </div>

          <Modal.Body>
            <div className="card-add-header">
              <input
                placeholder="Client name"
                type="text"
                noValidate
              />
            </div>
            <div className="card-add-header">
              <input
                placeholder="DIC"
                type="text"
                noValidate
              />
            </div>
            <div className="card-add-header">
              <input
                placeholder="IC"
                type="text"
                noValidate
              />
            </div>
            <div className="card-add-header">
              <input
                placeholder="MD rate"
                type="text"
                noValidate
              />
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button style={{ opacity: 0.9, width: 100 }} variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button style={{ opacity: 0.9, width: 100 }} variant="success" onClick={handleClose}>
              Add
          </Button>
          </Modal.Footer>
        </Modal>
      </div>

    </>
  );
}

class NewEntryComponent extends Component {
  render() {
    return (
      <div><NewEntry/></div>
    );
  }
}

export { NewEntryComponent };

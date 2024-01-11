import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className='shadow btn mb-5' style={{ width: '28rem' }}>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAA2F_8Wnf9R0jW22aHqSbqP_xDMCuO4x5Q&usqp=CAU" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>
      <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row>
        <Col md={6}>
          <img className='img-fluid' style={{ height: '250px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWAA2F_8Wnf9R0jW22aHqSbqP_xDMCuO4x5Q&usqp=CAU" alt="" />
        </Col>
        <Col md={6}>
          <h2 className='fw-bolder text-dark'>Project Title</h2>
          <p>Project Overview :
            <span className='fw-bolder' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laborum nobis animi suscipit pariatur dolores, iste veritatis
              quam, itaque, delectus expedita. Perspiciatis quas minus a dolor voluptatibus minima sunt excepturi.</span>
          </p>
          <p>Languages Used: <span className='fw-bolder text-danger'>HTML,JS,CSS</span></p>
        </Col>
      </Row>
      <div className='mt-5'>
        <a href="" target='_blank' className='btn me-3'><i style={{height:'40px'}} className='fa-brands fa-github fa-2x'></i></a>
        <a href="" target='_blank' className='btn me-3'><i style={{height:'40px'}} className='fa-solid fa-link fa-2x'></i></a>
      </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ProjectCard
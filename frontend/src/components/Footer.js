import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className='text-center py-3'>
              <p>Copyright &copy; TayeCommerce</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  )
}

export default Footer
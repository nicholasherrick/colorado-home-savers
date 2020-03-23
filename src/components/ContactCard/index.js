import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import './style.css';

const ContactCard = () => {
  return (
    <MDBCol className="col-4">
      <MDBCard className="contact-card" style={{ width: "22rem" }}>
        <MDBCardImage className="img-fluid" src={require("../../assets/img/jeff.jpg")} waves />
        <MDBCardBody>
          <MDBCardTitle>Jeffrey Raymond Herrick</MDBCardTitle>
          <MDBCardText>
            <h4>Real Estate Agent</h4>
            <hr/>
            <h5>Email</h5>
            <a href="mailto:jherrick@pobox.com">jherrick@pobox.com</a>
            <h5>Phone</h5>
            <a href="tel:7202912126">(720)-291-2126</a>
          </MDBCardText>
          <MDBBtn href="#">Contact</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
  )
}

export default ContactCard;
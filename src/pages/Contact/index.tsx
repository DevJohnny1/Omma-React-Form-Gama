import React from 'react';
import ContactForm from '../../components/ContactForm';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Contact: React.FC = () => {
  return (
      <Container>
          <Header />
          <ContactForm />
          <Footer />
      </Container>
  );
}

export default Contact;
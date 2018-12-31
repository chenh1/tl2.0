import React from 'react';
import Head from '../ui/components/head';
import Nav from '../ui/components/Nav';
import Footer from '../ui/components/Footer';
import TextLink from '../ui/components/TextLink';
import Paragraph from '../ui/components/Paragraph';
import Heading from '../ui/components/Heading';
import Section from '../ui/components/Section';

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />

    <Section>
      <Paragraph>I’m Tracy—UX &amp; UI designer with a deep empathy for people and a natural affinity for human behavior. Design is relational and more than how something looks. I’m committed to providing design solutions that connect to the heart of customers. </Paragraph>
      <Paragraph>See my resume <TextLink href="">here</TextLink></Paragraph>
      <Paragraph>For a glimpse into my path, read my story <TextLink href="">here</TextLink></Paragraph>
      <Paragraph>Peace be with you. ✌️</Paragraph>
    </Section>

    <Footer />
  </div>
)

export default Home

import React from 'react';
import Head from '../ui/components/head';
import Nav from '../ui/components/Nav';
import Footer from '../ui/components/Footer';
import Layout from '../ui/components/Layout';
import WorkModule from '../ui/components/WorkModule';

const Work = () => (
  <div>
    <Head 
      title="My Work"
      description="Tracy Lin: Digital Product Designer"
    />
    <Nav />

    <Layout>
        <WorkModule />
    </Layout>

    <Footer />
  </div>
)

export default Work

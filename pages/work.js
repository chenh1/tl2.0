import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import viewport from '../ui/spacing/viewport';
import fontFamily from '../ui/styles/fontFamily';
import fontSize from '../ui/spacing/fontSize';
import letterSpacing from '../ui/spacing/letterSpacing';
import colors from '../ui/styles/colors';
import spacing from '../ui/spacing/module';
import Head from '../ui/components/head';
import Nav from '../ui/components/Nav';
import Footer from '../ui/components/Footer';
import TextLink from '../ui/components/TextLink';
import Paragraph from '../ui/components/Paragraph';
import Heading from '../ui/components/Heading';
import Section from '../ui/components/Section';
import Layout from '../ui/components/Layout';
import WorkModule from '../ui/components/WorkModule';

const Work = () => (
  <div>
    <Head title="Work" />
    <Nav />

    <Layout>
        <WorkModule />
    </Layout>

    <Footer />
  </div>
)

export default Work

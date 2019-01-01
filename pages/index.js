import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import viewport from '../ui/spacing/viewport';
import Head from '../ui/components/head';
import Nav from '../ui/components/Nav';
import Footer from '../ui/components/Footer';
import TextLink from '../ui/components/TextLink';
import Paragraph from '../ui/components/Paragraph';
import Heading from '../ui/components/Heading';
import Section from '../ui/components/Section';
import Layout from '../ui/components/Layout';


const Home = compose(
  withStateHandlers(
    () => ({
      showStory: false
    }),
    {
      displayStory: () => (e) => {
        console.log(e.target)
        return { showStory: true }
      },
      hideStory: () => () => ({ showStory: false })
    }
  )
)(
  ({ showStory, displayStory, hideStory }) => (
    <React.Fragment>
      <div>
        <Head title="Home" />
        <Nav />

        <Layout>
          <Section>
            <Paragraph>I’m Tracy—UX &amp; UI designer with a deep empathy for people and a natural affinity for human behavior. Design is relational and more than how something looks. I’m committed to providing design solutions that connect to the heart of customers. </Paragraph>
            <Paragraph>See my resume <TextLink href="">here</TextLink></Paragraph>

            <div className={showStory ? 'link hidden' : 'link'}>
              <Paragraph>For a glimpse into my path, read my story <TextLink onClick={displayStory}>here</TextLink></Paragraph>
            </div>
          </Section>

          <div className={showStory ? 'story' : 'story hidden'}>
            <Section dark>
              <Heading two>WHAT'S IN A NAME?</Heading>
              <Paragraph sub>My name is Tracy Lin but growing up, family and close friends called me Mer. Mer is a hybrid animal, a bear-rabbit creature. As a species, Mer is elusive. As an individual, Mer is Tracy embodied, an alter ego of sorts. Mer&apos;s origin is unknown and remains a curious phenomenon.</Paragraph>
              <Paragraph sub>When I came across Merlin the wizard of Arthurian legend years later, it occurred to me: I’m Merlin. I had been Merlin all this time. I now understand that I was Mer in my childhood and youth because I didn&apos;t quite know how to be Tracy yet. Mer lent a perspective in which I could see and craft a new reality. Mer symbolized purity, playfulness, and authenticity—root characteristics of Merlin and Tracy.</Paragraph>
              
              <Heading two>FROM DESIGN TO DESIGN</Heading>

              <div onClick={hideStory} className="close-icon">
                <img src="/static/close.png"/>
              </div>
            </Section>
          </div>

          <Section>
            <Paragraph>Peace be with you. ✌️</Paragraph>
          </Section>
        </Layout>

        <Footer />
      </div>

      <style jsx>
        {`
          .close-icon {
            cursor: pointer;
            position: absolute;
            right: 16px;
          }
          .link {
            max-height: 100px;
          }
          .story {
            max-height: 500px;
            position: relative;
          }
          .story,
          .link {
            overflow: hidden;
            transition: max-height .5s;
          }
          .hidden {
            max-height: 0px;
          }
          @media (min-width: ${viewport.lg}) {
            .close-icon {
              right: 25px;
            }
          }
        `}
      </style>
    </React.Fragment>
  )
)

export default Home

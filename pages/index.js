import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import viewport from '../ui/spacing/viewport';
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
              <Paragraph sub>I grew up drawing Mer and everything around. And much to my mother’s exasperated sighs, I asked questions to no end. How did Santa manage to bring gifts before midnight? Why did Auntie leave in a hurry? What do you mean the man on the street doesn’t have a home? Nothing was too mundane for my curiosity.</Paragraph>
              <Paragraph sub>In college, I discovered design thinking. And as an art student, began applying user-centered ideology to my creative approach. Who is my audience? How does my work make them feel?</Paragraph>
              <Paragraph sub>I pivoted to graphic design and developed a curiosity to the end-user. I wanted to know who I was designing for and asked questions to build this understanding. When I later came across UX design, it dawned on me that this was what I had been looking for. This was the thing I had been practicing all along. </Paragraph>
              <Paragraph sub>As my work shifted into UX and UI design, I learned to balance business goals with customer needs. I’m committed to designing products and services with purpose. And I strive to provide design solutions that speak to the heart of customers. </Paragraph>
              <Paragraph sub>Wanna stir up some UX magic with Merlin? Together we can make a positive and lasting difference in the lives of people. <a href="mailto:traysheeshee@gmail.com?Subject=Hello%20Mer">Let’s chat.</a></Paragraph>

              <div onClick={hideStory} className="close-icon">
                <img src="/static/close.png"/>
              </div>
              <div className="close-bar">
                CLOSE
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
          a {
            color: ${colors.black};
          }
          .close-icon {
            cursor: pointer;
            position: absolute;
            right: 16px;
          }
          .close-icon img {
            max-width: 16px;
          }
          .link {
            max-height: 100px;
          }
          .story {
            background: ${colors.lightPink};
            max-height: 1300px;
            min-height: 100vh;
            position: absolute;
            top: 0;
            transform: translateY(-${spacing.xl4});
            z-index: 11;
          }
          .story,
          .link {
            overflow: hidden;
            transition: .5s;
          }
          
          .hidden.story {
            transform: translateY(100%);
          }
          @media (min-width: ${viewport.lg}) {
            a {
              text-decoration: none;
            }
            a:hover {
              border-bottom: 3px solid ${colors.dustyPink};
            }
            .close-icon {
              right: 25px;
            }
            .close-icon img {
              max-width: 25px;
            }
            .story {
              position: relative;
              transform: translateY(0);
            }
            .hidden {
              max-height: 0px;
              min-height: 0px;
            }
            .hidden.story {
              transform: translateY(0);
            }
          }
        `}
      </style>
    </React.Fragment>
  )
)

export default Home

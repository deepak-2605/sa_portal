import React from 'react';
import Card from './EventCard';
import Image from 'next/image';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

const Carousel = ({ props }) => {
  console.log(props[0]);

  const getWindowWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
    return 0;
  };

  const isMobile = getWindowWidth() <= 450;

  return (
    <>
      <Splide
        options={{
          fixedWidth: 600,
          perMove: 1,
          autoplay: true,
          gap: 25,
          lazyLoad: 'nearby',
          autowidth: true,
          autpheight: true,
          padding: {
            right: 10,
            left: 15,
          },
          isLoop: true,
        }}
      >
        {props.map((prop) => {
          return (
            <SplideSlide key={prop.id}>
              <Card
                image={'https://swc.iitg.ac.in/saPortal' + prop.Image.data[0].attributes.url}
                title={prop.Title}
                icon={'https://swc.iitg.ac.in/saPortal' + prop.Icon.data[0].attributes.url}
                description={prop.description}
                link={prop.Link}
              />
            </SplideSlide>
          );
        })}
      </Splide>
    </>
  );
};

export default Carousel;

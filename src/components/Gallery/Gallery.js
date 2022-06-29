import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./Gallery.module.scss";

function Gallery() {
  return (
    <section id="gallery" className={styles.gallery}>
      <Splide
        options={{
          type: "loop",
          drag: false,
          arrows: false,
          pagination: false,
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 2,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Gallery"
      >
        <SplideSlide>
          <img src="./images/img-1.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-2.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-3.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-4.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-5.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-6.png" alt="" />
        </SplideSlide>
      </Splide>

      <Splide
        options={{
          type: "loop",
          drag: false,
          arrows: false,
          pagination: false,
          direction: "rtl",
          perPage: 3,
          breakpoints: {
            640: {
              perPage: 2,
            },
          },
          autoScroll: {
            pauseOnHover: false,
            pauseOnFocus: false,
            rewind: false,
            speed: 2,
          },
        }}
        extensions={{ AutoScroll }}
        aria-label="Gallery"
      >
        <SplideSlide>
          <img src="./images/img-7.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-8.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-9.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-10.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-11.png" alt="" />
        </SplideSlide>
        <SplideSlide>
          <img src="./images/img-12.png" alt="" />
        </SplideSlide>
      </Splide>
    </section>
  );
}

export default Gallery;

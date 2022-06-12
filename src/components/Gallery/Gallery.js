import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
// import '@splidejs/react-splide/css';
import "@splidejs/splide/dist/css/splide.min.css";
import styles from "./Gallery.module.scss";

function Gallery() {
    return (
        <section id="gallery" className={styles.gallery}>
            <Splide
                options={{
                    type: "loop",
                    gap: "16px",
                    drag: false,
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    breakpoints: {
                        640: {
                            perPage: 2,
                        }
                  },
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 2
                    }
                }}
                extensions={{ AutoScroll }}
                aria-label="Gallery">
                <SplideSlide>
                    <img src="./images/img-1.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-2.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-3.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-4.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-5.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-6.jpg" alt="" />
                </SplideSlide>
            </Splide>

            <Splide
                options={{
                    type: "loop",
                    gap: "16px",
                    drag: false,
                    arrows: false,
                    pagination: false,
                    perPage: 3,
                    direction: 'rtl',
                    autoScroll: {
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        rewind: false,
                        speed: 2
                    }
                }}
                extensions={{ AutoScroll }}
                aria-label="Gallery">
                <SplideSlide>
                    <img src="./images/img-7.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-8.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-9.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-10.jpg" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-11.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                    <img src="./images/img-5.jpg" alt="" />
                </SplideSlide>
            </Splide>
        </section>
    )
}

export default Gallery
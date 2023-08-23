import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay} from 'swiper/modules';

export const Carousel_fade = ({dataToShow}) => {
    return (
        <>
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className=" h-full "
        >
            { dataToShow.map((item, index) => (
                <SwiperSlide key={index}>
                    <img src={item} alt="image" className=' w-full h-full object-cover object-center'/>
                </SwiperSlide>
            )) }
        </Swiper>
        </>
    );
    }

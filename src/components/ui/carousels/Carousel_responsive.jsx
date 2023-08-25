import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Card_product } from '../cards/Card_product';

export const Carousel_responsive = ({dataToShow}) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                pagination={{
                clickable: true,
                }}
                breakpoints={{
                640: {
                    slidesPerView: 2.2,
                },
                768: {
                    slidesPerView: 3.2,
                },
                1024: {
                    slidesPerView: 4.2,
                },
                }}
                modules={[Pagination]}
                className="pb-10"
            >
                
                {
                    dataToShow?.map(product => (
                        <SwiperSlide key={product.id}> 
                            <Card_product 
                                id={product.id}
                                imgURL={product.imgURL}
                                title={product.title} 
                                price={product.price}
                                stock={product.stock}
                            /> 
                        </SwiperSlide>
                    )) 
                }
                

            </Swiper>
        </>
    );
}

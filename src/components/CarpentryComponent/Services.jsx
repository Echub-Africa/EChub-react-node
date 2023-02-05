import React from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward'

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import rect1 from '../../assets/Rectangle 12.png';
import rect2 from '../../assets/Rectangle 9.png';
import rect3 from '../../assets/Rectangle 8.png';

const Services = () => {
    return (
        <div className="carpentry-services">
            <div className="container">
                <div className="service-header">
                    <h1>Our other Services</h1>
                </div>
                <div className="service-wrapper">
                    <Swiper                        
                        slidesPerView={3}
                        className="service-slider"
                    >
                        <SwiperSlide>
                            <div className="service-item">
                                <div className="service-item-header h1-1">
                                    <h3>Electrical Maintenance</h3>
                                </div>
                                <div className="service-img">
                                    <img src={rect1} alt="" />
                                </div>
                                <div className="service-btn">
                                    <button className="btn-main">
                                        Explore
                                        <ArrowForward />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-item">
                                <div className="service-item-header h1-2">
                                    <h3>Electronics & Gadgets</h3>
                                </div>
                                <div className="service-img">
                                    <img src={rect2} alt="" />
                                </div>
                                <div className="service-btn">
                                    <button className="btn-2">
                                        Explore
                                        <ArrowForward />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="service-item">
                                <div className="service-item-header h1-3">
                                    <h3>Plumbing</h3>
                                </div>
                                <div className="service-img">
                                    <img src={rect3} alt="" />
                                </div>
                                <div className="service-btn">
                                    <button className="btn-3">
                                        Explore
                                        <ArrowForward />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* <div className="service-item">
                        <div className="service-item-header h1-2">
                            <h3>Electronics & Gadgets</h3>
                        </div>
                        <div className="service-img">
                            <img src={rect2} alt="" />
                        </div>
                        <div className="service-btn">
                            <button className="btn-2">
                                Explore
                                <ArrowForward />
                            </button>
                        </div>
                    </div>
                    <div className="service-item">
                        <div className="service-item-header h1-3">
                            <h3>Plumbing</h3>
                        </div>
                        <div className="service-img">
                            <img src={rect3} alt="" />
                        </div>
                        <div className="service-btn">
                            <button className="btn-3">
                                Explore
                                <ArrowForward />
                            </button>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Services;
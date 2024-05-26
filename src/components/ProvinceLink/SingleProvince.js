import './SingleProvince.css'
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'




function SingleProvince(props) {

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = 5; // Tổng số lượng slide
    
    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 5000); 
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="pages">
                <section className="firstSection ops-page">

            <div className="slideshowSection">
                <div className="slideshowImg">
                    <img className="mySlides" 
                        src={props.slideshowImg1} 
                        alt='' 
                        style={{ display: currentSlide === 0 ? 'block' : 'none' }} />
                    <img className="mySlides" 
                        src={props.slideshowImg2} 
                        alt='' 
                        style={{ display: currentSlide === 1 ? 'block' : 'none' }} />
                    <img className="mySlides" 
                        src={props.slideshowImg3} 
                        alt='' 
                        style={{ display: currentSlide === 2 ? 'block' : 'none' }} />
                    <img className="mySlides" 
                        src={props.slideshowImg4} 
                        alt='' 
                        style={{ display: currentSlide === 3 ? 'block' : 'none' }} />
                    <img className="mySlides" 
                        src={props.slideshowImg5} 
                        alt='' 
                        style={{ display: currentSlide === 4 ? 'block' : 'none' }} />
                </div>
                <div className="slideshowContent">
                    <h1 className="mainTitle">{props.provinceName}</h1>
                </div>
            </div>
        
                
                </section>
                <section>
                    <div className="popularitySection col" data-aos="fade-up">
        
                        <div className="grid wide popularitySectionContain">
                            <div className="row popularitySectionContent">
                                <div className="popularitySectionImg l-6 m-12 c-12 col">
                                    <img src={props.map} alt="" className="mapProvince"/>
                                </div>
        
                                <div className="popularitySectionText l-6 m-12 c-12 col">
                                    <h1 className="mainPopularitySectionText">ĐẶC ĐIỂM</h1>
                                    <p className="section-title-province"><redColor className="strong">Giới thiệu: </redColor>{props.introduction}</p>
                                    <p className="section-title-province"><redColor className="strong">Dân số: </redColor>{props.popularity}</p>
                                    <p className="section-title-province"><redColor className="strong">Vị trí: </redColor>{props.location}</p>
        
                                </div>
        
                                
                                
                                
                                
                                
                            </div>
                            
                            
                        </div>
                        
                        
                    </div>
                </section>
        
                <section className="specialSection">
                    <div className="popularitySectionText l-0 m-12 c-12 col" data-aos="fade-up">
                        <h1 className="strongTitle">Nhìn ngắm {props.provinceName} 360 độ</h1>
                        <iframe src={props.view} width="100%" height="500" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        
                    <div className="popularitySectionText l-12 m-0 c-0 grid wide "data-aos="fade-up">
        
                        <h1 className="strongTitle">Nhìn ngắm {props.provinceName} 360 độ</h1>
        
                        <iframe src={props.view} width="100%" height="500" style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        
                </section>
        
                <section>
                    <div className="popularitySection popularitySectionSpecial col " data-aos="fade-up"> 
                        <div className="grid wide popularitySectionContain">
                            <div className="row popularitySectionContent">
                                <div className="popularitySectionText l-6 m-12 c-12 col">
                                    <h1 className="mainPopularitySectionText">VĂN HÓA/ LỊCH SỬ</h1>
                                    <p className="section-title-province"><redColor className="strong">Ẩm thực: </redColor>{props.cuisine}</p>
                                    <p className="section-title-province"><redColor className="strong">Công trình, kiến trúc: </redColor>{props.building}</p>
                                    <p className="section-title-province"><redColor className="strong">Văn hóa: </redColor>{props.culture}</p>
                                </div>
                                <div className="popularitySectionImg l-6 m-12 c-12 col">
                                    <img src={props.map2} alt="" className="mapProvince"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="popularitySection col" data-aos="fade-up">
                        <div className="grid wide popularitySectionContain ">
                            <h1 className="strongTitle" data-aos="fade-up">See More</h1>
                            <div className="row popularitySectionContent flashcard">
                                <Link to={props.DLTCLink} id="DanhLamThangCanh">
                                    <div className="popularitySectionImg ">
                                            <div className="nft">
                                                <div className='main'>
                                                    <img className='tokenImage' src="./Img/dltc.jpg" alt="NFT" />
                                                    <h2  className="center">Danh lam 
                                                        thắng cảnh</h2>
                                                    <p className='descriptionFlashcard'>
                                                        Việt Nam là một quốc gia đầy sức hút với danh lam thắng cảnh đa dạng và phong phú. Từ những bãi biển tuyệt đẹp ở miền Trung đến những ngọn núi hùng vĩ ở miền Bắc, cùng với những di sản văn hóa lịch sử đặc biệt tạo nên vẻ đẹp độc đáo
            
                                                    </p>
                                                </div>
                                            </div>
                                    </div>
                                </Link>
                                <Link to={props.DTLSLink} id="DiTichLichSu">
                                    <div className="popularitySectionImg ">
                                        <div className="nft">
                                            <div className='main'>
                                                <img className='tokenImage' src="./Img/chien-thang.jpg" alt="NFT" />
                                                <h2 className="center">Di tích lịch sử</h2>
                                                <p className='descriptionFlashcard'>
                                                    Lịch sử Việt Nam là một chặng đường đầy biến động, từ thời kỳ các vương quốc thống nhất đến những cuộc chiến tranh chống lại các thế lực xâm lược. Nhưng qua mỗi thách thức, dân tộc Việt Nam luôn thể hiện tinh thần kiên cường và lòng yêu nước
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <h1 className="strongTitle" data-aos="fade-up">Gallery</h1>
        
                    <div className="gallery-container col">
                        <div className="gallery-item"data-index="1">
                            <img src={props.provinceImg1} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="2">
                            <img src={props.provinceImg2} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="3">
                            <img src={props.provinceImg3} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="4">
                            <img src={props.provinceImg4} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="5">
                            <img src={props.provinceImg5} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="6">
                            <img src={props.provinceImg6} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="7">
                            <img src={props.provinceImg7} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="8">
                            <img src={props.provinceImg8} alt=''/>
                        </div>
                        <div className="gallery-item" data-index="9">
                            <img src={props.provinceImg9} alt=''/>
                        </div>
                    </div>
                </section>
            </div>

        </>
    );
}

export default SingleProvince;
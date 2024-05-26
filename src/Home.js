import Header from "../Header/Header";
import "./Home.css";
import "../Header/HeaderSpecial.css"
import Slideshow from "./Slideshow";


const images = [
    './Img/background1.jpg',
    './Img/background2.jpg',
    './Img/background3.jpg',
    './Img/background4.jpg',
    './Img/background5.jpg',
    './Img/background6.jpg',
    './Img/background7.jpg',
    './Img/background8.jpg',
    './Img/background9.jpg',
    './Img/background10.jpg',

];

function Home(){
    return(
        <>
            <Header />

            <main className="hero-section" id="hero-section">
            
                <div className="hero-section-content" data-aos="fade-up">
                    <h1 className="hero-section-title">Khám phá vẻ đẹp <strong>Việt Nam</strong> theo cách độc đáo</h1>
                    <p className="hero-section-sub-heading">Với hơn <strong className="text-highlight">100 thẻ flashcards</strong> tích hợp <strong className="text-highlight">website và app</strong> giúp bạn khám phá vẻ đẹp Việt Nam ngay tại nhà đồng thời là bài giảng <strong className="text-highlight">E-learning</strong> bộ môn Lịch Sử và GDĐP</p>
                </div>

                <img src="./Img/down arrow.jpeg" className="scroll-down-icon" alt="scroll down indicator"/>
                
            </main>


            <div className="background">
                <Slideshow images={images} />
            </div>

            
            <div className="background">
            
            
            </div>

            <section className="explore-section" id="explore-section">



                <h1 className="section-title colorYellow" data-aos="fade-up">
                    Nhìn ngắm nét đặc trưng về văn hóa kiến trúc của đất nước <redColor>Việt Nam <img src="./Img/vietnam.png" alt="" className="vietnamImg"/></redColor>
                </h1>
                <p className="section-para" data-aos="fade-up">Trải dài 63 tỉnh thành từ Bắc đến Nam, Việt Nam ta bao phủ bởi nhiều di tích lịch sử quốc gia cùng những bức tranh danh lam thắng cảnh tuyệt vời, làm nổi bật văn hóa độc đáo cùng vẻ đẹp thiên nhiên của Việt Nam giữa lòng Đông Nam Á.</p>
            
            
                <div className="tours-container">
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/hanoi.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">Hà Nội</h3>
                        </div>
                    </div>
            
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/tphcm.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">TP. Hồ Chí Minh</h3> 
                        </div>
                    </div>
            
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/hue.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">TP. Huế</h3>
                        </div>
                    </div>
            
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/dalat.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">TP. Đà lạt</h3>
                        </div>
                    </div>
            
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/haiphong.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">TP. Hải Phòng</h3>
                        </div>
                    </div>
            
                    <div className="tour-card" data-aos="fade-up">
                        <img src="./Img/danang.jpeg" className="tour-img" alt="tour-image"/>
                        <div className="tour-body">
                            <h3 className="tour-name">TP. Đà Nẵng</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-section" id="services">
                
                <h1 className="section-title colorYellow" data-aos="fade-up">Tại sao là web, app và flashcards <redColor>Du lịch</redColor> ?</h1>
                <p className="section-para" data-aos="fade-up">Dự án STEM giúp người dùng có thể hiểu rõ thêm về văn hóa, lịch sử Việt Nam, nâng cao lòng tự tôn dân tộc cùng những tính năng đặc biệt</p>
            
                <div className="serives-grid">
                    <div className="service-card" data-aos="fade-up">
                        <img src="./Img/421104201_762321142617009_1189638150950876417_n.png" className="serviceCardImg"></img>
                        <p className="icon">😍</p>
                        <p className="service-text">Có thể truy cập mọi lúc mỗi nơi, luôn sẵn sàng cung cấp kiến thức cho người dùng kể cả khi không có kết nối mạng !</p>
                    </div>
                    <div className="service-card" data-aos="fade-up">
                        <img src="./Img/421104201_762321142617009_1189638150950876417_n.png" className="serviceCardImg"></img>
                        <p className="icon">🤖</p>
                        <p className="service-text">Những tính năng mới như flashcards, bài giảng E-learning cùng chatBotAI giúp hỗ trợ ghi nhớ kiến thức nhanh chóng</p>
                    </div>
                    <div className="service-card" data-aos="fade-up">
                        <img src="./Img/421104201_762321142617009_1189638150950876417_n.png" className="serviceCardImg"></img>
                        <p className="icon">🐉</p>
                        <p className="service-text">Với hơn 100 thẻ flashcards cùng 300 câu hỏi về Địa Lý + Lịch Sử, có cái nhìn khái quát về văn hóa, lịch sử Việt Nam</p>
                    </div>

                </div>

            </section>
            
            <section className="book-section" id="booknow">
                <img src="./Img/qommmgko.png" alt="" className="bg-circle"/>
                <div className="book-content" data-aos="fade-up">
                    <h1 className="book-now-title">Demo thẻ <colorYellow>Flashcards</colorYellow></h1>
                    <p className="book-now-text">Flashcards là phương pháp giảng dạy, học tập độc đáo được áp dụng khá phổ biến tại các nước phát triển.</p>

                    <a href="https://www.canva.com/design/DAF6_zwTDmc/ZzOjbkDt5KwzLh-hQL7bkA/edit?utm_content=DAF6_zwTDmc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" className="book-now">Xem thử ngay</a>
                </div>
                <img src="./Img/book.jpeg" data-aos="fade-up" className="book-now-img" alt=""/>
            </section>

            <footer className="footer">
                <img src="./Img/logo.png" className="footer-logo" alt=""/>
                <div className="footer-text">
                    <p>🐻‍❄️ Đi khắp Việt Nam, chỉ tại nhà</p>
                    <p>💌 Email - stemproject@gmail.com</p>
                    <p>🏐 Phone - 99 88 776655, 99 88 776644</p>
                </div>
            </footer>

        </>

    
    )
}

export default Home;
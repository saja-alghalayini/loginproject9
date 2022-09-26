import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
function Home() {
  return (
    <>
      <div className='container'>
        <div className='row'>
          <Navbar />
        </div>
        <div className='row'>
          {/* Carousel Start */}
          <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="w-100" src="img/carousel-1.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 800 }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                        Creative Interior Design
                      </h4>
                      <h3 className="display-3 text-white mb-md-4">
                        Make Your Home Better
                      </h3>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="w-100" src="img/carousel-2.jpg" alt="Image" />
                  <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                    <div className="p-3" style={{ maxWidth: 800 }}>
                      <h4 className="text-primary text-uppercase font-weight-normal mb-md-3">
                        Creative Interior Design
                      </h4>
                      <h3 className="display-3 text-white mb-md-4">
                        Stay At Home In Peace
                      </h3>
                      <a
                        href=""
                        className="btn btn-primary py-md-3 px-md-5 mt-2 mt-md-4"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#header-carousel"
                data-slide="prev"
              >
                <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-prev-icon mb-n2" />
                </div>
              </a>
              <a
                className="carousel-control-next"
                href="#header-carousel"
                data-slide="next"
              >
                <div className="btn btn-primary" style={{ width: 45, height: 45 }}>
                  <span className="carousel-control-next-icon mb-n2" />
                </div>
              </a>
            </div>
          </div>
          {/* Carousel End */}
        </div>
        <div className='row'>
          <Footer />
        </div>
      </div>
    </>
  )
}
export default Home;
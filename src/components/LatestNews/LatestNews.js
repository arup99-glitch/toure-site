import React from 'react';
import './LatestNews.css'


const LatestNews = () => {
    return (
        <div>
            <section className="section gray-bg" id="blog">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 text-center">
                        <div className="section-title">
                            <h2>Latest News</h2>
                            <p>Looking for the perfect winter getaway? These are the best vacation ideas—from a California town for families to an affordable.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                
                                    
                                
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">How to Spend Your Winter Vacation</a></h5>
                                <p>Pick up those hobbies you’ve been putting off.  Sewing, gardening, roller derby skating, whatever.  The world is your oyster! </p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                <a href="#">
                                
                                </a>
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">How to Spend Your Winter Vacation</a></h5>
                                <p>Whether you want to ski or get in the holiday spirit, Lucerne, Switzerland, has you covered(made with local cocoa, spices and milk) .</p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="blog-grid">
                            <div className="blog-img">
                                <div className="date">04 FEB</div>
                                
                                
                                
                            </div>
                            <div className="blog-info">
                                <h5><a href="#">How to Spend Your Winter Vacation</a></h5>
                                <p>St. Lucia's superb winter weather (think: highs in the 80s and mostly clear skies) beckons to travelers set on escaping snow and freezing temps</p>
                                <div className="btn-bar">
                                    <a href="#" className="px-btn-arrow">
                                        <span>Read More</span>
                                        <i className="arrow"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default LatestNews;
import React from 'react';
import '../style/newscomponent.css';

const NewsEventSection = () => {
    return (
        <section className="newsevent fullwidth" style={{ padding: '70px 0px' }}>
            <div className="app__bg">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="one">
                            <h3>News & Event</h3>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <div className="alert alert-light bd-callout bd-callout-info" role="alert">
                                <a href="news/jee-main-2024-result.aspx">
                                    <blockquote className="blockquote">
                                        <p className="mb-0">"RESONites Prove Their Mettle in JEE (Main) 2024"</p>
                                    </blockquote>
                                </a>
                            </div>
                            {/* Add other news items here */}
                        </div>
                        <div className="col-12 col-sm-6">
                            {/* Add more news items here */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-right">
                            <a href="form/resonance-news-events.aspx" className="btn btn-outline-dark btn-sm">More</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsEventSection;



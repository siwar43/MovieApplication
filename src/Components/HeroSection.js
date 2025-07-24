import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className="container-fluid p-0 position-relative">
            <div className="position-relative overflow-hidden" style={{ height: '650px' }}>
                <video autoPlay muted loop className="w-100" style={{ height: '650px', objectFit: 'cover', filter: 'brightness(0.5)' }} aria-label="Background trailer of Butterfly">
                    <source src="/Trailer.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="position-absolute text-white p-4 hero-overlay" style={{top: '10%',left: '5%',maxWidth: '600px', background: 'rgba(0, 0, 0, 0.7)', borderRadius: '15px',boxShadow: '0 0 20px rgba(229, 9, 20, 0.6)'}}>
                <h1 className="display-5 fw-bold text-white">Butterfly</h1>
                <p className="fw-bold mb-3" style={{ fontSize: '1.2rem', color: '#E50914' }}>   
                    #3 Trending in Tunisia
                </p>

                <div className="mb-3">
                    <a href="https://shahid.mbc.net/ar/series/%D8%AD%D9%84%D9%85-%D8%A3%D8%B4%D8%B1%D9%81/series-49923248980146" target="_blank" rel="noopener noreferrer" className="btn btn-warning fw-bold me-2 shadow" style={{ backgroundColor: '#E50914', borderColor: '#E50914' }}>
                        ▶ Watch Now
                    </a>
                    <button
                        className="btn btn-outline-light fw-bold shadow"
                        style={{
                            borderColor: '#E50914',
                            color: '#E50914',
                            transition: 'all 0.3s',
                        }}
                        onMouseEnter={e => {
                            e.target.style.backgroundColor = '#E50914';
                            e.target.style.color = '#121212';
                        }}
                        onMouseLeave={e => {
                            e.target.style.backgroundColor = 'transparent';
                            e.target.style.color = '#E50914';
                        }}>
                        ＋ Add to Watchlist
                    </button>
                </div>
                <p style={{ lineHeight: '1.5', fontSize: '1rem' }}>
                    After faking his death, a former CIA agent is forced out of hiding when a new mission threatens the fragile peace he built.
                    Torn between his past and present, he enters a deadly game of secrets, identity, and survival.
                </p>
                <p style={{ fontStyle: 'italic', color: '#f4edeeff' }}>
                Thriller d’espionnage | Action | Drame
                </p>
            </div>
        </div>
    );
}

export default HeroSection;

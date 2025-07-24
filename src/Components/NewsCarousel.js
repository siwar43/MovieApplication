import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';
import NewsCard from './NewsCard';
import './NewsCarousel.css';

function NewsCarousel({ newsList }) {
    const scrollRef = useRef(null);
    const scrollAmount = 520;

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        if (direction === 'left') {
        scrollRef.current.scrollLeft -= scrollAmount;
        } else {
        scrollRef.current.scrollLeft += scrollAmount;
        }
    };

    return (
        <div className="news-carousel-wrapper py-5 px-3">
        <h2 className="carousel-title mb-4">Trending News</h2>

        <div className="news-carousel-container position-relative">
            <Button
            variant="light"
            className="scroll-button left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            >
            <ChevronLeft size={30} />
            </Button>

            <div className="news-scroll-wrapper" ref={scrollRef}>
            {newsList.map((news, index) => (
                <NewsCard key={index} news={news} />
            ))}
            </div>

            <Button
            variant="light"
            className="scroll-button right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            >
            <ChevronRight size={30} />
            </Button>
        </div>
        </div>
    );
}

export default NewsCarousel;

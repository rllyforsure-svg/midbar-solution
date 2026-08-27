'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'SEE BEYOND,\nMIDBAR SOLUTION',
      desc: '(주)미드바르 솔루션은 스마트 냉동공조 제어 시스템과 해양 자율운항 수상드론 기술을 융합하여 혁신적인 미래 산업 생태계를 선도합니다.',
      badge: 'NEXT MOBILITY & CLIMATE TECH',
      bgGrad: 'linear-gradient(135deg, #0c1a30 0%, #050b15 100%)',
      techLink: '/tech',
      productLink: '/products'
    },
    {
      title: '스마트 냉동공조',
      desc: '정밀 온도 제어와 AI 기반 에너지 효율화로 산업 설비 및 콜드체인 환경을 최적화합니다.',
      badge: 'HVAC & REFRIGERATION',
      bgGrad: 'radial-gradient(circle at 60% 40%, #102648 0%, #07101e 100%)',
      techLink: '/tech',
      productLink: '/products'
    },
    {
      title: '해양 자율운항 수상드론',
      desc: 'AI 비전과 고정밀 GPS 자율 항법으로 스마트 항만 순찰 및 해양 환경을 실시간 모니터링합니다.',
      badge: 'SURFACE DRONE MOBILITY',
      bgGrad: 'radial-gradient(circle at 40% 60%, #0d213e 0%, #060f1c 100%)',
      techLink: '/tech',
      productLink: '/products'
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="hero-carousel-container">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`carousel-slide ${idx === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: slide.bgGrad }}
        >
          <div className="slide-overlay"></div>
          <div className="container slide-content-wrapper">
            <span className="slide-tagline-badge">{slide.badge}</span>
            <h1 className="slide-title" style={{ whiteSpace: 'pre-line' }}>{slide.title}</h1>
            <p className="slide-desc">{slide.desc}</p>
            <div className="slide-actions">
              <Link href={slide.techLink} className="btn-carousel-cta">
                핵심기술
              </Link>
              <Link href={slide.productLink} className="btn-carousel-cta outline">
                제품소개
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Nav Buttons */}
      <button className="carousel-nav-btn prev" onClick={prevSlide} aria-label="이전 슬라이드">&laquo;</button>
      <button className="carousel-nav-btn next" onClick={nextSlide} aria-label="다음 슬라이드">&raquo;</button>

      {/* Indicator Dots */}
      <div className="carousel-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`carousel-dot ${idx === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`슬라이드 ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

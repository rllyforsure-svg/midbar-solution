'use client';

import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const scrollToMap = (e) => {
    e.preventDefault();
    const mapEl = document.getElementById('global-network');
    if (mapEl) {
      mapEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background-effects">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>

      <div className="container hero-container">
        {/* Top Tagline & Main Title */}
        <div className="hero-content-center">
          <div className="hero-badge">
            <span className="badge-pulse-dot"></span>
            <span>NEXT GENERATION MOBILITY & CLIMATE TECH</span>
          </div>

          <h1 className="hero-main-title">
            스마트 <span className="highlight-blue">냉동공조</span>와<br />
            자율운항 <span className="highlight-blue">수상드론</span>의 혁신
          </h1>

          <p className="hero-description">
            (주)미드바르 솔루션은 첨단 에너지 최적화 냉동공조 시스템과 해양 자율운항 수상드론 기술을 융합하여<br />
            산업 현장의 효율을 극대화하고 미래 해양 모빌리티의 새로운 표준을 제시합니다.
          </p>

          <div className="hero-cta-group">
            <Link href="/tech" className="btn-primary">
              핵심기술 보기
            </Link>
            <Link href="/products" className="btn-outline">
              제품소개 보기
            </Link>
            <button onClick={scrollToMap} className="btn-text-link">
              글로벌 거점 확인 ↓
            </button>
          </div>
        </div>

        {/* 2 Core Business Showcase Cards (냉동공조 + 수상드론) */}
        <div className="hero-cards-grid">
          {/* Card 1: 스마트 냉동공조 */}
          <div className="hero-biz-card card-hvac">
            <div className="card-top-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="biz-icon">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span className="card-badge">HVAC & REFRIGERATION</span>
            </div>
            <h3 className="card-title">스마트 냉동공조 솔루션</h3>
            <p className="card-summary">
              정밀 온도 제어와 AI 기반 에너지 효율화로 산업 설비 및 콜드체인 환경을 최적화합니다.
            </p>
            <ul className="card-feature-list">
              <li>
                <span className="dot"></span>
                <span>산업용 냉동 플랜트 맞춤형 설계 & 시공</span>
              </li>
              <li>
                <span className="dot"></span>
                <span>실시간 원격 온도·압력 이상 감지 시스템</span>
              </li>
              <li>
                <span className="dot"></span>
                <span>에너지 절감 인버터 및 지능형 제어반</span>
              </li>
            </ul>
            <div className="card-img-placeholder">
              <div className="placeholder-inner">
                <span className="placeholder-tag">[냉동공조 시스템 이미지 영역]</span>
              </div>
            </div>
          </div>

          {/* Card 2: 자율운항 수상드론 */}
          <div className="hero-biz-card card-drone">
            <div className="card-top-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="biz-icon">
                <circle cx="12" cy="12" r="10" />
                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
              </svg>
              <span className="card-badge">SURFACE DRONE MOBILITY</span>
            </div>
            <h3 className="card-title">해양 자율운항 수상드론</h3>
            <p className="card-summary">
              AI 비전과 고정밀 GPS 자율 항법으로 스마트 항만 순찰 및 해양 환경을 실시간 모니터링합니다.
            </p>
            <ul className="card-feature-list">
              <li>
                <span className="dot"></span>
                <span>다목적 해양 환경 센싱 및 수질 데이터 수집</span>
              </li>
              <li>
                <span className="dot"></span>
                <span>실시간 영상 관제 & 장애물 자동 회피 알고리즘</span>
              </li>
              <li>
                <span className="dot"></span>
                <span>스마트 항만 및 연안 경비 무인 자율 순찰</span>
              </li>
            </ul>
            <div className="card-img-placeholder">
              <div className="placeholder-inner">
                <span className="placeholder-tag">[수상드론 모빌리티 이미지 영역]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="hero-scroll-indicator" onClick={scrollToMap}>
          <span className="scroll-text">SCROLL TO GLOBAL NETWORK</span>
          <div className="scroll-mouse-icon">
            <div className="mouse-wheel"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

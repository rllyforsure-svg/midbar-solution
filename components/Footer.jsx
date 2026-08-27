'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        <div className="footer-grid">
          {/* Col 1: LOGO */}
          <div className="footer-col footer-logo-col">
            <div className="footer-logo-box">
              <span className="footer-logo-title">LOGO</span>
              <span className="footer-logo-subtitle">MIDBAR SOLUTION</span>
            </div>
          </div>

          {/* Col 2: SLOGAN */}
          <div className="footer-col footer-slogan-col">
            <h3 className="footer-col-title">SLOGAN</h3>
            <p className="footer-slogan-text">
              회사 한줄소개
            </p>
            <p className="footer-slogan-desc">
              첨단 스마트 냉동공조 제어 인프라와 친환경 해양 자율운항 수상드론 기술의 융합으로 
              지속 가능한 미래 산업 가치를 창출합니다.
            </p>
          </div>

          {/* Col 3: CONTACT */}
          <div className="footer-col footer-contact-col">
            <h3 className="footer-col-title">CONTACT</h3>
            <div className="footer-contact-list">
              <p><span>T</span> 051-123-1234</p>
              <p><span>F</span> 051-123-1234</p>
              <p><span>E</span> 123@midbarsolution.com</p>
              <p className="address-line"><span>A</span> 부산 강서구 명지</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; 2026 (주) 미드바르 솔루션 All Rights Reserved.
          </p>

          <button onClick={scrollToTop} className="footer-scroll-top-btn" aria-label="맨 위로 이동">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-arrow-icon">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

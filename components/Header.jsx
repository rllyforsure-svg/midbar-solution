'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isSubpage = pathname !== '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('KR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleAccordion = (name) => {
    setActiveAccordion(activeAccordion === name ? null : name);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    closeSidebar();
    setIsLangOpen(false);
  }, [pathname]);

  // Active Category Detection for each category path
  const isAboutActive = pathname === '/about' || pathname.startsWith('/about/');
  const isSolutionActive = pathname === '/products' || pathname.startsWith('/products/') || pathname === '/solution' || pathname.startsWith('/solution/');
  const isCapabilityActive = pathname === '/tech' || pathname.startsWith('/tech/') || pathname === '/capability' || pathname.startsWith('/capability/');
  const isCareersActive = pathname === '/careers' || pathname.startsWith('/careers/');
  const isContactActive = pathname === '/support' || pathname.startsWith('/support/') || pathname === '/contact' || pathname.startsWith('/contact/');

  return (
    <>
      <header className={`main-header ${isSubpage ? 'subpage-header' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Logo Area */}
          <div className="logo-area">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/images/logo.svg"
                alt="MIDBAR SOLUTION"
                className="header-logo-img"
              />
            </Link>
          </div>

          {/* Center: Navigation Menu */}
          <nav className="nav-menu">
            <Link
              href="/about"
              className={`nav-link ${isAboutActive ? 'active' : ''}`}
            >
              ABOUT
            </Link>
            <Link
              href="/products"
              className={`nav-link ${isSolutionActive ? 'active' : ''}`}
            >
              SOLUTION
            </Link>
            <Link
              href="/tech"
              className={`nav-link ${isCapabilityActive ? 'active' : ''}`}
            >
              CAPABILITY
            </Link>
            <Link
              href="/careers"
              className={`nav-link ${isCareersActive ? 'active' : ''}`}
            >
              CAREERS
            </Link>
            <Link
              href="/support"
              className={`nav-link ${isContactActive ? 'active' : ''}`}
            >
              CONTACT
            </Link>
          </nav>

          {/* Right Area: Language Selector & Hamburger */}
          <div className="header-right-area">
            <div className="lang-selector-container">
              <span className="lang-divider">|</span>
              <button
                className="lang-selector-btn"
                onClick={() => setIsLangOpen(!isLangOpen)}
                aria-label="언어 선택"
                type="button"
              >
                <span className="lang-text">{lang}</span>
                <svg
                  className={`lang-chevron-icon ${isLangOpen ? 'open' : ''}`}
                  viewBox="0 0 10 6"
                  width="10"
                  height="6"
                  fill="currentColor"
                >
                  <path d="M0 0.5L5 5.5L10 0.5H0Z" />
                </svg>
              </button>

              {isLangOpen && (
                <div className="lang-dropdown-menu">
                  <button
                    type="button"
                    className={`lang-dropdown-item ${lang === 'KR' ? 'active' : ''}`}
                    onClick={() => {
                      setLang('KR');
                      setIsLangOpen(false);
                    }}
                  >
                    KR (한국어)
                  </button>
                  <button
                    type="button"
                    className={`lang-dropdown-item ${lang === 'EN' ? 'active' : ''}`}
                    onClick={() => {
                      setLang('EN');
                      setIsLangOpen(false);
                    }}
                  >
                    EN (English)
                  </button>
                </div>
              )}
            </div>

            <button
              className={`header-hamburger-btn ${isSidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
              aria-label="Menu"
              type="button"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Global Sidebar Overlay */}
      <div className={`global-sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar} />

      {/* Global Sidebar Drawer */}
      <aside className={`global-sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <Link href="/" onClick={closeSidebar} style={{ textDecoration: 'none' }}>
            <img
              src="/images/logo.svg"
              alt="MIDBAR SOLUTION"
              style={{ height: '36px', width: 'auto', display: 'block' }}
            />
          </Link>
          <button className="sidebar-close-btn" onClick={closeSidebar} aria-label="Close menu">
            <span className="close-line"></span>
            <span className="close-line"></span>
          </button>
        </div>

        <nav className="sidebar-nav">
          {/* ABOUT */}
          <div className="sidebar-nav-item">
            <Link href="/about" className={`sidebar-nav-link ${isAboutActive ? 'active' : ''}`} onClick={closeSidebar}>
              <span>ABOUT</span>
              <span className="sidebar-nav-kr-sub">회사소개</span>
            </Link>
          </div>

          {/* SOLUTION (Accordion) */}
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'solution' || isSolutionActive ? 'open' : ''}`}>
            <button className={`sidebar-accordion-trigger ${isSolutionActive ? 'active' : ''}`} onClick={() => toggleAccordion('solution')}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span>SOLUTION</span>
                <span className="sidebar-nav-kr-sub">솔루션</span>
              </div>
              <span className="accordion-chevron"></span>
            </button>
            <div className="sidebar-accordion-content">
              <Link href="/products/hvac" className="sidebar-sub-link" onClick={closeSidebar}>냉동공조 (클린룸/항온항습기)</Link>
              <Link href="/products/drone" className="sidebar-sub-link" onClick={closeSidebar}>해양 수상드론 제품군</Link>
            </div>
          </div>

          {/* CAPABILITY (Accordion) */}
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'capability' || isCapabilityActive ? 'open' : ''}`}>
            <button className={`sidebar-accordion-trigger ${isCapabilityActive ? 'active' : ''}`} onClick={() => toggleAccordion('capability')}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span>CAPABILITY</span>
                <span className="sidebar-nav-kr-sub">핵심역량</span>
              </div>
              <span className="accordion-chevron"></span>
            </button>
            <div className="sidebar-accordion-content">
              <Link href="/tech/hvac" className="sidebar-sub-link" onClick={closeSidebar}>스마트 냉동공조 기술</Link>
              <Link href="/tech/drone" className="sidebar-sub-link" onClick={closeSidebar}>해양 자율운항 수상드론</Link>
              <Link href="/tech/ai" className="sidebar-sub-link" onClick={closeSidebar}>AI 융합 지능형 관제</Link>
            </div>
          </div>

          {/* CAREERS */}
          <div className="sidebar-nav-item">
            <Link href="/careers" className={`sidebar-nav-link ${isCareersActive ? 'active' : ''}`} onClick={closeSidebar}>
              <span>CAREERS</span>
              <span className="sidebar-nav-kr-sub">인재채용</span>
            </Link>
          </div>

          {/* CONTACT */}
          <div className="sidebar-nav-item">
            <Link href="/support" className={`sidebar-nav-link ${isContactActive ? 'active' : ''}`} onClick={closeSidebar}>
              <span>CONTACT</span>
              <span className="sidebar-nav-kr-sub">고객지원</span>
            </Link>
          </div>
        </nav>

        {/* Sidebar Language Selection */}
        <div className="sidebar-lang-area">
          <span className="sidebar-lang-label">Language :</span>
          <div className="sidebar-lang-buttons">
            <button
              type="button"
              className={`sidebar-lang-btn ${lang === 'KR' ? 'active' : ''}`}
              onClick={() => setLang('KR')}
            >
              KR
            </button>
            <span style={{ color: 'rgba(0,0,0,0.2)' }}>/</span>
            <button
              type="button"
              className={`sidebar-lang-btn ${lang === 'EN' ? 'active' : ''}`}
              onClick={() => setLang('EN')}
            >
              EN
            </button>
          </div>
        </div>

        {/* Sidebar Footer Info */}
        <div className="sidebar-footer">
          <h4 className="footer-company-name">(주)미드바르 솔루션</h4>
          <div className="footer-meta-info">
            <p><span>T</span> 051-123-1234</p>
            <p><span>F</span> 051-123-1234</p>
            <p><span>E</span> 123@midbarsolution.com</p>
            <p className="footer-address"><span>A</span> 부산 강서구 명지국제6로 21 도형건설, 403호</p>
          </div>
        </div>
      </aside>
    </>
  );
}

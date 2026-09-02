'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { key: 'about', label: 'ABOUT', href: '/about', match: (p) => p === '/about' || p.startsWith('/about/') },
  { key: 'solution', label: 'SOLUTION', href: '/products', match: (p) => p === '/products' || p.startsWith('/products/') || p === '/solution' || p.startsWith('/solution/') },
  { key: 'capability', label: 'CAPABILITY', href: '/tech', match: (p) => p === '/tech' || p.startsWith('/tech/') || p === '/capability' || p.startsWith('/capability/') },
  { key: 'insights', label: 'INSIGHTS', href: '/insights', match: (p) => p === '/insights' || p.startsWith('/insights/') },
  { key: 'contact', label: 'CONTACT', href: '/support', match: (p) => p === '/support' || p.startsWith('/support/') || p === '/contact' || p.startsWith('/contact/') }
];

export default function Header() {
  const pathname = usePathname();
  const isSubpage = pathname !== '/';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('KR');
  const [isLangOpen, setIsLangOpen] = useState(false);

  const [hoveredKey, setHoveredKey] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const navRef = useRef(null);
  const itemRefs = useRef({});

  // Active Category Detection
  const activeItem = navItems.find((item) => item.match(pathname));

  // Update Sliding Underbar Position
  const updateIndicator = (key) => {
    const targetKey = key || (activeItem ? activeItem.key : null);
    if (!targetKey) {
      setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const el = itemRefs.current[targetKey];
    const navEl = navRef.current;
    if (el && navEl) {
      const navRect = navEl.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const left = elRect.left - navRect.left;
      const width = elRect.width;
      setIndicatorStyle({
        left: `${left}px`,
        width: `${width}px`,
        opacity: 1
      });
    }
  };

  useEffect(() => {
    updateIndicator(hoveredKey);
  }, [hoveredKey, pathname]);

  useEffect(() => {
    const handleResize = () => updateIndicator(hoveredKey);
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(() => updateIndicator(null), 60);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <>
      <header className={`main-header ${isSubpage ? 'subpage-header' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          {/* Left: Logo Area */}
          <div className="logo-area">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/images/logo.svg"
                alt="MIDBAR SOLUTION"
                className="header-logo-img"
              />
            </Link>
          </div>

          {/* Center: Navigation Menu with Sliding Underbar */}
          <nav
            className="nav-menu"
            ref={navRef}
            onMouseLeave={() => setHoveredKey(null)}
          >
            {navItems.map((item) => {
              const isActive = activeItem?.key === item.key;
              const isHovered = hoveredKey === item.key;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  ref={(el) => (itemRefs.current[item.key] = el)}
                  className={`nav-link ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
                  onMouseEnter={() => setHoveredKey(item.key)}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Smooth Dynamic Underbar Indicator */}
            <span
              className="nav-sliding-indicator"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity
              }}
            />
          </nav>

          {/* Right Area: Language Selector & Hamburger Button */}
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
            <Link href="/about" className={`sidebar-nav-link ${activeItem?.key === 'about' ? 'active' : ''}`} onClick={closeSidebar}>
              <span>ABOUT</span>
              <span className="sidebar-nav-kr-sub">회사소개</span>
            </Link>
          </div>

          {/* SOLUTION (Accordion) */}
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'solution' || activeItem?.key === 'solution' ? 'open' : ''}`}>
            <button className={`sidebar-accordion-trigger ${activeItem?.key === 'solution' ? 'active' : ''}`} onClick={() => toggleAccordion('solution')}>
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
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'capability' || activeItem?.key === 'capability' ? 'open' : ''}`}>
            <button className={`sidebar-accordion-trigger ${activeItem?.key === 'capability' ? 'active' : ''}`} onClick={() => toggleAccordion('capability')}>
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

          {/* INSIGHTS */}
          <div className="sidebar-nav-item">
            <Link href="/insights" className={`sidebar-nav-link ${activeItem?.key === 'insights' ? 'active' : ''}`} onClick={closeSidebar}>
              <span>INSIGHTS</span>
              <span className="sidebar-nav-kr-sub">기술인사이트</span>
            </Link>
          </div>

          {/* CONTACT */}
          <div className="sidebar-nav-item">
            <Link href="/support" className={`sidebar-nav-link ${activeItem?.key === 'contact' ? 'active' : ''}`} onClick={closeSidebar}>
              <span>CONTACT</span>
              <span className="sidebar-nav-kr-sub">고객지원</span>
            </Link>
          </div>
        </nav>

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

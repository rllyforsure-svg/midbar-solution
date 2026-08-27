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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
  }, [pathname]);

  return (
    <>
      <header className={`main-header ${isSubpage ? 'subpage-header' : ''} ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container">
          <div className="logo-area">
            <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              <img
                src="/images/logo.svg"
                alt="MIDBAR SOLUTION"
                className="header-logo-img"
                style={{ height: '42px', width: 'auto', display: 'block' }}
              />
            </Link>
          </div>

          <div className="header-right-area">
            <nav className="nav-menu">
              <Link href="/about" className={`nav-link ${pathname.startsWith('/about') ? 'active' : ''}`}>회사소개</Link>
              <Link href="/tech" className={`nav-link ${pathname.startsWith('/tech') ? 'active' : ''}`}>핵심기술</Link>
              <Link href="/products" className={`nav-link ${pathname.startsWith('/products') ? 'active' : ''}`}>제품소개</Link>
              <Link href="/support" className={`nav-link ${pathname.startsWith('/support') ? 'active' : ''}`}>고객지원</Link>
            </nav>

            <button
              className={`header-hamburger-btn ${isSidebarOpen ? 'active' : ''}`}
              onClick={toggleSidebar}
              aria-label="Menu"
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
          {/* 회사소개 */}
          <div className="sidebar-nav-item">
            <Link href="/about" className="sidebar-nav-link" onClick={closeSidebar}>
              회사소개
            </Link>
          </div>

          {/* 핵심기술 (Accordion) */}
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'tech' ? 'open' : ''}`}>
            <button className="sidebar-accordion-trigger" onClick={() => toggleAccordion('tech')}>
              <span>핵심기술</span>
              <span className="accordion-chevron"></span>
            </button>
            <div className="sidebar-accordion-content">
              <Link href="/tech/hvac" className="sidebar-sub-link" onClick={closeSidebar}>스마트 냉동공조</Link>
              <Link href="/tech/drone" className="sidebar-sub-link" onClick={closeSidebar}>해양 수상드론</Link>
              <Link href="/tech/ai" className="sidebar-sub-link" onClick={closeSidebar}>AI 융합 솔루션</Link>
            </div>
          </div>

          {/* 제품소개 (Accordion) */}
          <div className={`sidebar-nav-item accordion ${activeAccordion === 'products' ? 'open' : ''}`}>
            <button className="sidebar-accordion-trigger" onClick={() => toggleAccordion('products')}>
              <span>제품소개</span>
              <span className="accordion-chevron"></span>
            </button>
            <div className="sidebar-accordion-content">
              <Link href="/products/hvac" className="sidebar-sub-link" onClick={closeSidebar}>냉동공조 (클린룸/항온항습기)</Link>
              <Link href="/products/drone" className="sidebar-sub-link" onClick={closeSidebar}>해양 수상드론 제품군</Link>
              <Link href="/products/ai" className="sidebar-sub-link" onClick={closeSidebar}>AI 지능형 관제 시스템</Link>
            </div>
          </div>

          {/* 고객지원 */}
          <div className="sidebar-nav-item">
            <Link href="/support" className="sidebar-nav-link" onClick={closeSidebar}>
              고객지원
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

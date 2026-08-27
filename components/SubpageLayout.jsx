'use client';

import React from 'react';
import Link from 'next/link';

const tabs = [
  { key: 'hvac', label: '냉동 공조' },
  { key: 'drone', label: '수상 드론' },
  { key: 'ai', label: 'AI' }
];

export default function SubpageLayout({
  type, // 'tech' 또는 'products'
  activeTab = 'hvac',
  title,
  description,
  bgImage,
  bgGradient,
  stat1,
  stat2,
  stat3,
  productList = [],
  children
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState({ x: 0, y: 0 });
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  // Lightbox Zoom Modal States
  const [zoomOpen, setZoomOpen] = React.useState(false);
  const [scale, setScale] = React.useState(1.0);
  const [offset, setOffset] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 });
  const containerRef = React.useRef(null);
  const zoomOpenRef = React.useRef(false);

  zoomOpenRef.current = zoomOpen;

  const closeModal = () => {
    setZoomOpen(false);
    setScale(1.0);
    setOffset({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setOffset({ x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDoubleClick = () => {
    if (scale > 1) {
      setScale(1.0);
      setOffset({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  React.useEffect(() => {
    closeModal();
  }, [activeIdx]);

  React.useEffect(() => {
    if (!zoomOpen) return;

    const container = containerRef.current;
    if (!container) return;

    const preventDefault = (e) => e.preventDefault();

    const handleWheelNative = (e) => {
      e.preventDefault();
      const delta = e.deltaY;
      const zoomIntensity = 0.15;
      setScale((prevScale) => {
        const newScale = prevScale - delta * zoomIntensity * 0.01;
        const clampedScale = Math.min(Math.max(newScale, 0.8), 6.0);
        if (clampedScale <= 1.05) {
          setOffset({ x: 0, y: 0 });
        }
        return clampedScale;
      });
    };

    document.body.style.overflow = 'hidden';
    container.addEventListener('wheel', handleWheelNative, { passive: false });
    window.addEventListener('wheel', preventDefault, { passive: false });

    return () => {
      document.body.style.overflow = '';
      container.removeEventListener('wheel', handleWheelNative);
      window.removeEventListener('wheel', preventDefault);
    };
  }, [zoomOpen]);

  const hasProducts = productList && productList.length > 0;
  const currentTitle = hasProducts ? productList[activeIdx].title : title;
  const currentDesc = hasProducts ? productList[activeIdx].description : description;
  const currentBgImage = hasProducts ? productList[activeIdx].bgImage : bgImage;
  const currentBgGradient = hasProducts ? productList[activeIdx].bgGradient : bgGradient;
  const currentStat1 = hasProducts ? productList[activeIdx].stat1 : stat1;
  const currentStat2 = hasProducts ? productList[activeIdx].stat2 : stat2;
  const currentStat3 = hasProducts ? productList[activeIdx].stat3 : stat3;
  const currentKeyApps = hasProducts ? productList[activeIdx].keyApplications : null;

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const selectProduct = (idx) => {
    setActiveIdx(idx);
  };

  const handleTouchStart = (e) => {
    if (type !== 'products' || !hasProducts) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = (e) => {
    if (type !== 'products' || !hasProducts) return;
    const touch = e.changedTouches[0];
    const diffX = touch.clientX - touchStart.x;
    const diffY = touch.clientY - touchStart.y;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX < 0) {
        if (activeIdx < productList.length - 1) {
          setActiveIdx(activeIdx + 1);
        }
      } else {
        if (activeIdx > 0) {
          setActiveIdx(activeIdx - 1);
        }
      }
    }
  };

  return (
    <div className={`subpage-tab-wrapper ${activeTab}-page ${type === 'products' ? 'products-theme' : ''}`}>
      {/* Sub-tabs Navigation Bar */}
      <div className="subpage-tabs-nav">
        <div className="container sub-tabs-container">
          {(type === 'products'
            ? tabs.filter((t) => t.key !== 'ai')
            : tabs
          ).map((tab) => (
            <Link
              key={tab.key}
              href={`/${type}/${tab.key}`}
              className={`subpage-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Split Layout Container */}
      <div 
        className={`split-view-container ${type === 'products' ? 'products-card' : ''} ${sidebarOpen ? 'sidebar-active' : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Card Internal Sidebar */}
        {hasProducts && (
          <>
            <button 
              className={`card-sidebar-trigger ${sidebarOpen ? 'active' : ''}`} 
              onClick={toggleSidebar}
              aria-label={sidebarOpen ? '제품 목록 닫기' : '제품 목록 열기'}
            >
              <span className="chevron-icon"></span>
            </button>

            <div 
              className={`card-sidebar-drawer ${sidebarOpen ? 'active' : ''}`}
              onTouchStart={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
            >
              <h3>제품 리스트</h3>
              <div className="sidebar-product-list">
                {productList.map((prod, idx) => (
                  <button
                    key={idx}
                    className={`sidebar-product-item ${activeIdx === idx ? 'active' : ''}`}
                    onClick={() => {
                      selectProduct(idx);
                      if (typeof window !== 'undefined' && window.innerWidth <= 1024) {
                        setSidebarOpen(false);
                      }
                    }}
                  >
                    <span className="product-item-name">{prod.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Left Side: Visual Image/Gradient */}
        <div className="split-left-visual">
          {currentBgImage ? (
            <div className="split-visual-image-container" style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
              <img 
                src={currentBgImage} 
                alt={currentTitle} 
                className="split-visual-image-img"
                style={{ maxWidth: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '14px', cursor: 'pointer', boxShadow: '0 12px 30px rgba(0,0,0,0.4)' }}
                onClick={() => setZoomOpen(true)}
              />
            </div>
          ) : (
            <div 
              className="split-visual-gradient" 
              style={{ background: currentBgGradient || 'radial-gradient(circle, #102648 0%, #07101e 100%)', width: '100%', height: '100%' }}
            />
          )}
        </div>

        {/* Right Side: Text & Stats Content */}
        <div className="split-right-content">
          <div className="content-box-inner">
            <h1 className="content-main-title">{currentTitle}</h1>
            <div className="content-main-desc">{currentDesc}</div>
            
            {/* Key Applications Panel */}
            {currentKeyApps && currentKeyApps.length > 0 && (
              <div className="key-app-panel">
                <h4 style={{ fontSize: '16px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>핵심 사용처</h4>
                <ul style={{ fontSize: '15px', color: 'rgba(255, 255, 255, 0.85)' }}>
                  {currentKeyApps.map((app, idx) => (
                    <li key={idx} style={{ marginBottom: '4px' }}>• {app}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Stat Row */}
            {(currentStat1 || currentStat2 || currentStat3) && (
              <div className="content-stats-row">
                {currentStat1 && (
                  <div className="stat-item-box">
                    <span className="stat-value">{currentStat1.value}</span>
                    <span className="stat-label">{currentStat1.label}</span>
                  </div>
                )}
                {currentStat2 && (
                  <div className="stat-item-box">
                    <span className="stat-value">{currentStat2.value}</span>
                    <span className="stat-label">{currentStat2.label}</span>
                  </div>
                )}
                {currentStat3 && (
                  <div className="stat-item-box">
                    <span className="stat-value">{currentStat3.value}</span>
                    <span className="stat-label">{currentStat3.label}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 추가 콘텐츠 블록 (보유기술 다이어그램, 계획 프로세스 등) */}
      {children}

      {/* Lightbox Zoom Modal */}
      {zoomOpen && currentBgImage && (
        <div className="image-zoom-overlay" onClick={closeModal}>
          <button className="zoom-close-btn" onClick={closeModal} aria-label="닫기">
            &times;
          </button>
          <div 
            className="zoom-image-container"
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={currentBgImage} 
              alt={currentTitle}
              className="zoom-image-el"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
                cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in',
                transition: isDragging ? 'none' : 'transform 0.15s ease-out'
              }}
              draggable={false}
            />
          </div>
        </div>
      )}
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function HeroSplitSection() {
  const [hoveredSide, setHoveredSide] = useState(null); // null, 'left', 'right'

  return (
    <section className="hero-split-wrapper">
      {/* LEFT PANEL: 냉동공조 (HVAC) */}
      <div
        className={`hero-split-panel panel-left ${hoveredSide === 'left' ? 'is-expanded' : ''} ${
          hoveredSide === 'right' ? 'is-solid-hidden' : ''
        }`}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <Link href="/tech/hvac" className="panel-click-layer" aria-label="스마트 냉동공조 바로가기">
          {/* Background Image Layer */}
          <div className="panel-bg-image bg-hvac" />

          {/* Solid Color Dim Layer (호버 반대편일 때 단색으로 칠해짐) */}
          <div className="panel-solid-overlay" />

          {/* Center Gradient Blend */}
          <div className="panel-center-gradient left-grad" />

          {/* Text Content Overlay */}
          <div className="panel-content left-content">
            <span className="panel-badge">HVAC & REFRIGERATION</span>
            <h2 className="panel-title">냉동공조</h2>
            <p className="panel-desc">스마트 클린룸 & 정밀 항온항습 제어 시스템</p>
            <span className="panel-cta-btn">
              핵심기술 보기 <span className="arrow">→</span>
            </span>
          </div>
        </Link>
      </div>

      {/* RIGHT PANEL: 수상드론 (SURFACE DRONE) */}
      <div
        className={`hero-split-panel panel-right ${hoveredSide === 'right' ? 'is-expanded' : ''} ${
          hoveredSide === 'left' ? 'is-solid-hidden' : ''
        }`}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        <Link href="/tech/drone" className="panel-click-layer" aria-label="해양 자율운항 수상드론 바로가기">
          {/* Background Image Layer */}
          <div className="panel-bg-image bg-drone" />

          {/* Solid Color Dim Layer (호버 반대편일 때 단색으로 칠해짐) */}
          <div className="panel-solid-overlay" />

          {/* Center Gradient Blend */}
          <div className="panel-center-gradient right-grad" />

          {/* Text Content Overlay */}
          <div className="panel-content right-content">
            <span className="panel-badge">AUTONOMOUS MARINE ROBOTICS</span>
            <h2 className="panel-title">수상드론</h2>
            <p className="panel-desc">해양 환경 모니터링 & 자율운항 순찰 수상드론</p>
            <span className="panel-cta-btn">
              핵심기술 보기 <span className="arrow">→</span>
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}

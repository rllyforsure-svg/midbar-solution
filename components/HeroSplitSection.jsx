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
        {/* Background Image Layer */}
        <div className="panel-bg-image bg-hvac" />

        {/* Solid Color Dim Layer (호버 반대편일 때 단색으로 가려짐) */}
        <div className="panel-solid-overlay" />

        {/* Center Gradient Blend */}
        <div className="panel-center-gradient left-grad" />

        {/* Text & Actions Content */}
        <div className="panel-content left-content">
          <h2 className="panel-title">냉동공조</h2>
          <p className="panel-desc">스마트 클린룸 & 정밀 항온항습 제어 시스템</p>

          {/* 호버 시 은은하게 나타나는 핵심기술 & 제품소개 버튼 */}
          <div className="panel-actions-row">
            <Link href="/tech/hvac" className="panel-btn">
              핵심기술
            </Link>
            <Link href="/products/hvac" className="panel-btn">
              제품소개
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL: 수상드론 (SURFACE DRONE) */}
      <div
        className={`hero-split-panel panel-right ${hoveredSide === 'right' ? 'is-expanded' : ''} ${
          hoveredSide === 'left' ? 'is-solid-hidden' : ''
        }`}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image Layer */}
        <div className="panel-bg-image bg-drone" />

        {/* Solid Color Dim Layer (호버 반대편일 때 단색으로 가려짐) */}
        <div className="panel-solid-overlay" />

        {/* Center Gradient Blend */}
        <div className="panel-center-gradient right-grad" />

        {/* Text & Actions Content */}
        <div className="panel-content right-content">
          <h2 className="panel-title">수상드론</h2>
          <p className="panel-desc">해양 환경 모니터링 & 자율운항 순찰 수상드론</p>

          {/* 호버 시 은은하게 나타나는 핵심기술 & 제품소개 버튼 */}
          <div className="panel-actions-row">
            <Link href="/tech/drone" className="panel-btn">
              핵심기술
            </Link>
            <Link href="/products/drone" className="panel-btn">
              제품소개
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

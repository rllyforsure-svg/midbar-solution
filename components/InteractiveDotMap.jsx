'use client';

import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

const geoUrl = '/data/world-50m.json';

// 4대 핵심 국가 지리적 좌표 (경도, 위도)
const coreMarkers = [
  {
    id: 'korea',
    name: '한국',
    engName: 'Korea',
    coordinates: [127.7669, 36.2078], // 한국
    iso: '410',
    names: ['South Korea', 'Korea, Republic of', 'Korea']
  },
  {
    id: 'japan',
    name: '일본',
    engName: 'Japan',
    coordinates: [138.2529, 36.2048], // 일본 혼슈
    iso: '392',
    names: ['Japan']
  },
  {
    id: 'taiwan',
    name: '대만',
    engName: 'Taiwan',
    coordinates: [120.9605, 23.6978], // 대만
    iso: '158',
    names: ['Taiwan']
  },
  {
    id: 'indonesia',
    name: '인도네시아',
    engName: 'Indonesia',
    coordinates: [112.0, -2.5], // 인도네시아 군도 중심
    iso: '360',
    names: ['Indonesia']
  }
];

export default function InteractiveDotMap() {
  const [hoveredMarket, setHoveredMarket] = useState(null);
  const [tooltipData, setTooltipData] = useState(null);

  const handleMarkerHover = (m, e) => {
    setHoveredMarket(m.id);
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.closest('.vector-map-wrapper');
    if (!parent) return;
    const parentRect = parent.getBoundingClientRect();
    setTooltipData({
      name: m.name,
      engName: m.engName,
      x: rect.left - parentRect.left + rect.width / 2,
      y: rect.top - parentRect.top
    });
  };

  const handleMarkerLeave = () => {
    setHoveredMarket(null);
    setTooltipData(null);
  };

  return (
    <section className="dot-map-section" id="global-network" style={{ padding: '60px 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container dot-map-container" style={{ maxWidth: '1240px' }}>
        {/* Section Header */}
        <div className="section-header-center" style={{ marginBottom: '28px' }}>
          <div className="section-badge-top" style={{ fontSize: '13px', marginBottom: '8px' }}>GLOBAL EXPANSION & NETWORK</div>
          <h2 className="section-title-large" style={{ fontSize: '36px', marginBottom: '10px' }}>글로벌 비즈니스 네트워크</h2>
          <p className="dot-map-desc-text" style={{ fontSize: '16px', color: 'rgba(255, 255, 255, 0.75)', lineHeight: 1.6, margin: '0 auto' }}>
            지도 위의 주요거점에 마우스를 올리시면 상세정도를 확인하실수있습니다.
          </p>
        </div>

        {/* Expanded Map Canvas Card without bottom boxes */}
        <div 
          className="dot-map-canvas-card" 
          style={{ 
            position: 'relative',
            padding: '24px 28px', 
            background: 'radial-gradient(circle at 55% 45%, #0d1e38 0%, #060e1a 100%)', 
            border: '1px solid rgba(255,255,255,0.12)', 
            borderRadius: '24px',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'visible' // 툴팁 잘림 방지
          }}
        >
          <div className="vector-map-wrapper" style={{ position: 'relative', width: '100%', overflow: 'visible' }}>
            {/* React Simple Maps - Expanded Proportions */}
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 520, // 지도의 비율을 더욱 시원하고 웅장하게 확대
                center: [121, 16] // 한국, 일본, 대만, 인도네시아 중심 최적화
              }}
              style={{
                width: '100%',
                maxHeight: '560px',
                display: 'block'
              }}
            >
              <defs>
                <filter id="rsm-pin-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const geoId = String(geo.id);
                    const isCore = coreMarkers.find(
                      (m) => m.iso === geoId || m.names.includes(geo.properties?.name)
                    );

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={(e) => {
                          if (isCore) {
                            handleMarkerHover(isCore, e);
                          }
                        }}
                        onMouseLeave={handleMarkerLeave}
                        style={{
                          default: {
                            fill: isCore ? '#1a3a6b' : '#112238',
                            stroke: isCore ? '#38bdf8' : '#1d3557',
                            strokeWidth: isCore ? 1.5 : 0.8,
                            outline: 'none',
                            transition: 'all 0.25s ease',
                            cursor: isCore ? 'pointer' : 'default'
                          },
                          hover: {
                            fill: isCore ? '#2563eb' : '#162b47',
                            stroke: isCore ? '#60a5fa' : '#2a4873',
                            strokeWidth: isCore ? 2.4 : 1.0,
                            outline: 'none',
                            cursor: isCore ? 'pointer' : 'default'
                          },
                          pressed: {
                            fill: isCore ? '#1d4ed8' : '#0e1d30',
                            outline: 'none'
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>

              {/* 4대 핵심 국가 레이더 펄스 마커 (선 연결 없음) */}
              {coreMarkers.map((m) => {
                const isHovered = hoveredMarket === m.id;
                return (
                  <Marker
                    key={m.id}
                    coordinates={m.coordinates}
                    onMouseEnter={(e) => handleMarkerHover(m, e)}
                    onMouseLeave={handleMarkerLeave}
                  >
                    {/* Animated Outer Pulse Ring */}
                    <circle r={isHovered ? 20 : 13} fill="rgba(56, 189, 248, 0.25)" style={{ cursor: 'pointer' }}>
                      <animate attributeName="r" values="9;22;9" dur="2.4s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.9;0.1;0.9" dur="2.4s" repeatCount="indefinite" />
                    </circle>

                    {/* Middle Core Beacon */}
                    <circle
                      r={isHovered ? 8.5 : 6}
                      fill="#38bdf8"
                      filter="url(#rsm-pin-glow)"
                      style={{ cursor: 'pointer' }}
                    />

                    {/* Center Pure White Light */}
                    <circle r={isHovered ? 4 : 2.8} fill="#ffffff" style={{ cursor: 'pointer' }} />
                  </Marker>
                );
              })}
            </ComposableMap>

            {/* Dynamic Hover Tooltip (절대 잘리지 않도록 z-index 100 및 최적 마진 배치) */}
            {tooltipData && (
              <div
                className="pro-hover-tooltip"
                style={{
                  position: 'absolute',
                  top: `${tooltipData.y}px`,
                  left: `${tooltipData.x}px`,
                  transform: 'translate(-50%, -125%)',
                  zIndex: 100,
                  pointerEvents: 'none',
                  animation: 'tooltipFadeIn 0.2s ease-out forwards',
                  whiteSpace: 'nowrap'
                }}
              >
                <div
                  style={{
                    background: 'rgba(8, 19, 38, 0.98)',
                    border: '1.5px solid #38bdf8',
                    borderRadius: '12px',
                    padding: '11px 20px',
                    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.7), 0 0 20px rgba(56, 189, 248, 0.4)',
                    backdropFilter: 'blur(16px)',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '3px' }}>
                    <span style={{ width: '8px', height: '8px', background: '#38bdf8', borderRadius: '50%', boxShadow: '0 0 10px #38bdf8' }}></span>
                    <strong style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff' }}>{tooltipData.name}</strong>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)' }}>({tooltipData.engName})</span>
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#93c5fd', background: 'rgba(56, 189, 248, 0.15)', padding: '4px 12px', borderRadius: '6px', marginTop: '4px' }}>
                    주요사업: 테스트
                  </div>
                </div>
                {/* Down Arrow Pointer */}
                <div
                  style={{
                    width: '0',
                    height: '0',
                    borderLeft: '7px solid transparent',
                    borderRight: '7px solid transparent',
                    borderTop: '8px solid #38bdf8',
                    margin: '0 auto'
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';

export default function AboutClient() {
  React.useEffect(() => {
    let lastScrollTime = 0;

    const handleWheel = (e) => {
      if (window.innerWidth < 1024 || window.innerHeight < 850) {
        return;
      }

      if (Math.abs(e.deltaY) < 15) return;

      const now = Date.now();
      if (now - lastScrollTime < 1200) {
        e.preventDefault();
        return;
      }
      const sectionHeight = window.innerHeight;
      const snapPoints = [0, sectionHeight];

      const currentScroll = window.scrollY;
      let currentIndex = 0;
      let minDiff = Infinity;
      for (let i = 0; i < snapPoints.length; i++) {
        const diff = Math.abs(currentScroll - snapPoints[i]);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = i;
        }
      }

      if (e.deltaY > 0) {
        if (currentIndex < snapPoints.length - 1) {
          e.preventDefault();
          lastScrollTime = now;
          window.scrollTo({
            top: snapPoints[currentIndex + 1],
            behavior: 'smooth'
          });
        }
      } else {
        if (currentIndex > 0) {
          e.preventDefault();
          lastScrollTime = now;
          window.scrollTo({
            top: snapPoints[currentIndex - 1],
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="about-page-wrapper">
      {/* 1. 인사말 Section */}
      <section className="about-section greeting-sec">
        <div className="about-section-container">
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#2b82e6', marginBottom: '8px' }}>회사소개 &gt;</div>
          <h1 className="about-section-title">인사말</h1>

          <div className="about-message-box">
            <p>
              (주)미드바르 솔루션은 고효율 스마트 냉동공조 인프라와 첨단 해양 자율운항 수상드론 기술을 융합하여,
              산업 및 해양 환경의 미래 지향적 자동화와 환경 최적화를 실현하는 기술 혁신 기업입니다.
            </p>
            <p>
              저희는 공조 설비의 정밀 환경 제어 및 에너지 절감 솔루션부터,
              실시간 해양 수질·환경 모니터링 및 스마트 항만 자율순찰 드론까지
              현장 중심의 실용적이고 신뢰할 수 있는 토탈 엔지니어링을 제공합니다.
            </p>

            <div className="about-message-logo">
              <img
                src="/images/logo.svg"
                alt="MIDBAR SOLUTION"
                style={{ height: '42px', width: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. 조직도 Section (Figma 4개 부서) */}
      <section className="about-section org-sec">
        <div className="about-section-container">
          <div style={{ fontSize: '14px', fontWeight: 800, color: '#2b82e6', marginBottom: '8px' }}>회사소개 &gt;</div>
          <h1 className="about-section-title">조직도</h1>

          <div className="about-org-box">
            <div className="org-chart-wrapper">
              {/* Background Grid Lines */}
              <div className="org-grid-lines">
                <svg className="org-grid-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <line x1="50%" y1="120" x2="50%" y2="260" stroke="#7a91a8" strokeWidth="2.5" />
                  <line x1="12.5%" y1="260" x2="87.5%" y2="260" stroke="#7a91a8" strokeWidth="2.5" />
                  <line x1="12.5%" y1="260" x2="12.5%" y2="300" stroke="#7a91a8" strokeWidth="2.5" />
                  <line x1="37.5%" y1="260" x2="37.5%" y2="300" stroke="#7a91a8" strokeWidth="2.5" />
                  <line x1="62.5%" y1="260" x2="62.5%" y2="300" stroke="#7a91a8" strokeWidth="2.5" />
                  <line x1="87.5%" y1="260" x2="87.5%" y2="300" stroke="#7a91a8" strokeWidth="2.5" />
                </svg>
              </div>

              {/* Layer 1: 대표이사 (Top Center) */}
              <div className="org-layer org-layer-top" style={{ marginBottom: '60px' }}>
                <div className="org-card org-card-ceo" style={{ width: '300px' }}>
                  <div className="org-card-header">대표이사</div>
                  <div className="org-card-body">
                    <ul>
                      <li>경영 총괄 및 사업 전략 수립</li>
                      <li>대외 영업, 고객사 기술 상담 및 파트너십 구축</li>
                      <li>인사, 재무, 행정 업무 관리</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Layer 2: 4개 부서 Grid */}
              <div className="org-layer org-layer-bottom four-cols">
                {/* 1. 연구개발팀 */}
                <div className="org-card">
                  <div className="org-card-header">연구개발팀</div>
                  <div className="org-card-body">
                    <ul>
                      <li>항온항습기 / 챔버</li>
                      <li>특수장비 / F.A 자동화</li>
                      <li>제품개선 / 연구개발</li>
                    </ul>
                  </div>
                </div>

                {/* 2. 설계영업팀 */}
                <div className="org-card">
                  <div className="org-card-header">설계영업팀</div>
                  <div className="org-card-body">
                    <ul>
                      <li>견적 / 상담</li>
                      <li>설계 / 시공</li>
                    </ul>
                  </div>
                </div>

                {/* 3. 생산관리팀 */}
                <div className="org-card">
                  <div className="org-card-header">생산관리팀</div>
                  <div className="org-card-body">
                    <ul>
                      <li>제품제작</li>
                      <li>재고관리</li>
                    </ul>
                  </div>
                </div>

                {/* 4. 경영지원팀 */}
                <div className="org-card">
                  <div className="org-card-header">경영지원팀</div>
                  <div className="org-card-body">
                    <ul>
                      <li>인사관리</li>
                      <li>회계관리</li>
                      <li>구매발주</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

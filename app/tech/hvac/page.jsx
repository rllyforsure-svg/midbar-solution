import React from 'react';
import SubpageLayout from '../../../components/SubpageLayout';

export const metadata = {
  title: '핵심기술 - Smart 공조 시스템 | (주)미드바르 솔루션',
  description: '공조기의 팬&진동 이상, 필터 차압, 코일 동작을 실시간 감시하고 분석하여 결함을 진단하는 스마트 공조 솔루션입니다.',
};

export default function HvacTechPage() {
  return (
    <SubpageLayout
      type="tech"
      activeTab="hvac"
      title="Smart 공조 시스템"
      description="공조기의 팬 & 진동 이상, 필터 차압, 코일 동작을 실시간 감시하고 분석하여 장비의 상태 및 결함을 진단"
      bgImage="/images/tech-hvac-main.jpg"
      stat1={{ value: '99.97%', label: '초미세 입자 제거 효율' }}
      stat2={{ value: 'ISO Class 5', label: '글로벌 청정도 표준 달성' }}
    >
      {/* 서브페이지 추가 섹션 (보유기술 & 계획 프로세스) */}
      <section className="subpage-extra-section">
        <div className="container extra-section-inner">
          {/* 1. 보유기술 섹션 */}
          <div className="extra-section-header">
            <h2 className="extra-title">보유기술</h2>
            <div className="header-line"></div>
          </div>

          <div className="tech-diagram-card">
            <img 
              src="/images/tech-hvac-features.png" 
              alt="Smart 공조기 핵심 센서 연동 및 보유기술" 
              className="tech-diagram-img"
            />
          </div>

          {/* 2. 계획 프로세스 섹션 */}
          <div className="extra-section-header" style={{ marginTop: '80px' }}>
            <h2 className="extra-title">계획 프로세스</h2>
            <div className="header-line"></div>
          </div>

          <div className="tech-diagram-card">
            <img 
              src="/images/tech-hvac-process.png" 
              alt="스마트 공조 8단계 계획 프로세스" 
              className="tech-diagram-img"
            />
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}

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
      bgImage="/images/slide-automation.png"
      stat1={{ value: '99.97%', label: '초미세 입자 제거 효율' }}
      stat2={{ value: 'ISO Class 5', label: '글로벌 청정도 표준 달성' }}
    >
      {/* 1. 보유기술 섹션 (4대 핵심 포인트 다이어그램) */}
      <section className="subpage-extra-section">
        <div className="container">
          <div className="extra-section-header">
            <h2 className="extra-title" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>보유기술</h2>
            <div style={{ width: '60px', height: '3px', background: '#2b82e6', marginBottom: '40px' }}></div>
          </div>

          <div className="hvac-grid-four">
            {/* 01. 팬&모터 진동 감지 */}
            <div className="hvac-point-card">
              <h4><span className="badge">01</span>팬&amp;모터 진동 감지</h4>
              <ul>
                <li>• 3축 가속도 측정</li>
                <li>• 팬 진동 상태 감시, 이상 진동 경보 전송</li>
              </ul>
            </div>

            {/* Center Graphic */}
            <div style={{ background: '#091424', border: '2px solid #2b82e6', borderRadius: '18px', padding: '28px', textAlign: 'center', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '18px' }}>
                <div style={{ background: '#102444', height: '110px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#93c5fd' }}>FAN/MOTOR</span>
                </div>
                <div style={{ background: '#102444', height: '110px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#93c5fd' }}>FILTER</span>
                </div>
                <div style={{ background: '#102444', height: '110px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#93c5fd' }}>COIL</span>
                </div>
                <div style={{ background: '#102444', height: '110px', borderRadius: '8px', border: '1px solid #3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#93c5fd' }}>MODULE</span>
                </div>
              </div>
              <strong style={{ color: '#60a5fa', fontSize: '16px', letterSpacing: '0.5px' }}>Smart 공조기 핵심 센서 연동 모듈</strong>
            </div>

            {/* 02. 필터 차압 이상 감지 */}
            <div className="hvac-point-card">
              <h4><span className="badge">02</span>필터 차압 이상 감지</h4>
              <ul>
                <li>• 필터 전,후 차압 감시</li>
                <li>• 높은 차압 발생시 필터 교체 경보 전송</li>
              </ul>
            </div>

            {/* 03. 코일 온도 제어 */}
            <div className="hvac-point-card">
              <h4><span className="badge">03</span>코일 온도 제어</h4>
              <ul>
                <li>• 코일 온도 측정 및 펌프 제어</li>
                <li>• 코일 온도 감시, 동파 위험 시 경보 전송 순환 펌프 자동 기동</li>
              </ul>
            </div>

            <div></div>

            {/* 04. Central Module */}
            <div className="hvac-point-card">
              <h4><span className="badge">04</span>Central Module</h4>
              <ul>
                <li>• 진동, 차압, 온도 Data 수집</li>
                <li>• 입,출력 통신 변환 기능</li>
              </ul>
            </div>
          </div>

          {/* 2. 계획 프로세스 섹션 (8단계 Flowchart Timeline) */}
          <div className="extra-section-header">
            <h2 className="extra-title" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>계획 프로세스</h2>
            <div style={{ width: '60px', height: '3px', background: '#2b82e6', marginBottom: '40px' }}></div>
          </div>

          <div className="flow-eight-container">
            {/* Top Row: Steps 1 ~ 4 */}
            <div className="flow-row-grid">
              {/* Step 1 */}
              <div className="flow-step-item">
                <div className="flow-callout-box">
                  <p>• 요구조건 청정도</p>
                  <p>• 제품의 온습도 특성</p>
                </div>
                <div className="flow-bar-btn" style={{ background: '#64748b' }}>
                  <span>청정도 및 온습도의 결정</span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flow-step-item">
                <div style={{ height: '52px' }}></div>
                <div className="flow-bar-btn" style={{ background: '#0284c7' }}>
                  <span>작업내용과 사용기계의 분석</span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flow-step-item">
                <div style={{ height: '52px' }}></div>
                <div className="flow-bar-btn" style={{ background: '#2563eb' }}>
                  <span>작업 Layout</span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flow-step-item">
                <div className="flow-callout-box">
                  <p>• 내진</p>
                  <p>• 방화</p>
                </div>
                <div className="flow-bar-btn" style={{ background: '#1e3a8a' }}>
                  <span>입지조건과 건축구조</span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Steps 8 ~ 5 */}
            <div className="flow-row-grid">
              {/* Step 8 */}
              <div className="flow-step-item">
                <div className="flow-bar-btn" style={{ background: '#dc2626' }}>
                  <span>품질관리</span>
                </div>
              </div>

              {/* Step 7 */}
              <div className="flow-step-item">
                <div className="flow-bar-btn" style={{ background: '#701a75' }}>
                  <span>보수 · 관리</span>
                </div>
                <div className="flow-callout-box" style={{ marginTop: '8px' }}>
                  <p>• 청소방법</p>
                  <p>• Monitoring</p>
                  <p>• 교육</p>
                </div>
              </div>

              {/* Step 6 */}
              <div className="flow-step-item">
                <div className="flow-bar-btn" style={{ background: '#0d9488' }}>
                  <span>사양서의 작성</span>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flow-step-item">
                <div className="flow-callout-box">
                  <p>• 경제적 평가 • 소음</p>
                  <p>• Layout 변경에 관한 고려</p>
                </div>
                <div className="flow-bar-btn" style={{ background: '#059669' }}>
                  <span>설비의 선정</span>
                </div>
                <div className="flow-callout-box" style={{ marginTop: '8px' }}>
                  <p>• 전동 / 배기 / 배선 / 배관</p>
                  <p>• 분해대책 / 정전기 / 절전</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}

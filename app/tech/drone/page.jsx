import React from 'react';
import SubpageLayout from '../../../components/SubpageLayout';

export const metadata = {
  title: '핵심기술 - 해양 수상드론 | (주)미드바르 솔루션',
  description: '해양 환경 실시간 모니터링 및 자율운항 순찰 수상드론 핵심기술을 소개합니다.',
};

export default function DroneTechPage() {
  return (
    <SubpageLayout
      type="tech"
      activeTab="drone"
      title="해양 자율운항 수상드론"
      description="해양 환경 실시간 모니터링, 해양 오염원 감지 및 스마트 항만 자율순찰을 수행하는 첨단 무인 수상로봇 시스템"
      bgImage="/images/hero-split-drone.jpg"
      stat1={{ value: '99.5%', label: '자율운항 경로 정확도' }}
      stat2={{ value: 'IP68', label: '완전 방수 & 내염수 설계' }}
    >
      {/* 1. 보유기술 섹션 (3대 핵심 기술 카드 그리드) */}
      <section className="subpage-extra-section">
        <div className="container">
          <div className="extra-section-header">
            <h2 className="extra-title" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>보유기술</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--c-marine-blue)', marginBottom: '40px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {/* Card 1 */}
            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">01</span>정밀 자율항법 &amp; 원격제어</h4>
              <ul>
                <li>• RTK-GPS 기반 cm급 고정밀 위치 제어</li>
                <li>• 라이다(LiDAR) 및 소나 기반 실시간 장애물 회피</li>
                <li>• LTE/5G 및 위성 기반 원거리 양방향 통신</li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">02</span>해양 다채널 환경 센싱</h4>
              <ul>
                <li>• 수온, 염도, 용존산소(DO), 탁도 다채널 동시 측정</li>
                <li>• 유류 유출 및 해양 오염 물질 실시간 분광 감지</li>
                <li>• 수중 음향 소나 어레이 및 360도 해상 감시 카메라</li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">03</span>AI 지능형 엣지 컴퓨팅</h4>
              <ul>
                <li>• 온보드 AI 엣지 프로세서 탑재</li>
                <li>• 선박 및 부유물 자율 객체 인식 알고리즘</li>
                <li>• 이상 징후 발생 시 관제 센터 자동 경보 전송</li>
              </ul>
            </div>
          </div>

          {/* 2. 운용 프로세스 타임라인 */}
          <div className="extra-section-header" style={{ marginTop: '70px' }}>
            <h2 className="extra-title" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>운용 프로세스</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--c-marine-blue)', marginBottom: '40px' }}></div>
          </div>

          <div className="process-timeline-container">
            <div className="process-timeline-row">
              <div className="timeline-badge-col"><div className="timeline-badge">01</div></div>
              <div className="timeline-content-col">
                <h4 className="timeline-step-title">임무 설계 및 구역 지정</h4>
                <p className="timeline-step-desc">GCS(지상관제시스템)에서 순찰 영역 및 센싱 웨이포인트를 3D 지도 기반으로 지정합니다.</p>
              </div>
            </div>

            <div className="process-timeline-row">
              <div className="timeline-badge-col"><div className="timeline-badge">02</div></div>
              <div className="timeline-content-col">
                <h4 className="timeline-step-title">자율 출항 및 경로 순항</h4>
                <p className="timeline-step-desc">지정된 경로를 따라 자율 항해하며 해상 장애물 및 타 선박을 회피 운항합니다.</p>
              </div>
            </div>

            <div className="process-timeline-row">
              <div className="timeline-badge-col"><div className="timeline-badge">03</div></div>
              <div className="timeline-content-col">
                <h4 className="timeline-step-title">실시간 환경 센싱 및 AI 분석</h4>
                <p className="timeline-step-desc">수질, 오염원, 영상 데이터를 실시간 수집하여 엣지 AI로 분석 후 암호화 전송합니다.</p>
              </div>
            </div>

            <div className="process-timeline-row">
              <div className="timeline-badge-col"><div className="timeline-badge">04</div></div>
              <div className="timeline-content-col">
                <h4 className="timeline-step-title">자동 귀항 및 데이터 동기화</h4>
                <p className="timeline-step-desc">임무 완료 후 지정된 스테이션으로 자동 접안하여 배터리 충전 및 고속 데이터 백업을 수행합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}

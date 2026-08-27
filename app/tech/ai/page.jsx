import React from 'react';
import SubpageLayout from '../../../components/SubpageLayout';

export const metadata = {
  title: '핵심기술 - AI & IoT 제어 | (주)미드바르 솔루션',
  description: 'AI 지능형 환경제어 및 IoT 실시간 모니터링 핵심기술을 소개합니다.',
};

export default function AiTechPage() {
  return (
    <SubpageLayout
      type="tech"
      activeTab="ai"
      title="AI & IoT 제어 시스템"
      description="설비 상태 실시간 이상 감지, 에너지 최적화 예측 알고리즘, 원격 통합 클라우드 관제 플랫폼"
      bgImage="/images/slide-ai-plus.jpg"
      stat1={{ value: '30%', label: '에너지 절감 예측 효율' }}
      stat2={{ value: '0.1s', label: '실시간 결함 감지 반응' }}
    >
      <section className="subpage-extra-section">
        <div className="container">
          <div className="extra-section-header">
            <h2 className="extra-title" style={{ fontSize: '32px', fontWeight: 900, color: '#fff', marginBottom: '10px' }}>보유기술</h2>
            <div style={{ width: '60px', height: '3px', background: '#2b82e6', marginBottom: '40px' }}></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">01</span>예지보전 AI 알고리즘</h4>
              <ul>
                <li>• 센서 진동·온도 빅데이터 시계열 분석</li>
                <li>• 부품 마모 및 고장 징후 사전 예측</li>
                <li>• 사전 유지보수 알림을 통한 셧다운 예방</li>
              </ul>
            </div>

            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">02</span>스마트 에너지 최적 제어</h4>
              <ul>
                <li>• 외기 온습도 및 부하 예측 기반 최적 냉각</li>
                <li>• 딥러닝 기반 인버터 인텔리전트 가변 속도 제어</li>
                <li>• 전력 소비량 최대 30% 절감</li>
              </ul>
            </div>

            <div className="hvac-point-card" style={{ padding: '28px' }}>
              <h4><span className="badge">03</span>클라우드 통합 관제</h4>
              <ul>
                <li>• 웹/모바일 대시보드 실시간 현황 모니터링</li>
                <li>• 이상 상황 발생 시 담당자 즉각 SMS/푸시 알림</li>
                <li>• 원격 펌웨어 업데이트 및 파라미터 제어</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SubpageLayout>
  );
}

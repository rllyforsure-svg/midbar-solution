'use client';

import React from 'react';
import Link from 'next/link';

export default function CareersClient() {
  const positions = [
    {
      dept: 'R&D 연구소',
      title: '스마트 냉동공조 제어 시스템 엔지니어',
      type: '경력 / 신입',
      tags: ['PLC/HMI', '항온항습기/클린룸', 'IoT 모니터링'],
      description: '산업용 클린룸, 항온항습기 및 정밀 공조 시스템 제어 로직 설계, PLC 프로그래밍 및 현장 시운전 엔지니어링을 담당합니다.',
      requirements: ['전기/전자/제어계측 관련 전공자', 'PLC 및 자동제어 시스템 개발 경험자 우대', '현장 대응 및 문제 해결 능력']
    },
    {
      dept: '로보틱스 개발팀',
      title: '해양 자율운항 수상드론 연구원',
      type: '경력',
      tags: ['자율운항', '센서 융합(GPS/IMU/LiDAR)', 'ROS/임베디드'],
      description: '연안 및 내수면 자율 순찰/수질 관측 무인선(USV) 하드웨어 설계, 자율 항법 알고리즘 개발 및 실해역 테스트를 주도합니다.',
      requirements: ['로봇/기계/컴퓨터공학 관련 석사 이상 또는 유관 경력 3년 이상', 'ROS/ROS2, C++, Python 숙련자', '임베디드 제어기 설계 경험자 우대']
    },
    {
      dept: 'AI 솔루션팀',
      title: 'AI 지능형 비전 관제 소프트웨어 개발자',
      type: '경력 / 신입',
      tags: ['Computer Vision', 'Deep Learning', 'Web Dashboard'],
      description: 'CCTV 영상 기반 객체 감지/트래킹, 이상 상황 탐지 AI 모델 개발 및 웹 기반 실시간 통합 관제 대시보드를 구축합니다.',
      requirements: ['PyTorch, TensorFlow 딥러닝 프레임워크 활용 역량', 'React/Next.js 기반 웹 개발 경험자', '실시간 비디오 스트리밍 처리 기술 보유자 우대']
    },
    {
      dept: '사업기획팀',
      title: '국내외 기술영업 및 프로젝트 매니저(PM)',
      type: '경력',
      tags: ['공공/민간 프로젝트', '제안서 작성', '고객 커뮤니케이션'],
      description: '스마트 공조 설비 및 해양 드론 솔루션 비즈니스 기회 발굴, 제안서 작성 및 프로젝트 납품 관리를 총괄합니다.',
      requirements: ['공학 계열 전공 또는 B2B 기술영업 경력 2년 이상', '원활한 커뮤니케이션 및 프레젠테이션 역량', '국책 과제 또는 조달 프로젝트 유경험자 우대']
    }
  ];

  const benefits = [
    { icon: '⏰', title: '자율과 책임의 근무', desc: '유연근무제 및 시차출퇴근제로 워라밸을 존중합니다.' },
    { icon: '💻', title: '최고급 연구 장비', desc: '최신 사양 PC, 듀얼 모니터 및 첨단 실습 장비를 적극 지원합니다.' },
    { icon: '📚', title: '성장 & 교육 지원', desc: '직무 관련 세미나, 도서 구입비 및 자격증 취득 비용을 100% 지원합니다.' },
    { icon: '🏥', title: '건강 & 복지 케어', desc: '임직원 종합건강검진 지원 및 경조사비/경조휴가를 제공합니다.' },
    { icon: '☕', title: '스낵바 & 리프레시', desc: '고급 원두커피, 음료 및 무제한 간식이 상시 구비되어 있습니다.' },
    { icon: '🏆', title: '성과 보상 제도', desc: '프로젝트 기여도 및 성과에 따른 인센티브/성과급을 투명하게 지급합니다.' }
  ];

  return (
    <div className="careers-page-wrapper">
      {/* 1. Hero Section */}
      <section className="careers-hero-sec">
        <div className="container">
          <div className="careers-hero-badge">CAREERS</div>
          <h1 className="careers-hero-title">
            미래를 여는 혁신 기술,<br />
            <span>(주)미드바르 솔루션</span>과 함께할 인재를 모십니다.
          </h1>
          <p className="careers-hero-desc">
            스마트 냉동공조 인프라와 첨단 해양 자율운항 수상드론 기술을 융합하여<br />
            새로운 산업의 기준을 만들어갈 열정 넘치는 동료를 기다립니다.
          </p>
        </div>
      </section>

      {/* 2. Core Values */}
      <section className="careers-culture-sec">
        <div className="container">
          <h2 className="careers-section-title">인재상</h2>
          <p className="careers-section-subtitle">미드바르 솔루션이 추구하는 핵심 가치입니다.</p>

          <div className="culture-grid">
            <div className="culture-card">
              <span className="culture-num">01</span>
              <h3>기술 혁신 (Innovation)</h3>
              <p>기존의 틀을 깨고 새로운 기술과 솔루션을 적극적으로 탐구하며 실질적인 가치를 만들어내는 인재</p>
            </div>
            <div className="culture-card">
              <span className="culture-num">02</span>
              <h3>도전과 열정 (Challenge)</h3>
              <p>어려운 난관 앞에서도 주도적으로 해결책을 찾고 끊임없이 한계에 도전하는 열정적인 인재</p>
            </div>
            <div className="culture-card">
              <span className="culture-num">03</span>
              <h3>신뢰와 협업 (Trust & Teamwork)</h3>
              <p>동료를 존중하고 투명한 소통을 통해 공동의 목표를 향해 시너지를 발휘하는 신뢰 중심의 인재</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Positions */}
      <section className="careers-positions-sec">
        <div className="container">
          <h2 className="careers-section-title">채용 공고</h2>
          <p className="careers-section-subtitle">현재 적극적으로 영입 중인 포지션입니다.</p>

          <div className="positions-list">
            {positions.map((pos, idx) => (
              <div key={idx} className="position-card">
                <div className="pos-header">
                  <div className="pos-meta">
                    <span className="pos-dept">{pos.dept}</span>
                    <span className="pos-type">{pos.type}</span>
                  </div>
                  <h3 className="pos-title">{pos.title}</h3>
                  <div className="pos-tags">
                    {pos.tags.map((t, i) => (
                      <span key={i} className="pos-tag">#{t}</span>
                    ))}
                  </div>
                </div>

                <div className="pos-body">
                  <p className="pos-desc">{pos.description}</p>
                  <div className="pos-reqs">
                    <h4>자격 요건 및 우대사항</h4>
                    <ul>
                      {pos.requirements.map((req, i) => (
                        <li key={i}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pos-footer">
                  <a
                    href="mailto:recruit@midbarsolution.com?subject=[입사지원] "
                    className="pos-apply-btn"
                  >
                    지원하기
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="careers-benefits-sec">
        <div className="container">
          <h2 className="careers-section-title">복리후생</h2>
          <p className="careers-section-subtitle">임직원의 쾌적한 업무 환경과 성장을 아낌없이 지원합니다.</p>

          <div className="benefits-grid">
            {benefits.map((b, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section className="careers-contact-sec">
        <div className="container">
          <div className="careers-contact-box">
            <h2>채용 문의 및 상시 인재풀 등록</h2>
            <p>
              모집 중인 분야 외에도 미드바르 솔루션과 함께하고 싶으신 분들의 자유로운 상시 지원을 환영합니다.<br />
              이력서 및 포트폴리오를 아래 이메일로 보내주시면 검토 후 개별 연락드립니다.
            </p>
            <div className="careers-contact-links">
              <a href="mailto:recruit@midbarsolution.com" className="careers-email-btn">
                recruit@midbarsolution.com
              </a>
              <Link href="/support" className="careers-inquiry-btn">
                온라인 문의하기 &gt;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

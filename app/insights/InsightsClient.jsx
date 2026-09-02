'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function InsightsClient() {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', '스마트 냉동공조', '해양 수상드론', 'AI 융합 솔루션', '기업 뉴스'];

  const articles = [
    {
      id: 1,
      category: '스마트 냉동공조',
      tag: 'TECH INSIGHT',
      title: '반도체·제약 클린룸을 위한 초정밀 항온항습 제어 알고리즘과 에너지 30% 절감 방안',
      summary: '온도 ±0.1℃, 습도 ±1% 이내의 극한 제어를 유지하면서도 인버터 제어 및 폐열 회수 로직을 적용하여 전력 소모를 혁신적으로 줄이는 차세대 공조 엔지니어링 기법을 분석합니다.',
      date: '2026.08.20',
      readTime: '5 min read',
      badgeColor: '#154C78'
    },
    {
      id: 2,
      category: '해양 수상드론',
      tag: 'ROBOTICS REPORT',
      title: '연안 해양 환경 감시를 위한 다목적 자율운항 무인선(USV)의 센서 융합 및 실해역 실증',
      summary: 'GPS 음영 구역 극복을 위한 IMU-LiDAR 보정 항법과 LTE/RF 하이브리드 통신망을 기반으로 한 24시간 실시간 해상 순찰 시스템 운용 성과를 공유합니다.',
      date: '2026.08.12',
      readTime: '6 min read',
      badgeColor: '#0ea5e9'
    },
    {
      id: 3,
      category: 'AI 융합 솔루션',
      tag: 'AI APPLICATION',
      title: '산업 현장 안전사고 제로화를 위한 엣지 컴퓨팅 기반 실시간 지능형 영상 분석',
      summary: '작업자 쓰러짐, 보호구 미착용, 화재 전조 현상을 0.1초 내 감지하여 관제실로 즉시 전파하는 AI 비전 솔루션의 아키텍처와 구축 사례를 소개합니다.',
      date: '2026.07.28',
      readTime: '4 min read',
      badgeColor: '#6366f1'
    },
    {
      id: 4,
      category: '기업 뉴스',
      tag: 'NEWS',
      title: '(주)미드바르 솔루션, 2026 해양 스마트 모빌리티 혁신 기술 대상 수상',
      summary: '친환경 해양 자율운항 수상드론 개발 및 스마트 항만 순찰 시스템 상용화 성과를 인정받아 해양수산 미래 혁신기술 부문 대상을 수상하였습니다.',
      date: '2026.07.15',
      readTime: '3 min read',
      badgeColor: '#10b981'
    },
    {
      id: 5,
      category: '스마트 냉동공조',
      tag: 'CASE STUDY',
      title: '바이오 의약품 저온 물류창고(콜드체인) 온도 이탈 방지를 위한 실시간 Failsafe 백업 시스템',
      summary: '갑작스러운 전원 장애나 콤프레셔 이상 발생 시에도 정밀 온도를 유지하는 다중화 제어 시스템 구축 사례와 효과를 살펴봅니다.',
      date: '2026.06.30',
      readTime: '5 min read',
      badgeColor: '#154C78'
    },
    {
      id: 6,
      category: '해양 수상드론',
      tag: 'RESEARCH',
      title: '수상드론을 활용한 하천·호소 녹조 조기 탐지 및 3D 수질 오염 지도 모델링',
      summary: '다채널 분광 센서와 자동 채수 장치를 결합하여 수질 오염원의 이동 경로를 실시간 시각화하는 기술 개발 리포트입니다.',
      date: '2026.06.10',
      readTime: '7 min read',
      badgeColor: '#0ea5e9'
    }
  ];

  const filteredArticles = selectedCategory === 'ALL'
    ? articles
    : articles.filter(a => a.category === selectedCategory);

  return (
    <div className="insights-page-wrapper">
      {/* 1. Hero Section */}
      <section className="insights-hero-sec">
        <div className="container">
          <div className="insights-hero-badge">MIDBAR INSIGHTS</div>
          <h1 className="insights-hero-title">
            미래 산업을 선도하는<br />
            <span>기술 인사이트 & 연구 리포트</span>
          </h1>
          <p className="insights-hero-desc">
            스마트 냉동공조, 해양 무인 자율운항 로보틱스, AI 융합 제어 솔루션의<br />
            최신 연구 성과와 산업 트렌드를 깊이 있게 전해드립니다.
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="insights-content-sec">
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="insights-filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`insights-tab-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="insights-grid">
            {filteredArticles.map((article) => (
              <article key={article.id} className="insight-card">
                <div className="insight-card-top">
                  <span className="insight-tag" style={{ color: article.badgeColor, backgroundColor: `${article.badgeColor}15` }}>
                    {article.tag}
                  </span>
                  <span className="insight-date">{article.date}</span>
                </div>

                <h3 className="insight-title">{article.title}</h3>
                <p className="insight-summary">{article.summary}</p>

                <div className="insight-card-bottom">
                  <span className="insight-readtime">{article.readTime}</span>
                  <span className="insight-readmore">자세히 보기 &rarr;</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Newsletter / Contact CTA */}
      <section className="insights-cta-sec">
        <div className="container">
          <div className="insights-cta-box">
            <h2>미드바르 솔루션의 최신 기술 소식을 받아보세요</h2>
            <p>기술 협업, 제품 상담 및 연구 자료 요청은 언제든 편하게 문의해 주시기 바랍니다.</p>
            <div className="insights-cta-btns">
              <Link href="/support" className="insights-btn-primary">
                문의 및 기술 상담 신청
              </Link>
              <Link href="/products" className="insights-btn-secondary">
                제품 라인업 둘러보기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

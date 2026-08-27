import React from 'react';
import HeroSplitSection from '../components/HeroSplitSection';
import InteractiveDotMap from '../components/InteractiveDotMap';

export const metadata = {
  title: '홈 | (주)미드바르 솔루션',
  description: '스마트 냉동공조 솔루션 및 해양 자율운항 수상드론 전문 기업 (주)미드바르 솔루션 공식 웹사이트입니다.',
};

export default function HomePage() {
  return (
    <div className="home-page-container">
      {/* 1st Fold: Split Interactive Hero (냉동공조 vs 수상드론 호버 인터랙션) */}
      <HeroSplitSection />

      {/* 2nd Fold: Global Interactive Dot Map (도트 지도 & 진출 국가 인터랙션) */}
      <InteractiveDotMap />
    </div>
  );
}

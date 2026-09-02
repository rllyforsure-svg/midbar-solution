import React from 'react';
import InsightsClient from './InsightsClient';

export const metadata = {
  title: '인사이트 (INSIGHTS) | (주)미드바르 솔루션',
  description: '(주)미드바르 솔루션의 최신 기술 칼럼, 연구 성과 및 스마트 인프라 산업 인사이트를 공유합니다.',
};

export default function InsightsPage() {
  return <InsightsClient />;
}

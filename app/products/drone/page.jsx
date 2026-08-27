import React from 'react';
import SubpageLayout from '../../../components/SubpageLayout';

export const metadata = {
  title: '제품소개 - 해양 수상드론 | (주)미드바르 솔루션',
  description: '해양 환경 관측 및 자율 순찰 수상드론 제품군을 소개합니다.',
};

const products = [
  {
    title: 'M-Patrol 자율순찰 수상드론',
    description: '항만, 연안, 양식장 및 해양 시설물을 24시간 자율 순찰하며 실시간 침입 감지, 부유물 탐지 및 안전 감시를 수행하는 첨단 자율운항 무인선.',
    bgImage: '/images/hero-split-drone.jpg',
    stat1: { value: '항속시간', label: '최대 8시간 연속 운용' },
    stat2: { value: '통신거리', label: 'LTE/5G 무제한 + RF 10km' },
    keyApplications: ['항만 및 연안 보안 순찰', '해상 양식장 도난 방지', '해양 안전 사고 모니터링']
  },
  {
    title: 'M-Ocean 수질관측 수상드론',
    description: '다채널 고정밀 환경 센서를 탑재하여 강, 호수, 연안 해역의 수질 오염원 및 녹조·적조 발생 현황을 실시간 측정하고 3D 오염 지도를 생성하는 스마트 관측선.',
    bgImage: '/images/hero-drone.png',
    stat1: { value: '측정항목', label: '수온, pH, DO, 탁도, 전도도 등 8종' },
    stat2: { value: '샘플링', label: '자동 시수 채수 시스템 내장' },
    keyApplications: ['상수원 및 댐 수질 관리', '연안 환경 오염 모니터링', '적조 / 녹조 조기 경보']
  }
];

export default function DroneProductsPage() {
  return (
    <SubpageLayout
      type="products"
      activeTab="drone"
      title="해양 수상드론"
      description="해양 환경 관측 및 자율 순찰을 위한 최첨단 무인 수상로봇 제품군"
      productList={products}
    />
  );
}

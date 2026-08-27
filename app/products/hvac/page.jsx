import React from 'react';
import SubpageLayout from '../../../components/SubpageLayout';

export const metadata = {
  title: '제품소개 - 스마트 냉동공조 | (주)미드바르 솔루션',
  description: '클린룸 및 항온항습기 등 미드바르 솔루션의 고성능 정밀 냉동공조 제품군을 소개합니다.',
};

const products = [
  {
    title: '클린룸',
    description: '공기중의 부유 미립자가 규정된 청정도 이하로 관리되고, 또한 그 공간에 공급되는 재료, 약품, 물 등에 대해서도 요구되는 청정도가 유지되며, 필요에 따라서 온도/습도/압력 등의 환경조건에 대해서도 관리가 되는 공간',
    bgImage: '/images/cleanroom.jpg',
    keyApplications: ['바이오 클린룸', '산업용 클린룸']
  },
  {
    title: '항온 항습기',
    description: '정밀한 온·습도 유지가 필수적인 전산실, 데이터센터, 정밀 부품 가공실 및 바이오 실험실을 위한 24시간 365일 고신뢰성 정밀 공조 시스템',
    bgImage: '/images/products_auto.png',
    keyApplications: ['데이터센터 / 전산실', '정밀 측정실 / 연구소', '제약 / 바이오 생산 라인']
  }
];

export default function HvacProductsPage() {
  return (
    <SubpageLayout
      type="products"
      activeTab="hvac"
      title="클린룸"
      description="공기중의 부유 미립자가 규정된 청정도 이하로 관리되고 환경조건이 유지되는 정밀 공간"
      productList={products}
    />
  );
}

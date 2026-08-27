'use client';

import React from 'react';

export default function SupportClient() {
  const [formData, setFormData] = React.useState({
    companyName: '',
    contactPerson: '',
    phoneNumber: '',
    email: '',
    interests: [],
    inquiryBody: '',
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    let lastScrollTime = 0;

    const handleWheel = (e) => {
      if (window.innerWidth < 1024 || window.innerHeight < 850) {
        return;
      }

      if (Math.abs(e.deltaY) < 15) return;

      const now = Date.now();
      if (now - lastScrollTime < 1200) {
        e.preventDefault();
        return;
      }

      const sectionHeight = window.innerHeight;
      const snapPoints = [0, sectionHeight];

      const currentScroll = window.scrollY;
      let currentIndex = 0;
      let minDiff = Infinity;
      for (let i = 0; i < snapPoints.length; i++) {
        const diff = Math.abs(currentScroll - snapPoints[i]);
        if (diff < minDiff) {
          minDiff = diff;
          currentIndex = i;
        }
      }

      if (e.deltaY > 0) {
        if (currentIndex < snapPoints.length - 1) {
          e.preventDefault();
          lastScrollTime = now;
          window.scrollTo({
            top: snapPoints[currentIndex + 1],
            behavior: 'smooth'
          });
        }
      } else {
        if (currentIndex > 0) {
          e.preventDefault();
          lastScrollTime = now;
          window.scrollTo({
            top: snapPoints[currentIndex - 1],
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updatedInterests = checked
        ? [...prev.interests, value]
        : prev.interests.filter((item) => item !== value);
      return { ...prev, interests: updatedInterests };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert('문의가 성공적으로 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.');
      setFormData({
        companyName: '',
        contactPerson: '',
        phoneNumber: '',
        email: '',
        interests: [],
        inquiryBody: '',
      });
      setIsSubmitting(false);
    }, 600);
  };

  return (
    <div className="support-page-wrapper">
      {/* 1. 문의하기 Section */}
      <section className="support-section support-sec-form">
        <div className="support-section-container">
          <h1 className="support-section-title">문의하기</h1>
          <p className="support-section-subtitle">궁금하신 사항을 남겨주시면 최대 2일 내 전문 엔지니어가 연락드립니다.</p>

          <form className="support-form-card" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="companyName">회사명</label>
                <input 
                  type="text" 
                  id="companyName" 
                  value={formData.companyName} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="contactPerson">담당자 성함/직책</label>
                <input 
                  type="text" 
                  id="contactPerson" 
                  value={formData.contactPerson} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">연락처</label>
                <input 
                  type="tel" 
                  id="phoneNumber" 
                  value={formData.phoneNumber} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">이메일</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email} 
                  onChange={handleInputChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group full-width">
              <label>관심분야</label>
              <div className="form-checkbox-group">
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    name="interest" 
                    value="hvac" 
                    checked={formData.interests.includes('hvac')} 
                    onChange={handleCheckboxChange} 
                  />
                  <span>스마트 냉동공조</span>
                </label>
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    name="interest" 
                    value="drone" 
                    checked={formData.interests.includes('drone')} 
                    onChange={handleCheckboxChange} 
                  />
                  <span>해양 자율운항 수상드론</span>
                </label>
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    name="interest" 
                    value="cleanroom" 
                    checked={formData.interests.includes('cleanroom')} 
                    onChange={handleCheckboxChange} 
                  />
                  <span>클린룸 / 항온항습기</span>
                </label>
                <label className="checkbox-item">
                  <input 
                    type="checkbox" 
                    name="interest" 
                    value="ai" 
                    checked={formData.interests.includes('ai')} 
                    onChange={handleCheckboxChange} 
                  />
                  <span>AI 지능형 관제 솔루션</span>
                </label>
              </div>
            </div>

            <div className="form-group full-width">
              <label htmlFor="inquiryBody">어떤 문의가 있으신가요?</label>
              <textarea 
                id="inquiryBody" 
                rows="3" 
                value={formData.inquiryBody} 
                onChange={handleInputChange} 
                required 
              ></textarea>
            </div>

            <div className="form-submit-row">
              <button 
                type="submit" 
                className="form-submit-btn" 
                disabled={isSubmitting}
              >
                {isSubmitting ? '전송 중...' : '문의접수'}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 2. 오시는 길 Section */}
      <section className="support-section support-sec-map">
        <div className="support-section-container">
          <h1 className="support-section-title">오시는 길</h1>

          <div className="support-map-placeholder">
            <iframe
              src="https://maps.google.com/maps?q=35.1678021408768,128.9545546530673&t=&z=18&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <table className="support-directions-table">
            <thead>
              <tr>
                <th style={{ width: '20%' }}>구분</th>
                <th style={{ width: '80%' }}>오시는 방법</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge-subway">지하철</span></td>
                <td>부산-김해경전철 <strong>서부산유통지구역</strong> 하차 ➔ 도보 이동</td>
              </tr>
              <tr>
                <td><span className="badge-bus">버스</span></td>
                <td><strong>서부산유통지구역</strong> 정류장 하차 ➔ 도보 3분</td>
              </tr>
              <tr>
                <td><span className="badge-car">자가용</span></td>
                <td>내비게이션에 <strong>(주)미드바르 솔루션</strong> 또는 <strong>부산 강서구 명지</strong> 검색</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

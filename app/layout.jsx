import './globals.css';
import Header from '../components/Header';
import Link from 'next/link';

export const viewport = {
  themeColor: '#0c2340',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: {
    default: '(주)미드바르 솔루션 - 스마트 냉동공조 & 해양 자율운항 수상드론',
    template: '%s | (주)미드바르 솔루션'
  },
  description: '(주)미드바르 솔루션은 첨단 스마트 냉동공조 제어 시스템과 해양 자율운항 수상드론 기술을 선도하는 혁신 기술 기업입니다.',
  keywords: ['미드바르', '미드바르솔루션', 'MIDBAR', '냉동공조', '스마트공조', '클린룸', '항온항습기', '수상드론', '해양드론'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {/* Dynamic Header Bar */}
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        {/* Footer Bar (Seaontech 4-Column Design System) */}
        <footer className="main-footer">
          <div className="container footer-grid-container">
            <div className="footer-grid">
              {/* 1. Logo Column */}
              <div className="footer-col brand-logo-col">
                <Link href="/" style={{ display: 'inline-block', textDecoration: 'none' }}>
                  <img
                    src="/images/logo-white.svg"
                    alt="MIDBAR SOLUTION"
                    style={{ height: '38px', width: 'auto', display: 'block' }}
                  />
                </Link>
              </div>

              {/* 2. Text (Slogan & Description) Column */}
              <div className="footer-col brand-desc-col">
                <h4 className="footer-tagline">MIDBAR SOLUTION</h4>
                <p className="footer-desc">
                  (주)미드바르 솔루션은 스마트 냉동공조 인프라와 친환경 해양 자율운항 수상드론 기술을 융합하여 혁신적인 미래 산업 가치를 창출합니다.
                </p>
                <p className="footer-copyright">
                  &copy; 2026 (주)미드바르 솔루션 Midbar Solution. All Rights Reserved.
                </p>
              </div>

              {/* 3. Contact Column */}
              <div className="footer-col contact-col">
                <h3 className="footer-col-title">Contact</h3>
                <div className="footer-contact-info">
                  <p><span>T</span> 051-123-1234</p>
                  <p><span>F</span> 051-123-1234</p>
                  <p><span>E</span> 123@midbarsolution.com</p>
                  <p className="contact-address"><span>A</span> 부산 강서구 명지국제6로 21 도형건설, 403호</p>
                </div>
              </div>

              {/* 4. Corporate Column */}
              <div className="footer-col corporate-col">
                <h3 className="footer-col-title">Corporate</h3>
                <div className="footer-corporate-info">
                  <p><span>사업자번호</span> 123-45-67890</p>
                  <div className="footer-legal-links">
                    <Link href="/support" className="legal-link bold">개인정보처리방침</Link>
                    <Link href="/support" className="legal-link">이용약관</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <a href="#" className="footer-scroll-top-btn" aria-label="Scroll to top">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="top-arrow-icon">
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}

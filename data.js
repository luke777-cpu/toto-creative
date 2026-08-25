/**
 * 토토기획 가격 데이터 — 페이지 곳곳에 가격을 하드코딩하지 않기 위한 단일 출처.
 * price.html 이 이 배열을 읽어 가격표를 그린다.
 */
window.TOTO_PRICING = [
  {
    tag: "WEB · BASIC",
    tier: "홈페이지 기본형",
    price: "50만원부터",
    features: ["1~3페이지", "모바일 대응", "기본 디자인", "문의 연결"],
    featured: false
  },
  {
    tag: "WEB · STANDARD",
    tier: "홈페이지 표준형",
    price: "100만원부터",
    features: ["5페이지 내외", "맞춤 디자인", "포트폴리오/서비스 구성", "검색 기본 설정"],
    featured: true
  },
  {
    tag: "BRAND",
    tier: "로고",
    price: "20만원부터",
    features: ["브랜드 로고 디자인", "기본 사용 가이드", "수정 2회"],
    featured: false
  },
  {
    tag: "PRINT",
    tier: "포스터 / 배너",
    price: "5만원부터",
    features: ["1종 디자인", "인쇄용 파일 전달", "기본 수정 2회"],
    featured: false
  }
];

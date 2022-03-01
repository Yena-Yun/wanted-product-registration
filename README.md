# wanted-product-registration

## 🥽 배포 링크

<h2><a href='https://trusting-montalcini-7ac111.netlify.app'>https://trusting-montalcini-7ac111.netlify.app/</a></h2>

## 🚩 노션 주소

<h2><a href='https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f'>https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f</a></h2>

## 🔮 역할 배분

⚜ 윤예나

- 3번 카테고리 기능 구현
  - 체크박스 클릭 시 우측에 태그 생성
  - 태그 클릭 시 해당된 체크박스 해제
  - 체크박스 클릭 시 우측의 태그 해제
- common 폴더의 공통 뷰 컴포넌트 작성 (Grid, Button, Input 등)
- 16~20번 토글 스위치 버튼 구현 (common 폴더의 Switch.js) <br/> 

⚜ 안병진 
  - 상품 이미지 첨부
  <br/>
  
  ⚜ 박민주  <br/>
- 상품 정보 고시

 ⚜ 이지용<br/>
- 검색 필터 태그

## 🧶 설치 및 시작하는 법

```
설치
npm run build

시작
npm run start
```

## 📁 디렉토리 구조

```
.
├── App.jsx
├── assets
├── common      // 공통 스타일 컴포넌트
├── components		// 프로젝트 구성 컴포넌트
│   ├── Category.js   // 카테고리
│   └── ...
├── pages		  // 프로젝트 구성 페이지
│   ├── BasicInfo.js
│   ├── ProductImage.js
│   ├── ProductNoticeInfo.js
│   ├── ProductOption.js
│   └── ProductsPeriodSetting.js
├── styles
│   ├── App.css		// css 초기 설정
│   └── palette.js	// 테마 색 설정
└── utils
    ├── categoryData.js	
    └── ...
```

### 🛶 문제 해결 로그

#### 문제
px로 컴포넌트 박스 구현 시 모니터 크기에 따라 박스 크기의 비율이 달라지는 현상을 발견하였습니다.

#### 해결
px 대신 rem 개념을 사용하여 최상위 root 태그의 font-size를 모니터 크기별로 반응형으로 적용하였습니다.

```jsx
// App.css

#root {
  font-size: 16px; // root에서 font-size를 지정하였습니다.
}

// 미디어 쿼리를 통해 서로 다른 모니터 크기에 따라 root의 font-size가 다르게 적용되도록 하였습니다.
@media screen and (max-width: 1500px) {
  #root {
    font-size: 18px;
  }
}
@media screen and (max-width: 2550px) {
  #root {
    font-size: 20px;
  }
}

// 예: width를 40rem이라고 하면 각 모니터에 적용된 font-size에 따라 width의 전체 px 값이 결정됨
```

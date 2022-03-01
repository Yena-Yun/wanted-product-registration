# wanted-product-registration

## 👛 배포 링크
## https://trusting-montalcini-7ac111.netlify.app/
(카테고리 기능은 2번째 페이지에 있습니다 - '다음'을 한번 클릭)

## [velog 카테고리 구현 후기](https://velog.io/@yena1025/PreOnboarding2-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B3%BC%EC%A0%9C-%ED%9B%84%EA%B8%B0)

## 🔮 역할 배분

⚜ 윤예나

- BasicInfo 페이지의 카테고리 & 태그 기능
  - 체크박스 추가 시 연동된 태그 생성
  - 태그 삭제 시 연동된 체크박스 해제
  - 체크박스 해제 시 연동된 태그 해제
- 공통 뷰 컴포넌트 작성 (src/common)
- NoticeInfo 페이지의 토글 버튼 (src/common/Switch.js) <br/> 

⚜ 안병진 - 상품 이미지 첨부 <br/> 
⚜ 박민주 - 상품 정보 고시 <br/> 
⚜ 이지용 - 검색 필터 태그 <br/> 

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
├── assets
├── common      // 공통 스타일 컴포넌트
│   ├── Switch.js     // 토글 버튼
│   └── ...
├── components		
│   ├── Category.js     // 카테고리 (+ 태그)
│   └── ...
├── pages		  
│   ├── BasicInfo.js    // 카테고리 포함된 페이지
│   └── ...
├── styles   // reset.css 및 테마 설정
└── utils
    ├── categoryData.js	   // 카테고리 텍스트 상수화
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

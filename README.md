# wanted-product-registration

## 🥽 배포 링크

<h2><a href='https://luckyzzang-product-registration.netlify.app/'>https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f</a></h2>

## 🚩 노션 주소

<h2><a href='https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f'>https://somber-sunset-e11.notion.site/_-_-b96ebb328d044f718f228de869934e0f</a></h2>

## 🔮 역할 배분

⚜ 박민주 --- <br/>
⚜ 윤예나 
- 3번 카테고리 기능 구현 (체크박스 클릭 시 우측에 태그 생성, 태그 클릭 시 해당된 체크박스 해제, 체크박스 클릭 시 우측의 태그 해제) 
- common 폴더의 공통 뷰 컴포넌트 작성 (Grid, Button, Input 등)
- 16~20번 토글 스위치 버튼 구현 (common 폴더의 Switch.js)
<br/>
⚜ 안병진 --- <br/>
⚜ 이지용 --- 4(필터 태그 기능), 5(상품명, 상품 코드), 6(상품 구성 소개 정보), 9(상품 총 재고)<br/>

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
│   └── deleteIcon.png	// x 버튼 이미지
├── common
│   ├── Button.js	// Button styled 컴포넌트
│   ├── Checkbox.js	// Checkbox styled 컴포넌트
│   ├── Grid.js		// Grid styled 컴포넌트
│   ├── Input.js	// Input styled 컴포넌트
│   ├── Switch.js	// Switch styled 컴포넌트
│   ├── Text.js		// Text styled 컴포넌트
│   └── index.js
├── components		// 프로젝트 구성 컴포넌트
│   ├── Category.js
│   ├── FilterTag
│   │   ├── FilterTag.js
│   │   ├── SearchTag.js
│   │   └── SelectedTag.js
│   ├── Header.js
│   ├── ImageUpload.js
│   ├── Layout.js
│   ├── Navbar.js
│   ├── ProductImage.js
│   ├── ProductInfo.js
│   ├── ProductNoticeInfo
│   │   ├── NoticeInfo.js
│   │   ├── OfferThankCard.js
│   │   ├── ProductOptionToggle.js
│   │   ├── ProductShppingSetting.js
│   │   ├── SaveMileage.js
│   │   └── index.js
│   ├── ProductPeriod.js
│   ├── ProductRest.js
│   ├── Sidebar.js
│   ├── SubHeader.js
│   └── index.js
├── index.js
├── pages		// 프로젝트 구성 페이지
│   ├── BasicInfo.js
│   ├── ProductImage.js
│   ├── ProductNoticeInfo.js
│   ├── ProductOption.js
│   ├── ProductsPeriodSetting.js
│   └── index.js
├── styles
│   ├── App.css		// css 초기 설정
│   └── palette.js	// 색 설정 값
└── utils
    ├── categoryData.js			// category Data 자료
    ├── pickers
    │   ├── DatePicker.js
    │   └── DateRangePicker.js
    └── tagData.js			// filter tag Data 자료
```

### ✅ 과제에 제시된 요구사항 모두 구현

- <br/>

### ✅ 추가 구현사항

-

# 🏥 Lululab hospital reservation system

### JUSTCODE 6기 기업협업 개인과제 - 룰루랩 병원 예약 시스템

<br />

### **[📌 배포 링크](https://2021bong.github.io/lululab-hospital-reservation-system/)**

<br />

## 💡 과제 설명

1. 해당 월에 예약 가능한 목록을 보여줍니다.
2. 예약자, 이름, 예약 시간, 예약 종류를 이용하여 예약합니다.
3. 중복 예약은 불가합니다.
4. 노쇼 예약자는 예약이 불가합니다.
5. 예약 번호나 예약자 이름으로 예약 목록 조회가 가능해야 합니다.

<br />

---

<br />

## 🗓 개발 기간

<br />

**기간** : 2022.10.15 ~ 2022.10.19
<br />
<br />

---

<br />

## 🚧 프로그램 실행 방법 및 프로젝트 파일 구조

  <br />

### 프로그램 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/2021bong/lululab-hospital-reservation-system.git
```

<br />

2.  클론 받은 폴더로 이동해 패키지를 다운 받습니다.

```
npm i
```

<br />

3.  프로젝트를 실행합니다.

```
npm run dev
```

<br />

4. 브라우저가 켜지고 프로젝트를 확인 할 수 있습니다.
   <br />
   <br />
   <br />

### 프로젝트 파일 구조

- `public/data`: Mock 데이터 폴더
- `src/pages/reservation`: 예약 페이지 파일 폴더
- `src/pages/inquiry`: 예약 조회 페이지 파일 폴더
- `src/utils`: 함수 파일 폴더
- `src/styles`: 전역 스타일 폴더
  <br />
  <br />

---

<br />

## 🛠 적용 기술

<br />

- JavaScript

- React.js

<br />

- React 관련 라이브러리

  - react-router-dom

  - recoil

<br />

- 스타일링

  - styled-components

  - styled-reset

<br />

- 아이콘

  - react-icons

<br />

- 달력

  - react-datepicker

  - date-fns

<br />

- 통신

  - axios


<br />

---

<br />

## ✨ 구현 화면 및 기능

<br />

### 1️⃣ 메인 화면

<br />

메인 화면에서 버튼을 클릭하면 진료 예약이나 예약 조회 페이지로 이동할 수 있습니다.

<img width="1000" alt="메인 화면" src="https://user-images.githubusercontent.com/49029756/196645556-e3bf0695-cc80-44aa-995d-b5e2b4b51c94.png">

<br />
<br />
<br />

마우스 호버시에 버튼이 붉은색으로 변합니다.

<img width="1000" alt="메인 화면 버튼 호버" src="https://user-images.githubusercontent.com/49029756/196645511-b2d3b317-3f1c-4754-9de2-35e28c073d91.png">

<br />
<br />
<br />
<br />
<br />

### 2️⃣ 예약 화면

<br />

예약하려는 날짜와 시간을 선택할 수 있습니다. 예약 가능한 일정만 선택할 수 있습니다.

<img width="1000" alt="진료 예약 시간 선택" src="https://user-images.githubusercontent.com/49029756/196645528-433c20a1-c554-4e7c-a992-b3a5b3b67591.png">

<img width="1000" alt="달력에서 예약 가능한 날짜만 선택할 수 있습니다." src="https://user-images.githubusercontent.com/49029756/196647660-4be1f80b-c68b-4c52-9891-fe61dbee3e57.png">

<br />
<br />
<br />

날짜와 시간을 선택하면 개인 정보를 입력하는 페이지로 이동합니다.

<img width="1000" alt="예약 정보 입력 화면" src="https://user-images.githubusercontent.com/49029756/196645521-3b6264cd-8b9f-4daf-adf3-5ab263b3ee69.png">

<br />

이름과 전화번호는 필수로 입력하지 않으면 예약이 불가능합니다.
<img width="1000" alt="이름과 전화번호를 모두 입력해주세요." src="https://user-images.githubusercontent.com/49029756/196645484-3e7f8eae-3d37-49a8-94da-fde88667dff8.png">

<br />

예약 불가 리스트에 올라가있는 예약자 이름과 전화번호는 예약이 불가능합니다.

<img width="1000" alt="노쇼 예약자는 예약 불가합니다." src="https://user-images.githubusercontent.com/49029756/196645544-c4dc5ff9-57b6-4560-89d2-a5679b0d5cfa.png">

<br />
<br />
<br />

예약이 완료되면 예약번호와 입력정보를 확인할 수 있습니다.

<img width="1000" alt="예약 완료 화면" src="https://user-images.githubusercontent.com/49029756/196645536-3cb00fd4-1c4c-4c8e-92ff-df3f48a4fe36.png">

<br />
<br />
<br />
<br />
<br />

### 3️⃣ 조회 화면

<br />

예약자 이름으로 예약 내역을 조회할 수 있습니다.
<img width="1000" alt="홍길동 예약 내역 조회" src="https://user-images.githubusercontent.com/49029756/196645516-02c35c51-5c36-42a7-9d65-e3c3fb010249.png">

<br />

예약번호로 예약 내역을 조회할 수 있습니다.
<img width="1000" alt="예약번호로 예약 내역 조회" src="https://user-images.githubusercontent.com/49029756/196646681-bae127c0-2d01-4b0d-b9a9-ec961a6369c8.png">

<br />
<br />
<br />

예약 내역이 없을 시 결과가 없다는 화면이 뜹니다.
<img width="1000" alt="예약 내역 없음" src="https://user-images.githubusercontent.com/49029756/196645531-e4ccaade-cf07-4aa2-9c86-457e07822931.png">

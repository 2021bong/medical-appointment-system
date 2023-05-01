# 🏥 Medical Appointment System

<br />

## 🚧 프로젝트 실행 방법

<br />

1.  터미널을 키고 원하는 폴더 경로로 이동해 레포지토리를 클론 받습니다.

```
git clone https://github.com/2021bong/medical-appointment-system.git
```

<br />

2.  클론 받은 폴더로 이동해 패키지를 다운 받습니다. (Node.js가 필요합니다.)

```
cd medical-appointment-system
npm install
```

<br />

3.  프로젝트를 실행합니다.

```
npm run dev
```

<br />

4. 해당 주소에서 프로젝트를 확인할 수 있습니다.

```
http://localhost:5173/medical-appointment-system/
```

  <br />

---

<br />

## 🛠 사용 기술 및 프로젝트 구조

<br />

- 사용 기술

```
Vite
React.js
recoil

```

<br />

- 프로젝트 구조

```
├── .gitignore
├── .prettierrc
├── PULL_REQUEST_TEMPLATE.md
├── README.md
├── index.html
├── node_modules
├── package-lock.json
├── package.json
├── public
│   ├── data
│   │   ├── blackList.json
│   │   └── reservation.json
│   └── hospital.png
├── src
│   ├── App.jsx
│   ├── Router.jsx
│   ├── atoms.js
│   ├── main.jsx
│   ├── pages
│   │   ├── inquiry
│   │   │   ├── Inquiry.jsx
│   │   │   └── Inquiry.styled.js
│   │   └── reservation
│   │       ├── Reservation.jsx
│   │       └── components
│   │           ├── FirstStep.jsx
│   │           ├── FirstStep.styled.js
│   │           ├── SecondStep.jsx
│   │           ├── SecondStep.styled.js
│   │           ├── ThirdStep.jsx
│   │           └── ThirdStep.styled.js
│   ├── styles
│   │   ├── GlobalStyle.js
│   │   └── theme.js
│   └── utils
│       └── time.js
└── vite.config.js
```

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

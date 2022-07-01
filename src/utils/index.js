const getInitialData = () => [
  {
    id: 1,
    title: `Apa itu React?`,
    body: `React adalah library JavaScript yang deklaratif, efisien, dan fleksibel untuk membangun antarmuka pengguna. React memungkinkan Anda untuk membuat antarmuka kompleks dari kumpulan kode yang kecil dan terisolasi yang disebut “komponen”.`,
    createdAt: "2022-07-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 2,
    title: `Apa itu Partyjs`,
    body: `Partyjs adalah salah satu library JavaScript pihak ketiga untuk memberi animasi "Brighten up" ke pengalaman situs pengguna Anda dengan efek visual!`,
    createdAt: "2022-07-01T04:27:34.572Z",
    archived: false,
  },
  {
    id: 3,
    title: `Apa itu Sweetalert2`,
    body: `SweetAlert merupakan salah satu library js pihak ketiga yang banyak digunakan pada situs untuk mempercantik poup atau alert dari JavaScript. SweetAlert atau swal memberikan banyak kemudahan dalam menggunakan nya yaitu hanya dengan membuat kode singkat yang mirip dengan alert bawaan dari javascript. `,
    createdAt: "2022-07-01T04:27:34.572Z",
    archived: false,
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export { getInitialData, showFormattedDate };

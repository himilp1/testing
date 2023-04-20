import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

export async function getUserImages(userId) {
    const storage = getStorage();
    const folderPath = `users/${userId}/plants`;
    const folderRef = ref(storage, folderPath);
    const imageUrls = [];

    const { items } = await listAll(folderRef);
    for (const item of items) {
        const url = await getDownloadURL(item);
        imageUrls.push({ id: item.name, pinSize: 'medium', img: url });
    }
    return imageUrls;
}



// import plant1 from './img/plant1.jpeg';
// import plant2 from './img/plant2.jpeg';
// import plant3 from './img/plant3.jpeg';
// import plant4 from './img/plant4.jpeg';
// import plant5 from './img/plant5.jpeg';
// import plant6 from './img/plant6.jpeg';
// import plant7 from './img/plant7.jpeg';

// const data = [
//     { id: 1, pinSize: "medium", img: plant1 },
//     { id: 2, pinSize: "small", img: plant2 },
//     { id: 3, pinSize: "small", img: plant3 },
//     { id: 4, pinSize: "large", img: plant4 },
//     { id: 5, pinSize: "medium", img: plant5 },
//     { id: 6, pinSize: "small", img: plant6 },
//     { id: 7, pinSize: "large", img: plant7 },
// ];

// export default data;
// import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

// export async function getUserImages(userId) {
//     const storage = getStorage();
//     const folderPath = `users/${userId}/plants`;
//     const folderRef = ref(storage, folderPath);
//     const imageUrls = [];

//     const { items } = await listAll(folderRef);
//     for (const item of items) {
//         const url = await getDownloadURL(item);
//         imageUrls.push({ id: item.name, pinSize: 'medium', img: url });
//     }
//     return imageUrls;
// }

// async function fetchUserData(userId) {
//   const storage = getStorage();
//   const folderPath = `users/${user}/plants`;
//   const folderRef = ref(storage, folderPath);
//   const imageUrls = [];

//   const { items } = await listAll(folderRef);
//   for (const item of items) {
//     const url = await getDownloadURL(item);
//     imageUrls.push(url);
//   }

//   return imageUrls.map((url, index) => ({
//     id: index + 1,
//     pinSize: 'medium', // You can customize this value as needed
//     img: url,
//   }));
// }

// export default fetchUserData;

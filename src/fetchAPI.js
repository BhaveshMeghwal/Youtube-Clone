// // import axios from "axios"
// const axios = require("axios");

// const BASE_URL = 'https://youtube-v3-alternative.p.rapidapi.com/video';
// const options = {
// //   method: 'GET',
//   url: BASE_URL,
//   params: {id: 'dQw4w9WgXcQ'},
//   headers: {
//     'X-RapidAPI-Key': 'a80e7b994dmsh426bf79edf2c292p1f27d8jsncf87f6214b71',
//     'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// export const fetchAPI= async (url) => {
//    const {data} =  await axios.get(`${BASE_URL}/${url}`,
//     options);
//     return data;
// }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a80e7b994dmsh426bf79edf2c292p1f27d8jsncf87f6214b71',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

fetch('https://youtube-v3-alternative.p.rapidapi.com/video?id=dQw4w9WgXcQ', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

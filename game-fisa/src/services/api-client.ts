import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:'b9cbc9f1885f4607800d9b070247b417'}
})

// import axios from 'axios';

// const API_KEY = 'b9cbc9f1885f4607800d9b070247b417';

// // Function to fetch games
// const fetchGames = async () => {
//   try {
//     const response = await axios.get('https://api.rawg.io/api/games', {
//       params: {
//         key: API_KEY,
//         // Add any additional query parameters or filters here
//       },
//     });

//     // Return the data from the response
//     return response.data;
//   } catch (error) {
//     // Handle any errors that occurred during the request
//     console.error('Error fetching games:', error);
//     throw error;
//   }
// };

// export default fetchGames;

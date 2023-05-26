import axios from "axios";

async function fetchFromApi(url, params) {
  const options = {
    method: "GET",
    url: `https://youtube-v31.p.rapidapi.com/${url}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_API_KEY,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export default fetchFromApi
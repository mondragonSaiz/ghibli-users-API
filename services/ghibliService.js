const axios = require("axios");

const GHIBLI_API_URL = "https://ghibliapi.vercel.app";

exports.getGhibliData = async (role) => {
  const endpoint = {
    films: "/films",
    people: "/people",
    locations: "/locations",
    species: "/species",
    vehicles: "/vehicles",
  }[role];

  if (!endpoint) throw new Error("Invalid role");

  const { data } = await axios.get(`${GHIBLI_API_URL}${endpoint}`);
  return data;
};

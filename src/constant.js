export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34503215",
    bl_lng: "25324261",
    tr_lat: "42869652",
    tr_lng: "44552871",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "937115946amsh313633b3451c2aep10b6c1jsnbbaf8d60e3c7",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};

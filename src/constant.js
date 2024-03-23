export const options = {
  method: "GET",
  url: "https://flight-radar1.p.rapidapi.com/flights/list-in-boundary",
  params: {
    bl_lat: "34.503215",
    bl_lng: "25.324261",
    tr_lat: "42.869652",
    tr_lng: "44.552871",
    limit: "300",
  },
  headers: {
    "X-RapidAPI-Key": "d40819b62dmshbf098c90268757cp1abe88jsnb9dde87956c3",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
  },
};


export const options2= {
  headers: {
    "X-RapidAPI-Key": "d40819b62dmshbf098c90268757cp1abe88jsnb9dde87956c3",
    "X-RapidAPI-Host": "flight-radar1.p.rapidapi.com",
}}
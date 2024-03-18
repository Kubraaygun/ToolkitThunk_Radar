export const options = {
  method: 'GET',
  url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
  params: {
    bl_lat: '34.503215',
    bl_lng: '25.324261',
    tr_lat: '42.869652',
    tr_lng: '44.552871',
    limit: '300'
  },
  headers: {
    'X-RapidAPI-Key': 'b3cfd04374msh4eb45ee4f1d0c8dp1ead6fjsnfe67f330b395',
    'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
  }
};

	
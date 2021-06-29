//API key
axios
  .get(
    'https://holidays.abstractapi.com/v1/?api_key=a9f2c6918fa94295b745761715a0df3b&country=UA&year=2021&month=06&day=28'
  )
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });

//X-Mashape-Key
const options = {
  method: 'GET',
  url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/classes/warrior',
  params: { cost: '10', collectible: '1' },
  headers: {
    'x-rapidapi-key': '413a05f141msha82897928416aa4p1cbfcbjsn22161f8f221c',
    'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

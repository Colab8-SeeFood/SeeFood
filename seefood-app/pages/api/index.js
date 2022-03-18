export default function handler(req, res) {
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'fsq3HnyAAN42TYg0iCDYeEQNPxEBQRfbZOMJ1LuhoAvcF3c='
        }
      };
      
      fetch('https://api.foursquare.com/v3/places/search?ll=37.773330%2C-122.418460&radius=1000&categories=13065&open_now=true&sort=DISTANCE&limit=2', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    res.status(200).json()
}
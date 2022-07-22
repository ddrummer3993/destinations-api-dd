import axios from 'axios';


// GET helpers

function filterObj({ objToFilter: obj, filterValue }) {
    const filteredObj = {};
  
    for(const prop in obj) {
      if (obj[prop].location.toLowerCase() === filterValue.toLowerCase()) {
        filteredObj[prop] = obj[prop]
      }
    }
  
    return filteredObj;
  }

export function filterDestinations({city, destinationsDB, res}) {
    try {
      if(city !== undefined) {
        const filteredDests = filterObj({
          objToFilter: destinationsDB, filterValue: city
        });
        return res.send(filteredDests)
      } else {
        return res.send(destinationsDB);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // POST helpers

  export async function getUnsplashPhoto({ destName, locName }) {
    // Use destName and locName as query parameters to get a photo related to them from the Unsplash API
    const URL = `https://api.unsplash.com/search/photos?client_id=zPyO6m0ezgkOS-Tc0Co64-y6MqTXCULFL-TcXfxBrLc&query=${destName} ${locName}`;
  
    // TODO Use the URL to fetch photos from Unsplash and log those photos
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const allPhotos = data.results;
    //     const randIdx = Math.floor(Math.random() * allPhotos.length);
    //     const randPhoto = allPhotos[randIdx];
    //     return randPhoto;
    //   });
  
    const response = await axios.get(URL);
  
    const allPhotos = await response.data.results;
    const randIdx = Math.floor(Math.random() * allPhotos.length);
    const randPhoto = allPhotos[randIdx];
  
    if (randPhoto === undefined) {
      return "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155666.jpg&fm=jpg";
    }
    return randPhoto.urls.thumb;
  }
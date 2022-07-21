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
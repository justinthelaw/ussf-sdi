const locationData = [
  { cityName: 'Naples', state: 'Florida', averageTemp: 76, airport: false, previouslyHostedOlympics: false },
  { cityName: 'Minneapolis', state: 'Minnesota', averageTemp: 55, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Los Angeles', state: 'California', averageTemp: 90, airport: false, previouslyHostedOlympics: false },
  { cityName: 'Milwaukee', state: 'Wisconsin', averageTemp: 43, airport: false, previouslyHostedOlympics: true },
  { cityName: 'New York City', state: 'New York', averageTemp: 62, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Anchorage', state: 'Alaska', averageTemp: 33, airport: true, previouslyHostedOlympics: false },
  { cityName: 'Seattle', state: 'Washington', averageTemp: 72, airport: false, previouslyHostedOlympics: true },
  { cityName: 'Portland', state: 'Oregon', averageTemp: 40, airport: false, previouslyHostedOlympics: true }
]

// I want all city and states - formatted like 'City, State'
const listingMethod = (filterResult) => filterResult.map(city => {
  return `${city.cityName}, ${city.state}`
})

// I want all city names where the average temp is below 50 degrees

const coldCities = locationData.filter(city => city.averageTemp < 50)


console.log('Cities below 50 degrees: ', listingMethod(coldCities));

// I'd like the average temperature of the listed cities

// const cityTemps = locationData.map(city => {return city.averageTemp})

const cityAvgTemps = locationData.reduce((a, b) => (a + b.averageTemp), 0) / locationData.length

console.log('\nMean city temperature: ', cityAvgTemps);

// I'd like all state names where the average temp is greater than 70

const warmCities = locationData.filter(city => city.averageTemp > 70)

console.log('\nCities above 70 degrees: ', listingMethod(warmCities));

// I'd like all entries where the olympics have NOT previously been held

const boringCities = locationData.filter(city => {return city.previouslyHostedOlympics === false})

console.log('\nCities that have not hosted Olympics: ', listingMethod(boringCities));
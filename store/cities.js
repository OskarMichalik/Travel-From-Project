const CITIES = [
  {
    id: 1,
    name: "Tokyo",
    country: "Japan",
    lat: 35.68,
    lon: 139.76,
    popularDestinations: [3, 4, 23, 25],
  },
  {
    id: 2,
    name: "Beijing",
    country: "China",
    lat: 39.9,
    lon: 116.41,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    lat: 48.86,
    lon: 2.35,
    popularDestinations: [4, 1, 23, 25],
  },
  {
    id: 4,
    name: "Sydney",
    country: "Australia",
    lat: -33.87,
    lon: 151.21,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 5,
    name: "Moscow",
    country: "Russia",
    lat: 55.75,
    lon: 37.62,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 6,
    name: "Dubai",
    country: "UAE",
    lat: 25.27,
    lon: 55.3,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 7,
    name: "São Paulo",
    country: "Brazil",
    lat: -23.55,
    lon: -46.63,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 8,
    name: "New York City",
    country: "USA",
    lat: 40.71,
    lon: -74.01,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 9,
    name: "Mexico City",
    country: "Mexico",
    lat: 19.43,
    lon: -99.13,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 10,
    name: "Bangkok",
    country: "Thailand",
    lat: 13.75,
    lon: 100.52,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 11,
    name: "Cairo",
    country: "Egypt",
    lat: 30.04,
    lon: 31.24,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 12,
    name: "Toronto",
    country: "Canada",
    lat: 43.7,
    lon: -79.42,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 13,
    name: "Rio de Janeiro",
    country: "Brazil",
    lat: -22.91,
    lon: -43.21,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 14,
    name: "Madrid",
    country: "Spain",
    lat: 40.42,
    lon: -3.7,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 15,
    name: "Los Angeles",
    country: "USA",
    lat: 34.05,
    lon: -118.24,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 16,
    name: "Mumbai",
    country: "India",
    lat: 19.07,
    lon: 72.87,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 17,
    name: "Singapore",
    country: "Singapore",
    lat: 1.35,
    lon: 103.82,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 18,
    name: "Seoul",
    country: "South Korea",
    lat: 37.57,
    lon: 126.98,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 19,
    name: "Istanbul",
    country: "Turkey",
    lat: 41.01,
    lon: 28.97,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 20,
    name: "Shanghai",
    country: "China",
    lat: 31.23,
    lon: 121.47,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 21,
    name: "Hong Kong",
    country: "Hong Kong",
    lat: 22.28,
    lon: 114.16,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 22,
    name: "Berlin",
    country: "Germany",
    lat: 52.52,
    lon: 13.4,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 23,
    name: "London",
    country: "United Kingdom",
    lat: 51.5,
    lon: -0.12,
    popularDestinations: [3, 1, 4, 25],
  },
  {
    id: 24,
    name: "Munich",
    country: "Germany",
    lat: 48.14,
    lon: 11.58,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 25,
    name: "Rome",
    country: "Italy",
    lat: 41.9,
    lon: 12.49,
    popularDestinations: [3, 1, 23, 4],
  },
  {
    id: 26,
    name: "Barcelona",
    country: "Spain",
    lat: 41.38,
    lon: 2.18,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 27,
    name: "Milan",
    country: "Italy",
    lat: 45.46,
    lon: 9.19,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 28,
    name: "Vienna",
    country: "Austria",
    lat: 48.21,
    lon: 16.37,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 29,
    name: "Zurich",
    country: "Switzerland",
    lat: 47.37,
    lon: 8.54,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 30,
    name: "Prague",
    country: "Czech Republic",
    lat: 50.08,
    lon: 14.42,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 31,
    name: "Amsterdam",
    country: "Netherlands",
    lat: 52.37,
    lon: 4.9,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 32,
    name: "Budapest",
    country: "Hungary",
    lat: 47.5,
    lon: 19.04,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 33,
    name: "Stockholm",
    country: "Sweden",
    lat: 59.33,
    lon: 18.06,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 34,
    name: "Oslo",
    country: "Norway",
    lat: 59.91,
    lon: 10.74,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 35,
    name: "Copenhagen",
    country: "Denmark",
    lat: 55.68,
    lon: 12.57,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 36,
    name: "Dublin",
    country: "Ireland",
    lat: 53.35,
    lon: -6.26,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 37,
    name: "Athens",
    country: "Greece",
    lat: 37.98,
    lon: 23.72,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 38,
    name: "Lisbon",
    country: "Portugal",
    lat: 38.71,
    lon: -9.14,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 39,
    name: "Helsinki",
    country: "Finland",
    lat: 60.17,
    lon: 24.94,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 40,
    name: "Warsaw",
    country: "Poland",
    lat: 52.23,
    lon: 21.01,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 41,
    name: "Brussels",
    country: "Belgium",
    lat: 50.85,
    lon: 4.35,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 42,
    name: "Edinburgh",
    country: "United Kingdom",
    lat: 55.95,
    lon: -3.19,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 43,
    name: "Manchester",
    country: "United Kingdom",
    lat: 53.48,
    lon: -2.24,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 44,
    name: "Birmingham",
    country: "United Kingdom",
    lat: 52.48,
    lon: -1.9,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 45,
    name: "Glasgow",
    country: "United Kingdom",
    lat: 55.86,
    lon: -4.25,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 46,
    name: "Frankfurt",
    country: "Germany",
    lat: 50.11,
    lon: 8.68,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 47,
    name: "Düsseldorf",
    country: "Germany",
    lat: 51.22,
    lon: 6.77,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 48,
    name: "Hamburg",
    country: "Germany",
    lat: 53.55,
    lon: 9.99,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 49,
    name: "Cologne",
    country: "Germany",
    lat: 50.94,
    lon: 6.96,
    popularDestinations: [3, 1, 23, 25],
  },
  {
    id: 50,
    name: "Marseille",
    country: "France",
    lat: 43.3,
    lon: 5.38,
    popularDestinations: [3, 1, 23, 25],
  },
];

export default CITIES;
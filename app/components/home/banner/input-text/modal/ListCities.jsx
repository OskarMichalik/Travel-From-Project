import classes from "./ListCities.module.css";
import CITIES from "@/store/cities";
import ItemCity from "./ItemCity";
import { sortPlacesByDistance } from "@/app/util/locationFn";
import { useFetch } from "@/app/hooks/useFetch";

// Lists cities that the user can add to 'fromInfo' or 'toInfo' depending on a 'from' prop

async function fetchSortedPlaces() {
  const places = CITIES;

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitude,
        position.coords.longitude
      );

      resolve(sortedPlaces);
    });
  });
}

export default function ListCities({
  searchValue,
  from,
  itemCityOnClose,
  inputRef,
  itemCitySetSearchValue,
}) {
  const searchedCities = CITIES.filter((item) =>
    item.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const { fetchedData: availablePlaces } = useFetch(fetchSortedPlaces, []);
  const nearYou = availablePlaces.slice(0, 4);
  const nearestCity = availablePlaces.slice(0, 1);

  if (nearYou.length === 0) {
    let cities = CITIES.slice(0, 4);

    return (
      <div className={classes.listCities}>
        {searchedCities.length > 0 && searchValue && (
          <>
            <span>Search</span>
            <ItemCity
              city={searchedCities[0]}
              from={from ? true : false}
              inputRef={inputRef}
              setSearchValue={itemCitySetSearchValue}
            />
          </>
        )}
        <span>Cities</span>
        {cities.map((item) => (
          <ItemCity
            city={item}
            key={item.id}
            from={from ? true : false}
            inputRef={inputRef}
            setSearchValue={itemCitySetSearchValue}
          />
        ))}
      </div>
    );
  }
  const popularFlights = CITIES.filter((item) => item.id === nearestCity[0].id);
  let cities = [];
  if (from) {
    cities = nearYou;
  } else {
    const popularCitiesIds = popularFlights[0].popularDestinations;
    for (let id of popularCitiesIds) {
      cities.push(CITIES.filter((item) => item.id === id)[0]);
    }

    console.log(cities);
  }

  return (
    <div className={classes.listCities}>
      {searchedCities.length > 0 && searchValue && (
        <>
          <span>Search</span>
          <ItemCity
            city={searchedCities[0]}
            from={from ? true : false}
            onClose={itemCityOnClose}
            inputRef={inputRef}
            setSearchValue={itemCitySetSearchValue}
          />
        </>
      )}
      <span>{from ? "Near you" : "Popular cities"}</span>
      {cities.map((item) => (
        <ItemCity
          city={item}
          key={item.id}
          from={from ? true : false}
          onClose={itemCityOnClose}
          inputRef={inputRef}
          setSearchValue={itemCitySetSearchValue}
        />
      ))}
    </div>
  );
}

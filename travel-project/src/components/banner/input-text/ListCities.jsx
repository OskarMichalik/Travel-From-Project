import classes from "./ListCities.module.css";
import CITIES from "../../../store/cities";
import ItemCity from "./ItemCity";
import { sortPlacesByDistance } from "../../../util/locationFn";
import { useFetch } from "../../../hooks/useFetch";

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

  if (nearYou.length === 0) {
    const cities = CITIES.slice(0, 4);

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
      <span>Near You</span>
      {nearYou.map((item) => (
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

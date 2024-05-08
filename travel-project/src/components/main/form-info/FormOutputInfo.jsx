import { useContext } from "react";
import classes from "./FormOutputInfo.module.css";
import { TravelInfoContext } from "../../../store/travelInfoContext";
import OutputItem from "./OutputItem";

// Renders a table with the form output info

export default function FormOutputInfo() {
  const { fromInfo, toInfo, departureInfo, returnInfo, passengers, baggage } =
    useContext(TravelInfoContext);

  function returnDate(value) {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const dd = day + "/" + month + "/" + year;
    return dd;
  }

  return (
    <div className={classes.FormOutputInfo}>
      <table>
        <tbody>
          <tr>
            <th>
              <OutputItem tableHeader>From</OutputItem>
            </th>
            <td>
              {fromInfo.map((item) => (
                <OutputItem key={item.id}>{item.name}</OutputItem>
              ))}
            </td>
          </tr>
          <tr>
            <th>
              <OutputItem tableHeader>To</OutputItem>
            </th>
            <td>
              {toInfo.map((item) => (
                <OutputItem key={item.id}>{item.name}</OutputItem>
              ))}
            </td>
          </tr>
          <tr>
            <th>
              <OutputItem tableHeader>Departure</OutputItem>
            </th>
            <td>
              <OutputItem>{returnDate(departureInfo)}</OutputItem>
            </td>
          </tr>
          <tr>
            <th>
              <OutputItem tableHeader>Return</OutputItem>
            </th>
            <td>
              <OutputItem>{returnDate(returnInfo)}</OutputItem>
            </td>
          </tr>
          <tr>
            <th>
              <OutputItem tableHeader>Passengers</OutputItem>
            </th>
            <td>
              <OutputItem>Adults: {passengers.adults}</OutputItem>
              <OutputItem>Children: {passengers.children}</OutputItem>
              <OutputItem>Infants: {passengers.infants}</OutputItem>
            </td>
          </tr>
          <tr>
            <th>
              <OutputItem tableHeader>Baggage</OutputItem>
            </th>
            <td>
              <OutputItem>Medium {baggage.medium}</OutputItem>
              <OutputItem>Small {baggage.small}</OutputItem>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

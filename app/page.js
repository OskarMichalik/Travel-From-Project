"use client";
import Form from "./components/home/form/Form";
import Main from "./components/home/main/Main";
import { Provider } from "react-redux";
import store from "@/store/indexRedux";

export default function Home() {
  return (
    <Provider store={store} key={"home"}>
      <Form />
      <Main />
    </Provider>
  );
}

"use client";
import Form from "./components/home/form/Form";
import Main from "./components/home/main/Main";
import { Provider } from "react-redux";
import store from "@/store/indexRedux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname == "/search-tickets") {
      window.location.replace("https://search-flights-project.web.app/");
    }
  }, [pathname, router]);
  return (
    <Provider store={store} key={"home"}>
      <Form />
      <Main />
    </Provider>
  );
}

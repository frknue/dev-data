import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { LayoutContext } from "../../helper/HelperContext";
import useLocalStorage from "../../hooks/useLocalStorage";
import PageLoader from "./PageLoader";
import { AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
  const [country, setCountry] = useLocalStorage("currentCountry", "germany");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      const countryData = await fetch(
        `/api/getCities/${country}`
      );
      const response = await countryData.json();
      setData(response);
      return data;
    };
    fetchCountries().catch(console.error);
  }, [country]);
  return (
    <LayoutContext.Provider
      value={{
        search,
        setSearch,
        country,
        setCountry,
        data,
      }}
    >
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <Navbar />
          <main className={`px-8`}>{children}</main>
        </>
      )}
    </LayoutContext.Provider>
  );
};

export default Layout;

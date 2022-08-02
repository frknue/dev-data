import { useEffect, useState } from "react";
import SearchForm from "../../components/Essential/SearchForm";
import Chart from "../../components/DataVisualization/Chart";
import ResultList from "../../components/DataVisualization/ResultList";
import Loader from "../../components/Essential/Loader";
import { motion } from "framer-motion";
import Head from 'next/head'


export async function getServerSideProps(ctx) {
  const { country, city } = ctx.query;
  return {
    props: {
      country,
      city,
    },
  };
}

function capitalize(str: string) {
  if(str === undefined) return '';
  let splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
  }
  return splitStr.join(' '); 
}

const City = (props) => {
  const country = props.country;
  const city = props.city;
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/${country}/${city}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error in City");
      })
      .then((data) => {
        setTimeout(() => {
          setData(data);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
        console.log("error occured");
        setData(0);
      });
  }, []);

  return (
    <>
    <Head>
      <title>{capitalize(country)} - {capitalize(city)}</title>
    </Head>
        <h2 className="text-3xl font-light text-center">
          <b className="font-base text-brand-green-100">Most </b>
          used Programming Languages in {capitalize(city)}.
        </h2>
      {loading ? (
        <Loader />
      ) : data !== 0 ? (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="container-lg mx-auto"
        >
          <div className="my-8 mt-20">
            <SearchForm />
            <span className="text-gray-400 text-xs">
              Search Results for: {capitalize(data.city)}
            </span>
            
          </div>
          <div className="w-full overflow-hidden py-8 pt-4 mx-auto">
            <ResultList data={data} />
            <Chart data={data} />
          </div>
        </motion.div>
      ) : (
        <div className="container-lg mx-auto">
          <div className="my-8 mt-20">
            <SearchForm />
            <span className="text-xs text-gray-400">{city} is not in the database.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default City;

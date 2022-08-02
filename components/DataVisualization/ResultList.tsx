import React, { useEffect, useState } from "react";

function ResultList({ data }) {
  const [loadLangSize, setloadLangSize] = useState(5);
  useEffect(() => {
    setLangs(Object.entries(data.programmingLangs));
  }, [loadLangSize]);

  const [langs, setLangs] = useState<any>([]);
  const handleLangSize = () => {
    if (loadLangSize >= langs.length) {
    } else {
      setloadLangSize(loadLangSize + 5);
    }
  };
  langs.sort((a: number, b: number) => {
    return b[1] - a[1];
  });
  return (
    <ul className="">
      {langs.slice(0, loadLangSize).map((item: String, index: number) => (
        <li
          className="py-3 even:border-y even:border-gray-200 text-gray-400 dark:text-gray-400"
          key={index}
        >
          <span className="mr-2 text-lg">{index + 1}</span>
          {item[0]} : {item[1]}
        </li>
      ))}
      <div className="w-full flex justify-center">
        <button
          onClick={() => handleLangSize()}
          className="border bg-gray-500 bg-opacity-10 px-4 py-2 mt-4 cursor-pointer"
        >
          load more
        </button>
      </div>
    </ul>
  );
}

export default ResultList;

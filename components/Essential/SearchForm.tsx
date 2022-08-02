import React, { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { LayoutContext } from "../../helper/HelperContext";
import { countryList } from "../../libs/CountryList";
import { Search } from "react-feather";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
function SearchForm() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const showSuggestionsRef = useRef<any>();
  const { country, setCountry, setSearch, data } = useContext(LayoutContext);
  useOnClickOutside(showSuggestionsRef, () => {
    setShowSuggestions(false), setActiveSuggestionIndex(-1);
  });

  useEffect(() => {
    const selectValue = document.getElementById("select-country");
    selectValue.value = country;
  }, []);

  // HANDLE FORM SUBMIT
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSearch(inputValue);
    router
      .push(
        `/${country.toLocaleLowerCase()}/${inputValue.toLocaleLowerCase()}`,
        undefined,
        { shallow: true }
      )
      .then(() => router.reload());
  };

  // HANDLE ON CLICK EVENT IN AUTOCOMPLETE LIST DROPDOWN
  const handleSuggestionClick = (suggestionItem) => {
    setSearch(suggestionItem);
    setShowSuggestions(false);
    router
      .push(
        `/${country.toLocaleLowerCase()}/${suggestionItem.toLocaleLowerCase()}`,
        undefined,
        { shallow: true }
      )
      .then(() => router.reload());
  };

  // HANDLE USER KEY INPUT IN SEARCH COMPONENT
  const handleKeyInput = (e) => {
    e.preventDefault();
    const target = e.target;
    setInputValue(target.value);
    let matches = data.filter((city) => {
      const regex = new RegExp(`${e.target.value}`, "gi");
      return city.match(regex);
    });
    setSuggestions(matches);
    if (e.target.value.length > 1) {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };
  // HANDLE KEYBOARD KEY INPUT ARROW || ENTER || TAB
  const handleArrowKeys = (e) => {
    var code = e.keyCode || e.which;
    switch (code) {
      case 13:
        if (activeSuggestionIndex !== -1) {
          const activeSuggestionItem = document.querySelector(
            "ul#suggestion-list li.active span"
          );
          setInputValue(activeSuggestionItem?.innerHTML);
          handleFormSubmit;
        } else {
          handleFormSubmit;
        }
        break;
      case 38:
        if (activeSuggestionIndex !== -1) {
          setActiveSuggestionIndex(activeSuggestionIndex - 1);
        }
        break;
      case 40:
        if (activeSuggestionIndex < suggestions.length - 1) {
          setActiveSuggestionIndex(activeSuggestionIndex + 1);
        }
        break;

      default:
        break;
    }
    return activeSuggestionIndex;
  };
  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className={`relative flex items-center py-0 border rounded mt-12 h-min px-4 bg-white text-gray-400 `}
      >
        <div className="flex flex-row justify-start w-full ">
          <div className="w-full">
            <input
              onKeyUp={(e) => handleKeyInput(e)}
              onKeyDown={(e) => handleArrowKeys(e)}
              className="w-full py-3 px-2 leading-3 disable-select  text-gray-500 text-sm font-display outline-none bg-white"
              name="city_query"
              autoComplete="off"
              id="search_city_query"
              placeholder={"search for city"}
              type="text"
            />
          </div>
          <div className="mx-4 border-l pl-4">
            <select
              name="select-country"
              className="py-2 outline-none bg-transparent"
              id="select-country"
              onChange={(e) => setCountry(e.target.value)}
            >
              {countryList.map((countryItem, index) => (
                <option
                  className="capitalize"
                  key={index}
                  value={countryItem.country.toLowerCase()}
                >
                  {countryItem.country}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleFormSubmit}
            disabled={inputValue.length > 3 ? false : true}
          >
            <Search size={21} />
          </button>
        </div>
      </form>
      {error !== "" ? (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <span className="text-red-500 py-3 shadow rounded px-8 text-center text-sm bg-white">
            {error}
          </span>
        </div>
      ) : null}
      <div>
        <div className="relative py-1 w-full">
          {showSuggestions ? (
            <ul
              ref={showSuggestionsRef}
              className="absolute w-full bg-white rounded-md pl-4"
              id="suggestion-list"
            >
              {suggestions.map((suggestionItem, index) => (
                <li
                  className={`py-1 px-2 text-gray-400 w-full cursor-pointer hover:text-gray-500 selection:text-blue-400 ${
                    activeSuggestionIndex === index && "active text-gray-500"
                  } `}
                  key={suggestionItem}
                  data-suggestions={index}
                  onClick={() => handleSuggestionClick(suggestionItem)}
                >
                  <span className="capitalize">{suggestionItem}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default SearchForm;

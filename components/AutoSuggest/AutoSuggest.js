import React, { useState } from "react";
import AutoSuggestStyles from './AutoSuggest.module.css'

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = (value, suggestions) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const AutoSuggest = ({ breedData, searchInput, setSearchInput }) => {

  const [suggestionsArr, setSuggestionsArr] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value)

    const mySuggestions = getSuggestions(e.target.value, breedData)
    setSuggestionsArr(mySuggestions)
  }

  return (
    <div>
      <input
        required
        type="text"
        name="search"
        placeholder='Enter your breed'
        className='placeholder:blackText font-medium w-96 py-6 pl-6 rounded-[59px] outline-0'
        value={searchInput}
        onChange={handleChange}
      />

      {
        suggestionsArr.length > 0 && (
          <div className="absolute z-10 top-[80px] left-0 rounded-2xl bg-white w-96 max-h-56
          overflow-y-scroll p-2 flex flex-col
          ">
            {
              suggestionsArr.map((suggestions) => {
                return (
                  <span
                    className="text-black text-[18px] p-2 last:mb-4 hover:cursor-pointer hover:bg-grey"
                    key={suggestions.name}
                    onClick={() => {
                      setSearchInput(suggestions.name)
                      setSuggestionsArr([])
                    }}
                  >
                    {suggestions.name}
                  </span>
                )
              })
            }
          </div>
        )
      }
    </div>
  )
}

export default AutoSuggest

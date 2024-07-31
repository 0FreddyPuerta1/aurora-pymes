"use client";
import { Customer } from "@/interfaces/customer.interface";
import { useState, Dispatch, SetStateAction, useEffect } from "react";

interface SuggestionListComponentProps {
  userInput: string;
  setUserInput: Dispatch<SetStateAction<string>>;
  suggestionList: Customer[];
}

export const SuggestionListComponent = ({
  userInput,
  setUserInput,
  suggestionList,
}: SuggestionListComponentProps) => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState<Customer[]>(
    []
  );
  const [showSuggestions, setShowSuggestions] = useState(false);

  useEffect(() => {
    setFilteredSuggestions(suggestionList);
  }, [suggestionList]);

  const onClick = (e: React.MouseEvent<HTMLLIElement>) => {
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.currentTarget.value;
    const filtered = suggestionList.filter(
      (suggestion) =>
        suggestion.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setActiveSuggestion(0);
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
    setUserInput(userInput);
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className="absolute w-full border border-gray-300 mt-10  z-10 bg-white">
        {filteredSuggestions.map((suggestion, index) => {
          const className =
            index === activeSuggestion ? "bg-blue-500 text-white" : "";
          return (
            <li
              className={`p-2 cursor-pointer ${className}`}
              key={suggestion.id}
              onClick={onClick}
            >
              {`${suggestion.name} - ${suggestion.idNumber}`}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="absolute w-full p-2 border border-gray-300 bg-white mt-1 z-10">
        No suggestions available.
      </div>
    );
  };

  return (
    <div className="relative w-96 flex flex-col items-center">
      <div className="flex">
        <input
          type="text"
          className="h-12 w-52 rounded-l-full md:w-96"
          onChange={onChange}
          value={userInput}
        />
      </div>
      {showSuggestions && userInput && <SuggestionsListComponent />}
    </div>
  );
};

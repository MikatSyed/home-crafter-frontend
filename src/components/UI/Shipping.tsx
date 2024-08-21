import React, { useState, useEffect } from "react";
import {
  GetCountries,
  GetState,
  GetCity
} from "react-country-state-city";

function Shipping() {
  const [countryId, setCountryId] = useState<number>(0);
  const [stateId, setStateId] = useState<number>(0);
  const [cityId, setCityId] = useState<number>(0);
  const [language, setLanguage] = useState<number>(0);

  const [countryList, setCountryList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  const [cityList, setCityList] = useState<any[]>([]);
  const [languageList, setLanguageList] = useState<any[]>([]);

  useEffect(() => {
    // Fetch countries and languages on component mount
    GetCountries().then((result: any) => {
      setCountryList(result);
    });
  }, []);

  useEffect(() => {
  
    if (countryId) {
      GetState(countryId).then((result:any) => {
        setStateList(result);
        setStateId(0); 
        setCityList([]);
      });
    }
  }, [countryId]);

  useEffect(() => {
   
    if (stateId) {
      GetCity(countryId, stateId).then((result:any) => {
        setCityList(result);
        setCityId(0); 
      });
    }
  }, [stateId, countryId]);

  return (
    <div>
      <div>
        <h2 className="text-xl font-bold text-gray-600  pb-4">Shipping</h2>

        <div className="pr-8">
          <div>
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition duration-200"
              placeholder="Your Name"
              value="Mikat Syed"
              disabled
            />
          </div>

          <div className="mt-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition duration-200"
              placeholder="you@example.com"
              value="mikat@gmail.com"
              disabled
            />
          </div>

          <div className="mt-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition duration-2000"
              placeholder="Your Phone Number"
              value="01858832211"
              disabled
            />
          </div>

          <div className="mt-3">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="address"
            >
              Address
            </label>
            <input
              id="address"
              type="text"
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition duration-200"
              placeholder="Your Address"
            />
          </div>

          <div className="mt-3 ">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="country"
            >
              Country
            </label>
            <select
              onChange={(e) => {
                const selectedCountryId = parseInt(e.target.value);
                setCountryId(selectedCountryId);
              }}
              value={countryId}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
            >
              <option value={0}>Select Country</option>
              {countryList.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3 md:flex md:space-x-4">
            <div className="md:w-1/3">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="city"
              >
                State
              </label>
              <select
                onChange={(e) => {
                  const selectedStateId = parseInt(e.target.value);
                  setStateId(selectedStateId);
                }}
                value={stateId}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
              >
                <option value={0}>Select State</option>
                {stateList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="md:w-1/3">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="city"
              >
                City
              </label>
              <select
                onChange={(e) => {
                  const selectedCityId = parseInt(e.target.value);
                  setCityId(selectedCityId);
                }}
                value={cityId}
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition duration-200"
              >
                <option value={0}>Select City</option>
                {cityList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 md:mt-0 md:w-1/3">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="zip"
              >
                Zip Code
              </label>
              <input
                id="zip"
                type="text"
                className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 transition duration-200"
                placeholder="Your Zip Code"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shipping;

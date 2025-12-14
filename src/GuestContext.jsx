import { createContext, useContext, useState, useEffect } from "react";

const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [selectedGuest, setSelectedGuest] = useState({});
  const [guestList, setGuestList] = useState([]);

  useEffect(() => {
    const getGuestList = async () => {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests"
      );
      const jsonObj = await response.json();
      const retrievedGuests = jsonObj.data;
      setGuestList(retrievedGuests);
    };
    getGuestList();
  }, []);

  const getGuestDetails = async (id) => {
    const getGuestDetails = await fetch(
      "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2510-FTB-CT-WEB-PT/guests/" +
        `${id}`
    );
    const jsonObj = await getGuestDetails.json();
    const guestData = jsonObj.data;
    setSelectedGuest(guestData);
  };

  const clickBackButton = () => {
    setSelectedGuest({});
  };

  const value = {
    guestList,
    selectedGuest,
    clickBackButton,
    getGuestDetails,
  };

  return (
    <GuestContext.Provider value={value}>{children}</GuestContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(GuestContext);

  if (!context) {
    throw new Error("No permission to use useList");
  }
  return context;
};

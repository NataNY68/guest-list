import { useEffect, useState } from "react";
import { useList } from "./GuestContext.jsx";

export const GuestList = () => {
  const { guestList, getGuestDetails } = useList();

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {guestList?.map((singleGuest) => {
          return (
            <tr
              key={singleGuest.id}
              onClick={() => getGuestDetails(singleGuest.id)}
            >
              <td>{singleGuest.name}</td>
              <td>{singleGuest.email}</td>
              <td>{singleGuest.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

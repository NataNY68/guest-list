import { GuestDetails } from "./GuestDetails";
import { GuestList } from "./GuestList";
import { useList } from "./GuestContext";

export default function App() {
  const { selectedGuest } = useList();
  return (
    <>
      {selectedGuest?.name ? (
        <GuestDetails />
      ) : (
        <div className="guest-table">
          <h1>Guest List</h1>
          <GuestList />
          {!selectedGuest.name ? (
            <p>Please select a guest to see details.</p>
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}

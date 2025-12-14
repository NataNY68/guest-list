import { useList } from "./GuestContext";

export const GuestDetails = () => {
  const { selectedGuest, clickBackButton } = useList();

  return (
    <section className="guest-details">
      <h2>Guest Details</h2>
      <>
        <h3>{selectedGuest.name}</h3>
        <div>
          <p>Email:</p>
          <p> {selectedGuest.email}</p>
          <p>Phone: </p>
          <p>{selectedGuest.phone}</p>
          <p>Bio:</p>
          <p>{selectedGuest.bio}</p>
          <p>Job: </p>
          <p>{selectedGuest.job}</p>
        </div>
        <button onClick={clickBackButton}>Back</button>
      </>
    </section>
  );
};

import { useEffect } from "react";

const EventHandling = () => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => console.log("==On key down==", e.keyCode);

  return (
    <>
      <h1 onMouseOver={() => console.log("====Mouse Hovered===")}>
        Welcome 
      </h1>
      <h1>This is a On Key Down Event</h1>
    </>
  );
};

export default EventHandling;import { useEffect } from "react";

const EventHandling = () => {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (e) => console.log("==On key down==", e.keyCode);

  return (
    <>
      <h1 onMouseOver={() => console.log("====Mouse Hovered===")}>
        Welcome To Prepbytes
      </h1>
      <h1>This is a On Key Down Event</h1>
    </>
  );
};

export default EventHandling;
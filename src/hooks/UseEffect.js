import React, {useEffect, useState} from "react";

// component life cycle = Mount(initialise) -> Updated -> Unmount(destroy)
export const UseEffect = () => {
  //
  //By default useEffect runs on mount and when a state changes within the function changes
  useEffect(() => {
    console.log("Ran");
  });
  const [state, setState] = useState(0); // example state

  //To ensure a function only runs once pass an empty array [].
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any")
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(() => setLoaded(true));
  }, []);

  return (
    <div>
      <h1>useEffect</h1>
      <button
        onClick={() => {
          setState(state + 1);
        }}
      >
        Update State
      </button>
      <h3>{loaded ? "Data retrieved -> check console" : "Loading..."}</h3>
    </div>
  );
};

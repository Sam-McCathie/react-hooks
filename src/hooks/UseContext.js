import React, {createContext, useContext} from "react";

// utilise React's context Api -> allows you to share or scope values throughout the entire component tree

// Context values
const moods = {
  happy: ":)",
  sad: ":(",
};

// create context
const MoodContext = createContext(moods);

const Mood = () => {
  const mood = useContext(MoodContext);
  return <p>{mood}</p>;
};

export const UseContext = () => {
  return (
    <MoodContext.Provider value={moods.happy}>
      <Mood />
    </MoodContext.Provider>
  );
};

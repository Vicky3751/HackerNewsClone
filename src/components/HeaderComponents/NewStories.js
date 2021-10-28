import React from "react";
import axios from "axios";
import Story from "./Story";
import { useState, useEffect } from "react";

const NewStories = () => {
  const [hacks, setHacks] = useState([]);

  const show = async () => {
    const result = await axios
      .get("https://hacker-news.firebaseio.com/v0/newstories.json")
      .then(({ data }) => data)
      .then((data) => setHacks(data));
    return result;
  };

  useEffect(() => {
    show();
  }, []);

  return (
    <div className="container-md">
      {hacks.map((hack, index) =>
        index < 30 ? <Story key={index} storyId={hack} val={index} type = "New Stories"/> : <></>
      )}
    </div>
  );
};

export default NewStories;

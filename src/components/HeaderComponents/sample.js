import React from "react";
import axios from "axios";
import Story from "./Story";
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";
const Sample = () => {
    const [hacks, setHacks] = useState([]);
    const { id } = useParams();
    console.log(id);
    const show = async () => {
      const result = await axios
        .get("https://hacker-news.firebaseio.com/v0/beststories.json")
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
          (index < 30 && id === hack) ? <Story key={index} storyId={hack} val={index} /> : <><p>{id}</p></>
        )}

      </div>
    );
}

export default Sample

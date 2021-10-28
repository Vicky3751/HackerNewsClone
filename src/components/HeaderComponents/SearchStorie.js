import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Beststorie = () => {
  const { id , type} = useParams();
  const [story, setStory] = useState({});
  console.log("yes");
  const show = async () => {
    const result = await axios
      .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      .then(({ data }) => data)
      .then((data) => setStory(data));
    return result;
  };

  useEffect(() => {
    show();
  }, []);

  return (
    <div className="container-md">
      <div className="card mt-4 bg-light">
        <div style={{ display: "flex" }}>
          <div className="card-body " style={{}}>
            <h4 className="card-title">
              <a
                href={story.url}
                target="_blank"
                style={{ textDecoration: "none", color: "Orange" }}
              >
                {story.title}
              </a>
            </h4>
            <h6 className="card-subtitle mb-2 text-muted">{story.id}</h6>
            <h5 className="card-text">{story.by}</h5>
            <p>{story.text}</p>
            <p className="card-text m-0">Descendants: {story.descendants}</p>
            <p className="card-text m-0">Score: {story.score}</p>
            <a href={story.url} className="card-link" target="_blank">
              Link
            </a>
          </div>
          <div className="card-subtitle mb-2 text-muted" style={{fontSize: "20px", margin:"1% 1%", minWidth:"15%"}}>
              Category: {type}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beststorie;

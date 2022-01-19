import search from "./images/search-solid.svg";
import axios from "axios";
import { useState, useEffect } from "react";

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");

  function differenceDate(dateStr) {
    var dateString = dateStr.split("T")[0];
    var date = dateString.split("-");
    var firstDate = new Date(
      parseInt(date[0], 10),
      parseInt(date[1], 10) - 1,
      parseInt(date[2], 10)
    );
    var secondDate = new Date();
    var diffDate = secondDate.getTime() - firstDate.getTime();
    var converted = diffDate / 1000 / 60 / 60 / 24;

    var uploaded;
    if (converted < 1) {
      uploaded = "few hours ago";
    } else if (converted > 1 && converted < 2) {
      uploaded = "1 day ago";
    } else if (converted > 2) {
      var daysAgo = Math.floor(converted);
      uploaded = daysAgo + " days ago";
    }
    return uploaded;
  }
  let daysAgo = differenceDate("2021-09-15T09:02:40Z");
  let days = daysAgo.split(" ")[0];
  let months;
  if (days > 30) {
    months = Math.floor(days / 30);
  }

  //   console.log(months + " " + "months ago");

  const handleSearch = async (e) => {
    e.preventDefault();
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: 20,
        type: "video",
        key: "AIzaSyCFfTYkfHsZPac8-SYtAgK3FFmU-SZTXxA",
        q: query,
      },
    });
    console.log(res)
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let results = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let obj = {};
          obj.id = item.id.videoId;
          obj.title = item.snippet.title;
          obj.author = item.snippet.channelTitle;
          obj.description = item.snippet.description;
          obj.createAt = item.snippet.publishedAt
          results.push(obj);
        });
      }
      setVideos(results);
    }
    
  };
  return (
    <div className="container">
      <nav className="navbar navbar-light bg-light">
        <form className="form-inline" onSubmit={(e) => handleSearch(e)}>
          <input
            style={{ width: "30.5rem" }}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search youtube..."
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            <img src={search} width="20" />
          </button>
        </form>
      </nav>
      <div className="content">
        {videos &&
          videos.length > 0 &&
          videos.map((item) => {
            return (
              <div className="card" style={{ width: "35rem" }} key={item.id}>
                <iframe
                  width="560"
                  height="315"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text author"><b>Author</b>:<i> {item.author} <span>{differenceDate(item.createAt)}</span></i></p>
                  <p className="card-text descriptions">{item.description}</p>
                  <a href="#" className="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default YoutubeSearch;

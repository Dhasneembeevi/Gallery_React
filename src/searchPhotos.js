import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios"

export default function SearchPhotos() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);

   const Submit = useEffect(() => {
      axios.get(`https://api.unsplash.com/search/collections?page=1&query=${query}&client_id=KznZ2gBfPmCckw-7F8JwHjICRBhVT2F3PJAMyaDPHLE&per_page=20`)
        .then((response) => {
          const results = response;
          console.log(results.data.results)
          setPics(results.data.results)
          //console.log(data)
        })
        .catch(err => console.log(err));
    }, [query])

  return (
    <div >
      <div className="form">
        <label className="label" htmlFor="query">
          {" "}
          📷
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Enter the category`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button" onClick={Submit}>
          Search
        </button>
      </div><div className='inputtitle'> {query.toUpperCase()} </div>
      <div className='card-list'>
      
      
        {pics.map(pic => {
          return (
            <div>
              {pic.preview_photos.map(ele => {
                return (
                  <div> <img src={ele.urls.small} alt="pic" className='card--image' />
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}

// <img
//               className='card--image'
//               alt={pic.alt_description}
//               src={pic.preview_photos.urls.small}
//               width="50%"
//               height="50%" />
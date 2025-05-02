import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Post } from './components/Posts/Post';
import "./css/App.css";
import { ThreeDots } from 'react-loader-spinner';


export const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spaceflightnewsapi.net/v4/articles/")
        const data = await response.json()
        setNews(data.results)
      } catch(err) {
        console.error("Error fetching data:", err)
      }
    };
    fetchData()
  }, []);
  // const response = fetch("http  ://api.spaceflightnewsapi.net/v4/articles/")
  // const data = response.json()
  
  return (
    <>
      <Navbar />
      
      <section id='posts'>
        {news.length === 0 ? (
          <ThreeDots
          height={80}
          width={90}
          radius={9}
          color="white"
          ariaLabel="loading"
          wrapperStyle={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}
        />
        ) : news.map((article) => (
          <Post key={article.id} title={article.title} provider={article.authors?.[0]?.name} paragraph={article.summary} thumbnail={article.image_url} url={article.url}/>
        ))}
      </section>
    </>
  )
}
import { useEffect, useState } from 'react';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles,setArticles] = useState([]);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=e6345d9b130041e3b26b945c8f2f01ba';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div>
      <h2>Headlines : {articles.length}</h2>
      {
        articles.map(article=><News article={article}></News>)
      }
    </div>
  );
}

export default App;

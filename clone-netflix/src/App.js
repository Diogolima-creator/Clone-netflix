import { useEffect,useState } from 'react';
import Tmdb from './Tmdb';
import * as C from './styles'
import { MovieRow } from './components/MovieRow';
import { FeaturedMovie } from './components/FeaturedMovie';

const App = () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length-1))
      let chosen = originals[0].items.results[randomChosen]
      console.log('Eae',chosen)
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setFeaturedData(chosenInfo);
      
    }
    
    loadAll();
  },[]);

  useEffect(() => {
    const scrollListener = () =>{
      if(window.scrollY > 10){
        setBlackHeader(true)
      }else{
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () =>{
      window.removeEventListener('scroll', scrollListener)
    }
  },[]);
  return(
    <C.Container>
      <C.Header black={blackHeader}>
        <header>
          <div className='header-logo'>
            <a href='/'>
                <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'></img>
            </a>
          </div>
          <div className='header-user'>
            <a href='/'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'></img>
            </a>
          </div>
        </header>
      </C.Header>
      <C.SpotLight>
        {featuredData && 

          <FeaturedMovie item={featuredData}/>

          }
      </C.SpotLight>
      <C.List>
        {movieList.map((item,key) => (
          <MovieRow key={key} title={item.title} items={item.items}></MovieRow>
        ))}
      </C.List>
      <C.Footer>
          Feito com <span role="img" aria-label="coração">❤️</span> por Diogo<br/>
          Direitos de imagem Netflix<br/>
          Dados pegos do site Themoviedb.org
      </C.Footer>
    </C.Container>
  );
}

export default App
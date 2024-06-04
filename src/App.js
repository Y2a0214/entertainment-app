import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home';
import MoviesPage from './Pages/MoviesPage';
import MoviesDetails from './components/Movie/MoviesDetails';
import TvSeries from './Pages/TvSeries';
import Bookmark from './Pages/Bookmark';
import Navbar from './components/Common/Navbar';

function App() {
  return (
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie' element={<MoviesPage/>} />
            <Route path='/movie/:id' element={<MoviesDetails/>} />
            <Route path='/tvseries' element={<TvSeries/>} />
            <Route path='/bookmark' element={<Bookmark/>} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;

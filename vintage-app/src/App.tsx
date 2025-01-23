import './App.css'
import NavBar from './Components/NavBar';
import PopularBrandsContainer from './Components/PopularBrandsContainer';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <h3 className='text-center'>Popular Brands</h3>
      <div className='row'>
        <div className='col'>
          <PopularBrandsContainer />
        </div>
        <div className='col'>
          <PopularBrandsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;

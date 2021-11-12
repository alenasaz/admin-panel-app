import './App.css';
import Header from './components/header';
import DisplayTable from './components/table';
import Footer from './components/footer';
import HeaderFilters from './components/header-filters';
import Filters from './components/filters';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeaderFilters/>
    <Filters/>
    <DisplayTable/>
    <Footer/>
    </div>
  );
}

export default App;

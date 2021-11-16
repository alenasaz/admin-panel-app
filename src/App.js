import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import HeaderFilters from './components/HeaderFilters/HeaderFilters';
import Filters from './components/Filters/Filters';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeaderFilters/>
    <Filters/>
    <Table/>
    <Footer/>
    </div>
  );
}

export default App;

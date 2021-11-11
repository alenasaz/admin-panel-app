import './App.css';
import Header from './components/header';
import Table from './components/table';
import Footer from './components/footer';
import HeaderFilters from './components/header-filters';
import Filters from './components/filters';

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

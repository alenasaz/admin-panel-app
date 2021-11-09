import './App.css';
import Header from './components/header';
import Table from './components/table';
import Footer from './components/footer';
import HeaderFilters from './components/header-filters';
import Filters from './components/filters';
import FooterPagination from './components/footer-pagination';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <HeaderFilters></HeaderFilters>
    <Filters></Filters>
    <Table></Table>
    <Footer></Footer>
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Table from './components/Table/Table';
import Footer from './components/Footer/Footer';
import HeaderFilters from './components/HeaderFilters/HeaderFilters';
import Filters from './components/Filters/Filters';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeaderFilters/>
    <Filters/>
    <Table/>
    <Footer/>
    <Form/>
    </div>
  );
}

export default App;

//<Form/>

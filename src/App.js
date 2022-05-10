import FunctionComponent from './1-component/functioncomponent';
import Header from './1-component/header';
import Product from './1-component/product';
import Home from './project2/Home';
import './App.css';
import Layout from './Project3/Layout';
import LayoutMSI from './Layout-MSI/LayoutMSI';

function App() {
  const title ='Hello'
  // JSX : Javascript XML - cho phép viét HTML trong javascript
  return (
    // <div className="App">
    //   <h1 className='text-primary'>{title}</h1>
    //   {/* gọi tới 1 component khác */}
    //   <FunctionComponent></FunctionComponent>
    //   <Header />
    //   <Product />

    //   <Home />
    // </div>
    // <Home />

    // Bài tập test
    // <Layout />
    // Home work React JS
    <LayoutMSI />
  );
}

export default App;

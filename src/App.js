import logo from './logo.svg';
import './App.css';
import Layout from './containers/Layout/Layout';
import Content from './containers/Content/Content';
import styles from './containers/Layout/Layout.module.css';
import { BrowserRouter } from 'react-router-dom';
function App() {
  
  return (
    //<h1>Hello</h1>
    <BrowserRouter>
    <Layout>
      <Content/>
    </Layout>


    
    <footer className={styles.Footer}>
                    
                    © All rights reserved Tomasz Figat 2020

       </footer> 
    
    </BrowserRouter>
    
  );
}

export default App;

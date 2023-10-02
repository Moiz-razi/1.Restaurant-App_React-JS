import { Fragment } from 'react'
import Meals from './components/Meals/Meals';

import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart';
const App = () => {
  return (
    <Fragment>
      <Cart/>
     <Header/>
    <main>
      <Meals/>
    </main>
    </Fragment>
  )
}

export default App;

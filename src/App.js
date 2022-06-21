import './App.css';
import {MarketingPricing,HeroLayout2, NavBar} from "./ui-components"
import '@aws-amplify/ui-react/styles.css'
function App() {
  return (
    <div className='container'>
      <NavBar/>
      <HeroLayout2  />
{/* <ContactUs/> */}
    </div>
  );
}

export default App;

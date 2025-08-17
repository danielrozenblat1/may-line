
import './App.css';
import ByMe from './components/ByMe/ByMe';
import FormScreen from './components/form/FormScreen';
import WhoAmI from './components/me/Me';
import Recommendation from './components/recommend/Recommend';
import Bikorot from './components/recommends/Recommends';
import ImageTextComponent from './components/what/What';
import PrivacyPolicy from './privacy/Privacy';
import FifthScreen from './screens/FifthScreen';
import FirstScreen from './screens/FirstScreen';
import ForthScreen from './screens/ForthScreen';
import SecondScreen from './screens/SecondScreen';
import SixthScreen from './screens/SixthScreen';
import ThirdScreen from './screens/ThirdScreen';

function App() {
  return <>
<FirstScreen/>
<SecondScreen/>

<ThirdScreen/>

<ForthScreen/>

<FifthScreen/>
<WhoAmI/>
<SixthScreen/>
<PrivacyPolicy
  ownerName="מאי סויסה - מאי ליין"
  email="mayosherswisa175@gmail.com"
  address="+972 54-734-5464"
  domain="https://mayline.co.il/"
/>
<ByMe/>
  </>
}

export default App;

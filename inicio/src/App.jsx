import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/events";
import Images from "./components/images";
import MeuCss from "./components/MeuCss";
import MyCss from "./components/MyCss";
import Varia from "./component/Varia";
import ListRender from "./component/ListRender";
import exercise from "./component/exercise";

function App() {
  return (
    <>
      {/* <FirstComponent/>  
      <hr />  
      <TemplateExpressions/>
      <Events/>
      <Images/> */}
      {/* <MeuCss />
      <MyCss />
      <p>Texto escrito no App</p> */}
      <Varia/>
      <ListRender/>
    </>
  );
}

export default App;
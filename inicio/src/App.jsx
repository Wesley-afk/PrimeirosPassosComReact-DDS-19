import "./App.css";
import FirstComponent from "./components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from "./components/events";
import Images from "./components/images";
import MeuCss from "./components/MeuCss";
import MyCss from "./components/MyCss";

function App() {
  return (
    <>
      {/* <FirstComponent/>  
      <hr />  
      <TemplateExpressions/>
      <Events/>
      <Images/> */}
      <MeuCss />
      <MyCss />
      <p>Texto escrito no App</p>
    </>
  );
}

export default App;

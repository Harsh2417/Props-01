import Color from "./Component/colors";

function App() {
  const style = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  };
  return (
    <>
    <div style={style}>
        <Color title="#FF6663" color="Pink" code="#FF6663" style={`color:pink`}/>
        <Color title="#333333" color="Gray" code="#333333" />
        <Color title="#000000" color="Black" code="#000000" />
        <Color title="#38BB14" color="Green" code="#38BB14" />
        <Color title="#C90B0B" color="Red" code="#C90B0B" />
      </div>

      <div style={style}>
        <Color title="#FF8000" color="Orange" code="#FF8000" />
        <Color title="#FFF500" color="Yellow" code="#FFf500" />
        <Color title="#CCCCCC" color="Light-gray" code="#CCCCCC" />
        <Color title="#7E41A2" color="Purple" code="#7E41A2" />
        <Color title="#C14911" color="Brown" code="#C14911" />
      </div>
    </>
  );
}

export default App;

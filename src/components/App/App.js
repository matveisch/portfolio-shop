import '../../styles/default.css';
import Button from "../../ui/Button/Button";
import Rating from "../../ui/Rating/Rating";
import Search from "../Search/Search";
import Header from "../Header/Header";

function App() {
  return (
    <div className="App">
        <h1>hello</h1>
        <h2>hello</h2>
        <Button name={'Скачать'}/>
        <Rating numOfRatings={125} numOfDownloads={225} numOfStars={3}/>
        <Search />
        <Header />
    </div>
  );
}

export default App;
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div>
          <h1>Все кросовки</h1>
          <div className="searchBlock">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." type="text" />
          </div>
        </div>

        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}
export default App;

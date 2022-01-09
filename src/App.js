import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

export const AppContext = React.createContext({});

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isReady, setIsReady] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      const cartResponse = await axios.get(
        "https://61d30be8b4c10c001712b750.mockapi.io/cart"
      );
      const favoritesResponse = await axios.get(
        "https://61d30be8b4c10c001712b750.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://61d30be8b4c10c001712b750.mockapi.io/items"
      );
      setIsReady(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((el) => Number(el.id) === Number(obj.id))) {
        axios.delete(
          `https://61d30be8b4c10c001712b750.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((el) => Number(el.id) !== Number(obj.id))
        );
      } else {
        const { data } = await axios.post(
          "https://61d30be8b4c10c001712b750.mockapi.io/favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить/удалить в Favorites");
    }
  };

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((el) => Number(el.id) === Number(obj.id))) {
        axios.delete(
          `https://61d30be8b4c10c001712b750.mockapi.io/cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((el) => Number(el.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://61d30be8b4c10c001712b750.mockapi.io/cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить в Basket");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://61d30be8b4c10c001712b750.mockapi.io/cart/${id}`);

    console.log(id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  const isItemFavorite = (id) => {
    return favorites.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, isItemFavorite, onAddToFavorite }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                onChangeSearchInput={onChangeSearchInput}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                isReady={isReady}
              />
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

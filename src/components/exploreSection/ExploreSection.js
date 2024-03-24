import React, { useEffect, useState} from "react";
import "../exploreSection/ExploreSectionStyles.css";
import { restaurant } from "../Lists";
import { useRecoilValue } from "recoil";
import {
  setAtomCheckBox,
  setAtomPrice,
  setAtomRating,
  setAtomTime,
} from "../Filters/filterItems/filtertab/PopElement";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import {db} from '../../firebase.config'

const ExploreSection = () => {

  const [search, setSearch] = useState("");
  const [exploreItem, setExploreItem] = useState(null);
  var List = [];
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ItemList"));
        const data = querySnapshot.docs.map((doc) => doc.data());
        setExploreItem(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  useEffect(() => {
    if(!exploreItem) return 
    const filteredItems = exploreItem.filter((item) =>
      search.trim() === "" ? true : item.name.toLowerCase().includes(search.toLowerCase())
    );
    setExploreItem(filteredItems);
  }, [search, exploreItem]);

     
  
  const coilPrice = useRecoilValue(setAtomPrice);
  const coilRating = useRecoilValue(setAtomRating);
  const coilTime = useRecoilValue(setAtomTime);
  const coilCheckbox = useRecoilValue(setAtomCheckBox);

  if(!exploreItem) return null
  return (
    <div className="max-width explore-section">
      <div className="collection-title">
        <div className="collection-search">
          <h1>Search It, Eat It :- That's It!</h1>
          <div className="collection-icon">
            <input
              type="search"
              placeholder="Enter Your Food..."
              id="collection-input"
              onChange={(e) => setSearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="explore-grid">
          {exploreItem.map((restaurant) => {
              return (
                <div className="res-row" key={restaurant.id}>
                  {coilCheckbox.indexOf(true, 0) === -1 &&
                  restaurant.rating <= coilRating &&
                  restaurant.price <= coilPrice &&
                  restaurant.deliveryTime <= coilTime ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />  
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>

                      {restaurant.foodType}
                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 0 &&
                      restaurant.foodType.startsWith("South") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 1 &&
                      restaurant.foodType.startsWith("Rajasthani") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 2 &&
                      restaurant.foodType.startsWith("American") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 3 &&
                      restaurant.foodType.startsWith("Indian") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 4 &&
                      restaurant.foodType.startsWith("Italian") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : "" ||
                    (coilCheckbox.indexOf(true, 0) === 5 &&
                      restaurant.foodType.startsWith("Chinese") &&
                      restaurant.rating <= coilRating &&
                      restaurant.price <= coilPrice &&
                      restaurant.deliveryTime <= coilTime) ? (
                    <div>
                      <div className="explore-card-cover">
                        <Link to={`/item/${restaurant.id}`}>
                          <img
                            src={restaurant.image}
                            alt={restaurant.name}
                            className="explore-card-image"
                          />
                        </Link>
                        {restaurant.deliveryTime <= coilTime ? (
                          <div className="delivery-time">
                            {restaurant.deliveryTime + "min"}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="res-name">{restaurant.name}</div>
                      {restaurant.foodType}

                      <div className="pir-rat">
                        {restaurant.price <= coilPrice ? (
                          <div className="approx-price">
                            {restaurant.price + "₹"}
                          </div>
                        ) : (
                          ""
                        )}
                        {restaurant.rating <= coilRating ? (
                          <div className="res-rating absolute-center">
                            {restaurant.rating}
                            <i className="fi fi-rr-star absolute-center"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;

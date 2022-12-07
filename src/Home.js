import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://ik.imagekit.io/AmazonImg12/Amazon_Images/71tIrZqybrL._SX3000__cEZ7Pj26K.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667372633922"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title= "Dresses"
            price={166.9}
            rating={5}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_dash_dress_1X._SY304_CB626369146__fcid3u3qDS.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710751183"
          />

          <Product
            id="49538094"
            title= "Easy returns"
            price={159.99}
            rating={4}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_Returns_1x._SY304_CB432774714__RJFHI-uyN.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710751170"
          />
          <Product
            id="4903850"
            title= "Toys Under $30"
            price={139.99}
            rating={0}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/XCM_CUTTLE_1469244_2584128_379x304_1X_en_US._SY304_CB609318944__jWrs5DVMm.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710753702"
          />
       
        </div>
        <div className="home__row">
          <Product
            id="99903850"
            title="Decorate for Halloween"
            price={418.99}
            rating={3}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Handmade-379x304._SY304_CB609394695__bi5nSDta2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710753618"
          />
           <Product
          id="3254354345"
          title="Shop Laptops & Tablets"
          price={1027.99}
          rating={5}
          image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_Laptops_379x304_1X_en_US._SY304_CB418608471__pyO12OCoK.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667233619203"
        />
         
        <Product
          id="90829332"
          title="Fashion favorites for Fall"
          price={98.99}
          rating={5}
          image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/DCC_FEB_PS_M_02_1x._SY304_CB647593327__FFz2bbB8H.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710749639"
        />
       
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title= "Shop activity trackers & smartwatches"
            price={1094.98}
            rating={4}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_SmartWatch_1X._SY304_CB639922137__I3ahNTIS5.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710751245"
          />
          
          <Product
            id="903850"
            title= "New arrivals in Toys"
            price={69.99}
            rating={1}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_Toys_1X._SY304_CB639759658__-PbOlsbua.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710751199"
          />
          <Product
            id="8903851"
            title= "Shop Pet Supplies"
            price={999.99}
            rating={3}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_Pets_1X._SY304_CB639746743__UjpbFWE_p.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710750969"
          />
           
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title= "Create with strip lights"
            price={594.98}
            rating={4}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/Fuji_Dash_StripLighting_379x304_1X_en_US._SY304_CB418597476__rnOJQ9yC2.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1667418189975"
          />
          
          <Product
            id="903850"
            title= "New arrivals in Toys"
            price={69.99}
            rating={1}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/71gvpZYgPxS._AC_UL320__tk0ogMAfp.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710743734"
          />
          <Product
            id="8903851"
            title= "LeapFrog Learning Friends 100 Words Book"
            price={999.99}
            rating={3}
            image="https://ik.imagekit.io/AmazonImg12/Amazon_Images/71wQb2LWUkL._AC_UL320__Y6n54G7zr.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666710746061"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;

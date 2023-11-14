import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardsContainer } from "./Produse.style";
import Search from "./search";
import Footer from "../Common/Footer";
import NavBar from "../Common/NavBar";
import { SubNavBar } from "../Common/SubNavBar/SubNavBar";
import CardProduse from "./CardProduse";

const Produse = () => {
  const [produse, setProduse] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  console.log(searchResults);



  useEffect(() => {
    fetch(`http://localhost:3000/produse`)
      .then((response) => response.json())
      .then((produse) => {
        console.log(produse);
        setProduse(produse);
        setSearchResults(produse);
      });
  }, []);
  return (
    <>
      <NavBar isGuest={true}/>
      <SubNavBar/>
      <Search
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        produse={produse}
      ></Search>
      <h3 style={{
        display:"flex",
        justifyContent:"center",
        margin:"10px"
      }}>Toate Produsele</h3>
      <CardsContainer>
        {searchResults.map((product) => (
        <CardProduse  key={product.id} product={product}/>
        
        ))}
        
      </CardsContainer>
      <Footer/>
    </>
  );
};
export default Produse;
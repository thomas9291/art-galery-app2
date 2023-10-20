import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`



body {
  height: 100%;
  width:100%;
   display: block;
  
  }

  .textContainer{
    display:flex;
    flex-direction:column;
    align-items:center;
    
  }

  .swiper {
  width: 80%;
  heigth:100%;
  padding-top: 50px;
  padding-bottom: 50px;
  }
  .swiper-slide{
    flex-shrink: 0;
    width: 60%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
  }
  .swiper-slide, swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: transform;
    display: block;
}
  .swiper-slide {
   
  background-position: center;
  background-size: cover;
  width: 300px;
 } 

 /* .swiper-slide img {
  display: block;
  width: 100%;
 } */
 .favoriteBtn {
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  border-radius: 999px;
  aspect-ratio: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -6px;
  padding: 6px;
 }
 .cartContainer {
  background-color: white;
  border: 1px solid black;
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow:hidden;
 }
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  justify-content:flex-start;
  align-items: center;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: black;
  width: 100vw;
  /* height:100vh; */
 }

 .footerContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: grey;
  position: sticky;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
 .image {
  object-fit: contain;
 
 }
 .linkContainer {
  margin: 1rem;
  /* padding: 1rem; */
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
 }
.link {
  padding: 1rem;
  margin: 0;
  border-radius: 1rem;
}
.listContainer{
  background-color : black;
  color:white
  padding: 3rem;
  margin:1rem;
  border-radius:1rem;
}
.list{
  padding:2rem;
  color:white;
  text-align:center;
  font-size:x-large;
}

`;

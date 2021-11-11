import React from 'react';
import Navbar from '../component/Navbar';
import Title from '../component/Title';
import Maincontent_kurti from './Maincontent_kurti';
import Maincontent_jeans from './Maincontent_jeans';
import Maincontent_shirts from './Maincontent_shirt';
import Footer from './Footer';
import About from './About';

// import { Link } from 'react-router-dom'

// import React from 'react'

export default function Home() {
    return (
        <div className="homepage">
  <Navbar/>
  <Title/>
 { <h1 className="headname"><span>Our</span> Best Sellers</h1> }
  <hr/>

  {<h2><span>Heart Melter</span> Kurtis</h2>}

  <Maincontent_kurti/>
  {<h2> Jeans</h2>}
  <Maincontent_jeans/>
  
  {<h2><span>Shirts </span>that suits you</h2>}
  <Maincontent_shirts/>



<Footer/>

        </div>
    )
}




//     // <div className="homepage">
//     const Home=({product_name,link,price})=>{
//       return(
// <div>
//   <p>{product_name}</p>
//   <p>{link}</p>
//   <p>{price}</p>
// </div>
//       )
//     }
//   {/* <Navbar/>
//   <Title/>
//   <Productpage/> */}
//     // </div>
//   export default Home


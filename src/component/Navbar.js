 import React from 'react';
//  import { BrowserRouter as Router,Route } from 'react-router-dom';
 import { Link } from 'react-router-dom';
 import Cart from './Cart';

// export default function Navbar() {
//     return (
//         <div className="nav">
//             <ul>
//                 <li> <Link to="/" ></Link></li>
//                 <li><Link to="/about"> About</Link></li>
//                 <li><Link to="/cart">Cart</Link></li>
//             </ul>
//         </div>
//     )
// }

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";
// export default function App() {
//     return (
//         <div>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About</Link>
//               </li>
//             </ul>
//           </nav>
//           <Routes>
//           <Route path="/about">
//             <About />
//           </Route>
         
//         </Routes>
//       </div>
//   );
// }

// function About() {
//     return <h2>About</h2>;
//   }



export default function Navbar() {
    return (
        <>
        <div className="nav"> 
            <ul>
                <li>
                    <h2><span>Style</span>Fashion</h2>
                    </li>
                    <li>
                    
               <h3> <Link to="/">
           <a href="Home.js">   Home </a></Link></h3>
              </li>
                    <li>

               <h3> <Link to="/contact">
           <a href="Contact.js">    Contact </a></Link></h3>
              </li>
                <li>
               <h3> <Link to="/cart">
              <a href="Cart.js"> Cart </a> </Link></h3>
              </li>
                <li>
               <h3> <Link to="/about">
             <a href="About.js">  about </a></Link></h3>
              </li>
            </ul> 

          </div>
          </>
    );
} 

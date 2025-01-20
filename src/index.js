import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Flashcard from "./Flashcard";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/* <Flashcard /> */}
    </div>
  );
}

function Header() {
  // using inline styles
  // return <h1 style={{ color: "red", fontSize: "48px", textTransform: "uppercase"}}>Fast React Pizza Co.</h1>;

  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };

  // return <h1 style={style} className="header">Fast React Pizza Co.</h1>;

  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>;
    </header>
  );
}

function Menu() {
  //come here after line 104
  const pizzas = pizzaData;
  // const pizzas = []; //wen u have an empty array, though it is not showing on the website but it is still showing wen u check in the console. to remove it totally see next line.
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />*/}
      {/* using list rendering to display all the objects in the pizza data array at once */}
      {/* {pizzaData.map(pizza => <Pizza name ={pizza.name} photoName = {pizza.photoName} />)} 
      OR
      */}
      {/* u also need a key which is unique to each item */}
      {/* <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
        ))}
      </ul> */}

      {/* using conditional rendering */}
      {/* {pizzas && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}
      {/* since numPizzas is a falsy value it will display 0 to prevent it use > 0 */}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* using ternary operator */}
      {/* React Fragments(<></>)- allows u to group elements but in the real sense dey don't have a parent element in this e.g if the array is empty we don't want the p tag to display just the else statement . if u want to render a list which needs a unique key here, u use <React.Fragment></React.Fragment> and ensure React has been imported*/}

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stine oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
    // when u want to pass wat is not a string e.g a number, introduce js i.e use {}
  );
}

// if you don't want to use props itself u can destructure it. ensure u use the same name as the one passed in the parent component
// function Pizza(props) {
function Pizza({ pizzaObj }) {
  // console.log(props)

  // using conditional rendering with multiple returns
  // if (pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    // <li className="pizza">

    // setting classes conditionally
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out': ''}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* <span>{pizzaObj.price}</span> */}

        {/* setting classes and text conditionally */}
        {/* {pizzaObj.soldOut ? <span>SOLD OUT</span> : <span>{pizzaObj.price}</span>} OR */}
        <span>{pizzaObj.soldOut ? 'SOLD OUT' : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  // if (hour>=openHour && hour <=closeHour) {
  //     alert("We're currently open!")
  // } else {
  //    alert("Sorry we're closed!")
  // }

  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // come here after the return with footer
  // using conditional rendering with multiple returns -NB: only one return can be displayed
  // if (!isOpen) {
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00 and {closeHour}:00{" "}
  //     </p>
  //   );
  // }

  return (
    <footer className="footer">
      {/* conditional rendering using && operator - remember short circuiting for && operator(if the first value(operant) is true then it displays the second value but when false it doesn't go to d second value at all) */}

      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order oline.</p>
          <button className="btn">Order</button>
        </div>
      )} */}

      {/* using ternary operator */}
      {isOpen ? (
        // <div className="order">
        //   <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        //   <button className="btn">Order</button>
        // </div>
        
        // extracting JSX in to a new component - order
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We are currently open!")
}

// using props destructuring
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// to remove the vertical lines - settings - type diff decoration - select none

// using conditional renderinr for pizzaData
// function Menu() {
// const pizzas = pizzaData

// const pizzas = [] //wen u have an empty array, though it is not showing on the website but it is still showing wen u check in the console. to remove it totally see next line

// const numPizzas = pizzas.length
//   return (
//     <main className="menu">
//       <h2>Our menu</h2>
//
//    {pizzas && (
//       <ul className="pizzas">
//       {pizzaData.map((pizza) => (
//         <Pizza pizzaObj={pizza} key={pizza.name} />
//       ))}
//       </ul>
//)}

// since numPizzas is a falsy value it will display 0 to prevent it use > 0
//    {numPizzas > 0 && (
//       <ul className="pizzas">
//       {pizzaData.map((pizza) => (
//         <Pizza pizzaObj={pizza} key={pizza.name} />
//       ))}
//       </ul>
//)}

// using ternary operator
//    {numPizzas > 0 ? (
//       <ul className="pizzas">
//       {pizzaData.map((pizza) => (
//         <Pizza pizzaObj={pizza} key={pizza.name} />
//       ))}
//       </ul>
//) : null}
//     </main>
//   );
// }

import './App.css';
/**
 * Hooks: functions starting with 'use' e.g useState
 * useState: Allow component to remember information, with current state and function
 *  which lets you toupdate current state */
import {useState } from 'react'; 

/**
 * The React component to return a button
 * @returns button component
 */
function MyButton() {
    return(
        <button>I'm a button</button>
    );
}

/**
 * Section: Display data
 */

const user = {
    name: 'edy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

function Profile() {
    return(
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt = {"Photo of "+ user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize,
                    borderRadius: 50,
                    border: '5px solid red',
                }}
            />
        </>
    );
};

/**Section: rendering lists */
const products = [
  {title: "Cabbage", isFruit: false, id: 1,},
  {title: "Garlic", isFruit: false, id:2,},
  {title: "Apple", isFruit: true, id:3,},
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key = {product.id}
      style = {{
        color: product.isFruit? 'magenta' : 'darkgreen',
      }}
    >
      {product.title}
    </li>
  );

  return(
    <ul>{listItems}</ul>
  );
}

/**
 * Section: Updating the screen & Responding to events, where the button counts are addeded
 */
function Button1() {
  const [count, setCount] = useState(0);    // useState needs to be imported

  function handleClick(){
    setCount(count + 1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

function ButtonCounts(){
  return(
    <div>
      <h1>Counters that update separately</h1>
      <Button1 />
      <Button1 />
      <hr />
    </div>
  );
}

/**
 * Section: Using Hooks, sharing data between components
 */

function ButtonCounts1(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count +1);
  }
  return(
    <div>
      <h1>Counters that updte together</h1>
      <Button2 count={count} onClick={handleClick}/>
      <Button2 count={count} onClick={handleClick}/>
      <hr/>
    </div>
  );
}

// Props for count and handle event passed from parent
function Button2({count, onClick}){
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

/**
 * export default: keywords to specify the main component in the file
 * @returns Main component in the file
 */
export default function MyApp(){
    return(
      // The following is the JSX: markup syntax used in react
      <>
        {/* Section:creating and nesting components */}
        <div>
            <h1>Welcome to my app</h1>
            <MyButton/>
        </div>
        <hr />

        {/* Component:Display data */}
        <Profile/>
        <hr />

        {/* Component: Shopping list */}
        <ShoppingList/>
        <hr />

        {/* Component: ButtonCounts */}
        <ButtonCounts />

        {/* Component: ButtonCounts1 */}
        <ButtonCounts1 />
      </>
    );  
}  
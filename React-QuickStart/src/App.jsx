import './App.css';


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

        {/* Section:Display data */}
        <Profile/>

        {/* Section: Shopping list */}
        <ShoppingList/>
        
      </>
    );
}
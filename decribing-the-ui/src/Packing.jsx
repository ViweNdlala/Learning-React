// conditional rendering using if else
function Item({name, isPacked}){
    if(isPacked){
        return <li className="item"
            style={{color: "green"}}
        >
            {name} ✅
        </li>;
    }

    return <li className="item"
            style={{color: "red"}}
        >
            {name} ❌
        </li>;
}

// Conditional rendering using ternary operator
function Item1({name, isPacked}){
    
    return(
        <li className="item"
            style={isPacked? {color: "green"} : {color:"red"}}
        >
            {isPacked? name +'✅' : name +'❌'}
        </li>
    );
}

// Conditional rendering: striking an element out wehn packed
function Item2({name, isPacked}){
    return(
        <li className="item"
            style={isPacked? {color:"green"} : {color:"red"}}
        >
            {isPacked? <del>{name} ✅</del> : name +'❌'}
        </li>
    );
}

// AND(&&) Operator
function Item3({name, isPacked}){
    return (
        <li>
            {name} {isPacked && '✅'}
        </li>
    );
}

// Conditionally assiginin JSX to a variable, the text
function Item4({isPacked, name}){
    let itemContent = name;
    if(isPacked){
        itemContent = name + "✅";
    }
    return(
        <li>{itemContent}</li>
    );
}

// Conditionally assiginin JSX to a variable, the text
function Item5({isPacked, name}){
    let itemContent = name;
    if(isPacked){
        itemContent = (
            <del>{name + "✅"}</del>
        );
    }
    return(
        <li>{itemContent}</li>
    );
}

// Conditionally assigning JSX to a variable, the actual JSX markup not text
export default function Packing(){
    return(
        <>
        <section>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>

        {/* Using the conditional operator */}
        <section>
            <h1 style={{color:"red"}}>With Conditional or Ternary opertor</h1>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item1
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item1 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item1 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>

        <section>
            <h1 style={{color:"blue"}}>With Conditional or Ternary opertor & del</h1>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item2
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item2 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item2 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>

        <section>
            <h1 style={{color:"yellow"}}>Conditional rendering: AND(&&) Operator</h1>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item3
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item3 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item3 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>

        <section>
            <h1 style={{color:"purple"}}>Condtionally Assigning JSX variable</h1>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item4
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item4 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item4 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>

        {/* with JSX not just text */}
        <section>
            <h1 style={{color:"red"}}>With Conditional or Ternary opertor</h1>
            <h1>Sally Ride's Packing List</h1>
            <ul>
                <Item5
                    isPacked={true}
                    name="Sapce suit"
                />

                <Item5 
                    isPacked={true}
                    name="Helmet with a golden leaf"
                />
                <Item5 
                    isPacked={false} 
                    name = "Photo of Tam" 
                />
            </ul>
            <hr/>
        </section>
    </>
    );
}
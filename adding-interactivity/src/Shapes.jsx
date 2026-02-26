import { useState } from "react";

let initialShapes = [
  { id: 0, type: 'circle', x: 50, y: 100 },
  { id: 1, type: 'square', x: 150, y: 100 },
  { id: 2, type: 'circle', x: 250, y: 100 },
];

let initialCounters = [
  0, 0, 0
];

// Component for counters
function CounterList(){
    const [counters, setCounters] = useState(
        initialCounters
    );
    function handleIncrementClick(index){
        const nextCounters = counters.map((c, i) =>{
            if(i == index){
                return c+1;
            }else{
                return c;
            }
        });
        setCounters(nextCounters);
    }
    return(
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}
                    <button onClick={() =>{
                        handleIncrementClick(i);
                    }}> +1 </button>
                </li>
            ))}
        </ul>
    );
}

export default function ShapeEditor() {
  const [shapes, setShapes] = useState(
        initialShapes
    );

    function handleClick(){
        const nextShapes = shapes.map(shape =>{
            if(shape.type === 'square'){
                return shape;
            }else{
                return{
                    ...shape,
                    y: shape.y +50,
                };
            }
        });

        // Re-render with new array
        setShapes(nextShapes);
    }

    return (
        <>
        <button onClick={handleClick}>
            Move circles down!
        </button>
        {shapes.map(shape => (
            <div
            key={shape.id}
            style={{
            background: 'purple',
            position: 'absolute',
            left: shape.x,
            top: shape.y,
            borderRadius:
                shape.type === 'circle'
                ? '50%' : '',
            width: 20,
            height: 20,
            }} />
        ))}

        <hr/>
        <h1>The following section is for counter list</h1>
        <CounterList />
        </>

    );
}
import { people } from './data.jsx';
import { getImageUrl } from './utils.jsx';
import { Fragment } from 'react';

// Using the map function to map the list of items
export default function List(){

    // get all chemits (only) from the list of people
    const chemists = people.filter( person =>
        person.profession === "chemist"
    );

    // convert a list of chemists into a list of JSX nodes
    const listItems = chemists.map( chemist =>
        <li key={chemist.id}>
            <img 
                src={getImageUrl(chemist)}
                alt={chemist.name} 
            />
            <p>
                <b>{chemist.name}:</b>
                {' '+ chemist.profession + ' '}
                 known for {chemist.accomplishment}
            </p>
        </li>
    );

    // to display everyone not only the chemists
    const peopleList = people.map(person =>{
        return <li 
            key={person.id}
        >
            <img 
                src={getImageUrl(person)} 
                alt={person.name} 
            />
            <b>{person.name}:</b>
            {' '+person.profession+' '}
            known for {person.accomplishment}
        </li>;
    });

    // The JSX node must return a group of nodes not just one
    // Use Fragement the <></> does not work
    const peopleListFrag = people.map( person =>
        <Fragment>
            <h1>{person.name}</h1>
            <p>{person.profession}</p>
        </Fragment>
    );

    return (
        <>
            <ul>{listItems}</ul>
            <hr/>
            <ul>{peopleList}</ul>
            <hr />
            <ul>{peopleListFrag}</ul>
        </>
    );
}
import { useState } from 'react'

export default function Form(){
    const [person, setPerson] = useState({
        firstName: "Barbara",
        lastName: "Hepworth",
        email: "bhepworth@sculpture.com",
    });

    function handleFirstNameChange(e){
        setPerson({
            ...person, 
            firstName: e.target.value
        });
    }

    function handleLastNameChange(e){
        setPerson({
            ...person,
            lastName: e.target.value
        });
    }

    function handleEmailChange(e){
        setPerson({
            ...person,
            email: e.target.value
        });
    }

    return(
        <>
            <label>
                First name:{' '}
                <input 
                    type="text" 
                    value={person.firstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label style={{
                display: 'block',
                marginRight: 20,
                marginBottom: 10,
            }}>
                Last name:
                <input 
                    type="text" 
                    value={person.lastName}
                    onChange={handleLastNameChange}
                    style={{
                        marginLeft: 20,
                    }}
                />
            </label>
            <label>
                Email:
                <input 
                    type="text" 
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.firstName}{' '}
                {person.lastName}{' '} 
                ({person.email})
            </p>
        </>
    );
}
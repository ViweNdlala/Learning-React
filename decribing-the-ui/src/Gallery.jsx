export function Profile(){
    return(
        <img 
            src="https://i.imgur.com/QIrZWGIs.jpg" 
            alt="Alan L. Hart" 
        />
    );
}

 export default function Gallary(){
    return(
        <article>
            <h1>Amazing scientist</h1>
            <Profile />
            <Profile />
            <Profile />
        </article>
    );
}
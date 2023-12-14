import { useEffect, useState } from "react";
import DataCard from "./DataCard";

function Data(){
    // Use state
    // Use effect
    // Export to datacard.js
    
    // useState and useEffect
    const [celebrities, setCelebrities] = useState([])

    useEffect(()=>{
        fetch('https://celebrity-spy-app.onrender.com/celebrities')
        .then(res => res.json())
        .then(data => setCelebrities(data))
    }, [])

    // console.log(celebrity)
    console.log(celebrities)

    return(
        <>
            {celebrities.map((celebrity =>
                <DataCard name={celebrity.name} handle={celebrity.twitterHandle} followers={celebrity.followers} image={celebrity.image} />
            ))}
        </>
    )
}

export default Data;
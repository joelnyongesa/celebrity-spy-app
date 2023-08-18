
// Prop destructuring
function DataCard({name, handle, followers, image}){
    return (
        <div className="card-container">
            <div className="celebrity-card">
                <img src={image} alt={name}/>
                <div className="celebrity-details">
                    <h1>{name}</h1>
                    <em>Twitter Handle: {handle}</em>
                    <p>Number of Followers: {followers}</p>
                </div>
                
            </div>
        </div>
    )

}

export default DataCard;
function Excuselist({category, excuse}){

    return(
        <>
        <h2>{category}</h2>
        <ul>
            {excuse.map((excuse, index) =>{
                return <li key={index}>{excuse.excuse}</li>
            })}
        </ul>
        
        
        </>
    )
}

export default Excuselist
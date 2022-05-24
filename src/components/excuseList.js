function Excuselist({category, excuse}){

    return(
        <>
        <h2>{category}</h2>
        <ul>
            {excuse.map((item, index) =>{
                return <li key={index}></li>
            })}
        </ul>
        
        </>
    )
}

export default Excuselist
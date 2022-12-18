
export function Card({state, cases, deaths}){
    
    return(
        <div className="card">
          
          <h2>{state}</h2>
          <h3>Casos:</h3>
          <h3>{cases}</h3>
          <h3>Mortes:</h3>
          <h3>{deaths}</h3>
          
        </div>
    )
}
import "./city.css"

export const City = ({name, population, area, district, photo}) => {
    return (
      <div className="city-card">
          <div className="city-info">
          <h2 className="city-name">Název města: {name}</h2>
          <p className="city-population"><b>Počet obyvatel: </b>{population}</p>
          <p className="city-area"><b>Rozloha:</b> {area} km²</p>
          <p className="city-district"><b>Okres:</b> {district}</p>
        </div> 
        <img className="city-photo" src={photo} alt={`Foto města ${name}`} />
      </div>  
    )
  }
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import FiltersComponent from "./components/FiltersComponent";
import CardDetails from "./components/CardDetails";
import { Route, Routes } from 'react-router-dom';
import CardsList from "./components/CardsList";

function App() {
  // states for Page to function
  const [wholeData, setWholeData] = useState([])
  const [data, setData] = useState([])


  const [detailsData, setDetailsData] = useState({})
  const [borderCountriesData, setBorderCountriesData] = useState([])

  const [countryName, setCountryName] = useState("")
  const [countryRegion, setCountryRegion] = useState("World")

  const [lightMode, setLightMode] = useState(true)
  //
  // functions for Page to function
  const capitalizeLatter = (inputData) => {
    let lowercased = inputData.toLowerCase();
    let capitalizedString = lowercased.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    setCountryName(capitalizedString)
  }

  const seeDetails0 = ( ObjData, contryData) => {
    
    setDetailsData(ObjData.filter(element => element.name.common === contryData.name.common)[0])
    searchForBorderCountries(contryData.borders)
  }
  const seeDetails = (contryData) => {  
    seeDetails0(data, contryData) 
    setCountryRegion("World")   
  }
  const seeDetailsWhenInDetails = (contryData) => { seeDetails0(wholeData, contryData) }

  const searchForBorderCountries = (bordersArray) => {
    if (bordersArray) {
      setBorderCountriesData(wholeData.filter(element => bordersArray.includes(element.cca3)));
    } else {
      setBorderCountriesData([]);
    }
  }
  //
  //  to fetch and render the data from api
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>{
        setWholeData(data)
        const  data1 = data.filter(element => element.name.common.includes(countryName))
        const data2 = data1.filter(element => element.region===countryRegion)
        const data3 = data1.filter(element => element)
        if(countryRegion==="World"){
          setData( data3)
        }else{
          setData( data2)
        }
    });
  },[countryName, countryRegion])
  
  const Cards= data.map(element =>
      <Card 
        cardData={element}
        key={element.name.common}
        seeDetails={seeDetails}
        setCountryName={setCountryName}
        lightMode={lightMode}
      />
    )
    //
  return (
   
    <div className={lightMode? "App makeVery-Light-Gray-background" : "App VeryDarkBlue-background"}  >
      <Nav
       lightMode={lightMode}
        setLightMode={setLightMode}
      />
      <Routes>
        <Route path="/cardDetails"  
        element={
          <CardDetails
            detailsData={detailsData}
            borderCountriesData={borderCountriesData}
            seeDetailsWhenInDetails={seeDetailsWhenInDetails}
            lightMode={lightMode}
          />
        }/>
        <Route path="/"
          element={
           
              <div className="content-div"   >
                <FiltersComponent
                capitalizeLatter={capitalizeLatter}
                setCountryRegion={setCountryRegion}  
                lightMode={lightMode}
                />
                <CardsList>{Cards}</CardsList>
              </div>
        
          } 
         />
      </Routes>

      <div>
      
        
      </div>
    </div>
    
  );
}

export default App;

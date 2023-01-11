import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowLeft} from 'react-icons/fa';
const CardDetails = ({detailsData, borderCountriesData, seeDetailsWhenInDetails, lightMode }) => {

    // states for cardDetails to function properly
    const [nativeNameObj,  setNativeNameObj] = useState([])
    const [nativeNameObj1,  setNativeNameObj1] = useState([])

    const [currencyObj,  setCurrencyObj] = useState([])
    const [currencyObj1,  setCurrencyObj1] = useState([])

    const [languagesObj,  setLanguagesObj] = useState([])
    const [languagesObj1,  setLanguagesObj1] = useState([])
    //

    useEffect(()=>{
        if(Object.keys(detailsData).length){
        setNativeNameObj([detailsData.name.nativeName])
        setCurrencyObj(detailsData.currencies)
        setLanguagesObj(detailsData.languages)
        }
    }, [detailsData])
     // to get the native name of the country
    useEffect(()=>{
        nativeNameObj.forEach(obj => {
            for (const key in obj) { setNativeNameObj1(obj[key].common); }
        });
    }, [nativeNameObj])
    //
    // to get the currency of the country
    useEffect(()=>{
        if(currencyObj){
          
        const values = Object.values(currencyObj);
        const currenyNameValues = (values.map(element => element.name ))
        let newArr = currenyNameValues.map(function (el, i) {
          if (i === (currenyNameValues.length - 1)) {
              return el;
          } else {
              return el + ", ";
          }
         });  
        setCurrencyObj1(newArr)

        }
    }, [currencyObj])
      const renderCurrency = currencyObj1.map(element => <p key={element}>{element}</p>)
    //
    // to get the languages of the county
    useEffect(()=>{
      if(languagesObj){
        const values = Object.values(languagesObj);
        values.sort()
     
        let newArr = values.map(function (el, i) {
          if (i === (values.length - 1)) {
              return el;
          } else {
              return el + ", ";
          }
         });
        setLanguagesObj1(newArr)
       }
    }, [languagesObj])
   
    const renderLanguages = languagesObj1.map(element =><p key={element}>{element}</p> )
    //
    // to render border countries
    const renderBorderCountriesArr =  borderCountriesData
    renderBorderCountriesArr.sort((a, b) => {
        if (a.name.common < b.name.common ) {
          return -1;
        } else if (a.name.common > b.name.common ) {
          return 1;
        } else {
          return 0;
        }
      });
    const renderBorderCountries =  renderBorderCountriesArr.map(element => { 
       return  <button 
                className={lightMode?'details-btn White-background': "details-btn DarkBlue-background"  }  
                key={element.name.common} 
                onClick={()=>seeDetailsWhenInDetails(element)} >
                <p className={lightMode? "Very-Dark-Blue-1-color": 'White-color'  }>
                  {element.name.common}
                </p>
                </button>
    })
    //
    
  return (
    <div className='card-details__0'>
        <Link to="/" className={lightMode?'card-details__link link-class White-background':"card-details__link link-class DarkBlue-background"}   >
          <FaArrowLeft className={lightMode?'Very-Dark-Blue-1-color':"White-color"}/>
          <div className={lightMode?'Very-Dark-Blue-1-color':"White-color"}>Back</div>
        </Link>
        { 
            Object.keys(detailsData).length>0 &&
            <div className={lightMode?'card-details  Very-Dark-Blue-1-color':'card-details  White-color '}>  
              {detailsData.flags.png && <img alt="flag img" src={detailsData.flags.png}></img>}
              <div className='card-details__content-div'>
                <div className='card-details__content-div-words'>
                  {detailsData.name.common && <h2>{detailsData.name.common}</h2>}
                  <div className='card-details__content-div-words-many'>
                    <div className='card-details__content-div-words-many-1'>  
                      {nativeNameObj1.length>0 && <div><h5>Native Name:</h5> <p>{nativeNameObj1}</p></div>}
                      {detailsData.population>0 && <div><h5>Population:</h5><p>{detailsData.population.toLocaleString()}</p> </div>}
                      {detailsData.region && <div><h5>Region:</h5><p>{detailsData.region}</p> </div>}
                      {detailsData.subregion && <div><h5>Sub Region:</h5><p>{detailsData.subregion}</p> </div>}
                      {detailsData.capital && <div><h5>Capital:</h5><p>{detailsData.capital}</p></div>}
                    </div>
                    <div className='card-details__content-div-words-many-2'>
                      {detailsData.tld && <div><h5>Top Level Domain:</h5><p>{detailsData.tld}</p></div>}
                      {currencyObj1.length>0 && <div><h5>Currencies:</h5>{renderCurrency}</div>} 
                      {languagesObj1.length>0 && <div><h5>Languages:</h5>{renderLanguages}</div>} 
                    </div>
                  </div>
                </div>
                  {renderBorderCountries.length>0 && <div className='border-countries-div' ><h5>Border Countries:</h5>
                  <div className='border-countries-div__buttons-div'>
                  {renderBorderCountries}</div> </div>}
              </div>
            </div>
        }
    </div>

  )
}

export default CardDetails


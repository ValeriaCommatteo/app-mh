import { useEffect } from 'react';
import Card from '../components/Card/index';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import citiesActions from '../redux/actions/citiesActions';
import Search  from '../components/Search/index';
import './Cities/citiesStyle.css'

function Cities() {

  let citiesR = useSelector(store => store.citiesR.cities)
  //console.log(citiesInStore);

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then((response) => {
        dispatch(citiesActions.get_cities(response.data))
      })

  }, [])

  const handleSubmit = (value) => {
    if(value) {
      getAllCities(value)
      .then(res => 
        dispatch(getCitiesAction.get_cities(res))
        //setCities(res)
      )
      .catch(err => console.log(err))
    } else {
      runGetAllCities()
      //setCities(allCities)
    }
  }

  return (
    <>
      <div>
      <div className='containerCitiesPageMargin'>
      </div>

      <Search onSubmitProp={handleSubmit} />

      <div className='cardCitiesMargin'>
      { citiesR.length > 0 ? (
            citiesR.map((item)=> <><div className='title-pageCity'>
            <h3>Collection</h3>
          </div> <Card key={item._id} ciudad={item.nombre} pais={item.pais} imagen={item.foto} cid={item._id}/></>) 
          ) : (<h2 className='empty'>At the moment there are no results</h2>)
          }
      </div>
    </div>

     
    </>
  )

}

export default Cities
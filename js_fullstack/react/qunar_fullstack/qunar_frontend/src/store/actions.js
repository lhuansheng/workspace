export const ACTION_SET_IS_CITY_SELECTOR_VISIBLE = 'action_set_is_city_selector_visible'
export const ACTION_SET_CITY_DATA = 'action_set_city_data'

export function showCitySelector() {
  return {
    type: ACTION_SET_IS_CITY_SELECTOR_VISIBLE,
    payload: true
  }
}

export function fetchCityData() {
  return (dispatch, getState)=>{
    fetch('http://localhost:80/rest/cities')
    .then(res => res.json)
    .then(cityData =>{
      dispatch(setCityData(cityData))
    })
  }
}

export function setCityData(cityData){
  return {
    type: ACTION_SET_CITY_DATA,
    payload: cityData
  }
}
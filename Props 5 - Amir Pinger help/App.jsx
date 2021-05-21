import React from 'react'

function App () {
  const cityArray1 = ['Karachi', 'Lahore', 'Peshawar', 'Quetta']
  const cityArray2 = ['Hyderabad', 'Islamabad', 'Sawat', 'Gawader']

  return (
    <div>
      <MyComponent b={cityArray1} />
      <MyComponent b={cityArray2} />
    </div>
  )
}


class MyComponent extends React.Component {
  render () {
    const myArray = this.props.b

    const shortListedCities = myArray.filter(city => city.length > 6)

    return (
      <ul>
        {shortListedCities.map(city => <li key={city}> {city} </li>)}
      </ul>
    )
  }
}


export default App
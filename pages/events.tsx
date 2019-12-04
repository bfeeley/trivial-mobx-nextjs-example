import { NextPage } from 'next'
import { Fragment } from 'react'
import { useRootData } from '../hooks/useRootData'

const Events: NextPage = () => {
    const { cities, query, setQuery } = useRootData(store => ({
        cities: store.filteredCities,
        query: store.query.get(),
        setQuery: store.setQuery
    }))

    return (
        <Fragment>
            <h1>Events</h1>
            <input value={query} onChange={e => setQuery(e.target.value)} />
            <ul>
                {cities.map(city => (
                    <li key={city}>{city}</li>
                ))}
            </ul>
        </Fragment>
    )
}

export default Events

import { useState, useEffect } from 'react'

function useDatabase(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        (async function () {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        }
        )()
    }, [url])

    return data

}
export default useDatabase;
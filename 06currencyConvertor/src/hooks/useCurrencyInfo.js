import {useState, useEffect} from "react"

// custom Hook
function useCurrencyInfo(currency){
    const [data, setData] = useState({})

    // useEffect function will automatically calls fetch API
    // we don't need another function to call the fetch API
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())      // since response comes in string format. So convert it back to JSON
        .then((res) => setData(res[currency]))
        console.log(data);      // if confustion check the value of data
    }, [currency])
    return data
}

export default useCurrencyInfo
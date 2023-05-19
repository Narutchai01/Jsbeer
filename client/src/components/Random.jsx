// import { dataBeer } from "./interface"
import axios from "axios"
import { useEffect, useState } from "react"


const Random = () => {

    const BaseURL = 'https://api.punkapi.com/v2/beers/random'
    const [data, setData] = useState([])
    // //const [data, setData] = useState([
    //     {
    //         'name': 'Buzz',
    //     },
    //     {
    //         'name': 'Trashy Blonde',
    //     }
    // ])
    async function getData() {
        const res = await axios.get(BaseURL)
        setData(res.data)
    }
    useEffect(() => {
        // axios.get(BaseURL).then((res) => res.data).then((data) => setData(data))
        getData()
    }, [])

    console.log(data);




    return (
        <>
            <div className="text-white border bg-red-600">
                <div>
                    {data.map((item) => (
                        <div key={item.id}>
                            <img src={item.image_url} width="200px" alt="" />
                            <div>
                                <h1>{item.name}</h1>
                                <h2>{item.tagline}</h2>
                                <h2>{item.first_brewed}</h2>
                                <h2>{item.abv}</h2>
                                <h2>{item.ibu}</h2>
                                <h2>{item.description}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}


export default Random

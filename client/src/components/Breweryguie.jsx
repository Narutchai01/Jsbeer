import { useEffect, useState } from "react"
import axios from "axios"
import { FaArrowCircleRight } from 'react-icons/fa'

const Breweryguie = () => {

    const [data, setData] = useState([])

    const BaseURL = 'https://api.openbrewerydb.org/breweries'

    async function getbrew() {
        const res = await axios.get(BaseURL)
        setData(res.data)
    }

    useEffect(() => {
        getbrew()
    }, [])


    console.log(data);




    return (
        <>
            <div className="container mx-auto px-[220px]">
                <div className="grid grid-cols-3 gap-5">
                    {data.map((brew) => (
                        <div key={brew.id} className="rounded-lg bg-[#fca311] overflow-hidden h-[209px] w-[350px]">
                            <a href={brew.website_url} target="_blank" rel="noopener noreferrer">
                                <div className="flex justify-center items-center font-bold h-[80px] text-[23px] ">
                                    <h1>{brew.name}</h1>
                                </div>
                                <div className="bg-white w-full pt-6 rounded-t-xl  h-full px-4 static bottom-0 text-[20px]">
                                    <p>{brew.address_1} {brew.city} {brew.state}</p>
                                    <div className="flex justify-between items-center h-[60px]">
                                        <p>Tel: {brew.phone}</p>
                                        <p className="text-[25px]"><FaArrowCircleRight /></p>
                                    </div>
                                </div>

                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Breweryguie

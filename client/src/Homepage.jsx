import { TypeAnimation } from 'react-type-animation';
import Banner from '../src/assets/Banner.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { CiBeerMugFull } from 'react-icons/ci'
import { IoMdHappy } from 'react-icons/io'
import { AiFillHeart } from 'react-icons/ai'




const Homepage = () => {


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



    return (
        <>
            <div className='bg-[#000814] h-full pb-10'>
                <div className='container mx-auto px-[220px]'>
                    <div className="flex justify-between h-screen items-center ">
                        <div className="flex flex-col">
                            <div className="font-bold text-center text-[40px]  text-white drop-shadow-[0_10px_20px_-4px] shadow-[#ffffff]">
                                <p >We only</p>
                                <p >drink goood</p>
                            </div>
                            <div>
                                <p className="text-[60px] font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#fca311] via-[#feff00]">
                                    <TypeAnimation
                                        sequence={[
                                            'LAGER',
                                            500,
                                            'ALE',
                                            500,
                                            'STOUT',
                                            500,
                                        ]}
                                        wrapper="span"
                                        speed={1}
                                        repeat={Infinity}
                                    />
                                </p>
                            </div>
                        </div>
                        <img src={Banner} alt="" />
                    </div>
                    <div className='rounded-lg h-auto container mx-auto px-[160px] shadow-[0_1px_60px_-30px] shadow-[#fca311]'>
                        <div className='flex flex-col justify-center h-full text-2xl'>
                            {data.map((item, id) => (
                                <div key={id} className='grid grid-cols-2 items-center py-10'>
                                    <div className='w-[300px] h-[500px] bg-gray-600 flex justify-center p-5 rounded-lg'>
                                        <img src={item.image_url} width='100px' height='300px' alt="" />
                                    </div>
                                    <div className='text-[#fca311] text-3xl items-center'>
                                        <h1 className='text-2xl font-bold'>{item.name}</h1>
                                        <p className='text-sm'>{item.tagline}</p>
                                        <p className='text-sm'>FIRST BREW : {item.first_brewed}</p>
                                        <p className='text-sm'>ABV : {item.abv}% | IBU : {item.ibu}</p>
                                        <p className='text-sm'>{item.description}</p>
                                    </div>
                                </div>
                            ))}
                            <button className='text-[#fca111] mt-6 mb-10 mx-[250px] p-6 rounded-xl relative shadow-sm shadow-[#fca311] font-bold hover:text-[#000814] hover:bg-[#fca311]' onClick={getData}>RANDOM</button>
                        </div>
                    </div>
                </div>
                <div className='text-white py-[220px] container mx-auto px-[220px]'>
                    <div className='flex justify-between'>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><CiBeerMugFull /></span>
                            <h1 className='text-2xl font-bold'>GOOD BEER</h1>
                        </div>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><IoMdHappy /></span>
                            <h1 className='text-2xl font-bold'>GOOD LIFT</h1>
                        </div>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><AiFillHeart /></span>
                            <h1 className='text-2xl font-bold'>GOOD MIND</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage

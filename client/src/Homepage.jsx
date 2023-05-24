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
                    <div className='rounded-lg h-[600px] container mx-auto px-[160px] shadow-[0_1px_60px_-30px] shadow-[#fca311]'>
                        {data.map((item) => (
                            <div key={item.id} className='flex justify-center h-full gap-28  items-center'>
                                <div className='bg-[#D9D9D9] w-[600px] flex justify-center rounded-xl p-2'>
                                    <img src={item.image_url} className='rounded-lg' width="140px" alt="" />
                                </div>
                                <div className='text-[#fca311] w-[600px] text-lg items-center '>
                                    <h1 className='font-bold text-xl'>{item.name}</h1>
                                    <h2>{item.tagline}</h2>
                                    <h2>{item.first_brewed}</h2>
                                    <h2>Alcohol:{item.abv}% , Taste:{item.ibu}</h2>
                                    <h2>{item.description}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-white py-[220px] container mx-auto px-[220px]'>
                    <div className='flex justify-between'>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><CiBeerMugFull /></span>
                            <h1 className='text-2xl font-bold'>Goodbeer</h1>
                        </div>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><IoMdHappy /></span>
                            <h1 className='text-2xl font-bold'>Goodlift</h1>
                        </div>
                        <div className='h-72 w-72  items-center flex justify-center flex-col rounded-xl shadow-[0_1px_60px_-30px] shadow-[#fca311] hover:bg-[#fca311] hover:text-[#000814]'>
                            <span className='text-[90px]'><AiFillHeart /></span>
                            <h1 className='text-2xl font-bold'>Goodmind</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage

import { GiBeerBottle } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='bg-[#000814] sticky top-0'>
                <div className='flex justify-between h-[70px] shadow-[0_1px_60px_-30px] shadow-[#fca311] items-center font-bold   container mx-auto px-[220px] text-[#fca311]'>
                    <div className='flex items-center text-[30px]'>
                        <h1><GiBeerBottle /></h1>
                        <h1>B2B</h1>
                    </div>
                    <ul className='flex gap-9 text-lg'>
                        <li>
                            <NavLink to='/'>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/brewery'>
                                BREWERY
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/fact'>
                                FACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar


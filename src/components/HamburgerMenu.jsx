import React from 'react'
import {useNavigate } from 'react-router-dom';
export default function HamburgerMenu({ShowMenu,setShowMenu}) {
    const navigate = useNavigate()
    const CheckPlanet = (planet_name) =>{
        setShowMenu(false)
        navigate(`/planets/${planet_name}`)
    
    }
    return (
        <div className={`fixed inset-0  bg-[#070625] p-4 z-20 transition ${ShowMenu ? 'translate-y-0' : '-translate-y-full'} `}>
            <p className='text-[#fff] text-xl font-bold md:hidden'>THE PLANETS</p>
            <ul>
                <li onClick={() => CheckPlanet('Mercury')} className='text-[#5f5f77] font-[400] py-4'>Mercury</li>
                <li onClick={() => CheckPlanet('Earth')} className='text-[#5f5f77] font-[400] py-4'>Earth</li>
                <li onClick={() => CheckPlanet('Venus')} className='text-[#5f5f77] font-[400] py-4'>Venus</li>
                <li onClick={() => CheckPlanet('Mars')} className='text-[#5f5f77] font-[400] py-4'>Mars</li>
                <li onClick={() => CheckPlanet('Jupiter')} className='text-[#5f5f77] font-[400] py-4'>Jupiter</li>
                <li onClick={() => CheckPlanet('Saturn')} className='text-[#5f5f77] font-[400] py-4'>Saturn</li>
                <li onClick={() => CheckPlanet('Uranus')} className='text-[#5f5f77] font-[400] py-4'>Uranus</li>
                <li onClick={() => CheckPlanet('Neptune')}  className='text-[#5f5f77] font-[400] py-4'>Neptune</li>
            </ul>

        </div>
    )
}

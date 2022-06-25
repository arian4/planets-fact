import React, {useContext , useState } from 'react'
import { useParams } from 'react-router-dom';
import { PlanetContext } from './../context/PlanetContext';
export default function Planet() {
    let { planet_name } = useParams();
    const {FilterPlanetsByName} = useContext(PlanetContext)
    const [planet] = FilterPlanetsByName(planet_name)
    const [ActiveTab, setActiveTab] = useState(0)
    
    
    
    
    return (
        <section className='flex flex-col lg:flex-row lg:flex-wrap  lg:px-20 xl:px-40  items-center justify-center '>
            <ul className='flex items-center justify-between h-[60px] p-4 border-b border-b-[#5f5f77] w-full md:hidden'>
                <li onClick={() => setActiveTab(0)} className={`text-[#5f5f77] font-[400] flex items-center justify-center  h-[60px] ${ActiveTab === 0 ? 'active-tab':null}`}>overview</li>
                <li onClick={() => setActiveTab(1)} className={`text-[#5f5f77] font-[400] flex items-center justify-center h-[60px] ${ActiveTab === 1 ? 'active-tab':null}`}>structure</li>
                <li onClick={() => setActiveTab(2)} className={`text-[#5f5f77] font-[400] flex items-center justify-center h-[60px] ${ActiveTab === 2 ? 'active-tab':null}`}>surface</li>
            </ul>
            <div className='mt-10 lg:mt-0 relative basis-1/2'>
                {ActiveTab === 0
                    ?  <img  
                            className='h-[200px] w-full lg:w-[350px] lg:h-full' 
                            src={planet.images.planet} 
                            alt={planet.name}  
                        />
                    : null
                }
                {ActiveTab === 1
                    ?  <img  
                            className='h-[200px] w-full lg:w-[350px] lg:h-full' 
                            src={planet.images.internal} 
                            alt={planet.name}  
                        />
                    : null
                }
                {ActiveTab === 2
                    ?   <>
                            <img  
                            className='h-[200px] w-full lg:w-[350px] lg:h-full' 
                            src={planet.images.planet} 
                            alt={planet.name}  
                            />
                            <img  className='absolute left-0 -bottom-10 w-24 h-24 lg:w-28 lg:h-28' src={planet.images.geology} />
                        </>  
                        
                    : null
                }

                
            </div>
            <div className='my-10 lg:my-12 px-4 md:px-10 md:flex md:items-center md:justify-between md:gap-10 lg:flex-col lg:items-start lg:basis-1/2'>
                <div className='basis-1/2'>
                    <h3 className='text-2xl lg:text-3xl text-white text-center md:text-left mb-3'>{planet.name}</h3>
                    {
                        ActiveTab === 0 ? 
                        <>
                            <p className='text-[#5f5f77] text-center md:text-left text-base'>{planet.overview.content}</p>
                            <p className='text-[#5f5f77] text-center md:text-left w-full mt-3'>
                                Source : <a className='font-bold ' href={planet.overview.source}>wikipedia</a>
                            </p>
                        </>
                        : null
                    }
                    {
                        ActiveTab === 1 ? 
                        <>
                            <p className='text-[#5f5f77] text-center md:text-left text-base'>{planet.structure.content}</p>
                            <p className='text-[#5f5f77] text-center md:text-left w-full mt-3'>
                                Source : <a className='font-bold ' href={planet.structure.source}>wikipedia</a>
                            </p>
                        </>
                        : null
                    }
                    {
                        ActiveTab === 2 ? 
                        <>
                            <p className='text-[#5f5f77] text-center md:text-left text-base'>{planet.geology.content}</p>
                            <p className='text-[#5f5f77] text-center md:text-left w-full mt-3'>
                                Source : <a className='font-bold ' href={planet.geology.source}>wikipedia</a>
                            </p>
                        </>
                        : null
                    }

                </div>
                <div className='basis-1/2 hidden md:block mt-5 lg:mt-0 lg:w-full'>
                    <ul className='lg:flex-1'>
                        <li onClick={() => setActiveTab(0)} className={` ${ActiveTab === 0 ? 'active-tab-md':'default-tab'}`}>01 overview</li>
                        <li onClick={() => setActiveTab(1)} className={` ${ActiveTab === 1 ? 'active-tab-md':'default-tab'}`}>02 Internal structure</li>
                        <li onClick={() => setActiveTab(2)} className={` ${ActiveTab === 2 ? 'active-tab-md':'default-tab'}`}>03 Surface Geology</li>
                    </ul>
                </div>
                
                
            </div>
            <div className ='w-full py-2 px-4 md:px-10 md:flex md:items-center md:justify-between'>
                <div className='text-[#5f5f77] border-2 lg:w-full border-[#5f5f77] flex md:flex-col items-center md:items-start justify-between p-4 mb-2 md:mx-3'>
                    <p>ROTATION TIME </p>
                    <span>{planet.rotation}</span>
                </div>
                <div className='text-[#5f5f77] border-2  lg:w-full border-[#5f5f77] flex md:flex-col items-center md:items-start justify-between p-4 mb-2 md:mx-3'>
                    <p>REVOLUTION TIME </p>
                    <span>{planet.revolution}</span>
                </div>
                <div className='text-[#5f5f77] border-2  lg:w-full border-[#5f5f77] flex md:flex-col items-center md:items-start justify-between p-4 mb-2 md:mx-3'>
                    <p>RADIUS </p>
                    <span>{planet.radius}</span>
                </div>
                <div className='text-[#5f5f77] border-2  lg:w-full border-[#5f5f77] flex md:flex-col items-center md:items-start justify-between p-4 mb-2 md:mx-3'>
                    <p>AVERAGE TEMP </p> 
                    <span>{planet.temperature}</span>
                </div>
            </div>
        </section>
  )
}

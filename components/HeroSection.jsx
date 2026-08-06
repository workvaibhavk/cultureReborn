import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate();
    return (
        <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen' >


            <h1 className='text-5xl md:text-[70px] md-leading-18 font-semibold max-w-510'> For the Cinema, <br /> For you </h1>

            <button onClick={() => navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer' >
                Explore More
                <ArrowRight className='w-5 h-5' />
            </button>

        </div>
    )
}

export default HeroSection
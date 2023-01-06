import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import logoFigma from '../..'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import logoFigma from './../logofigma.png';
export default function Home() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <div className='flex main-nav'>
                <img src={logoFigma} className="figmalogo" />
                <div className='border-2 h-25  nav backdrop-blur-lg'>
                    <div className='flex font-lg text-white'>
                        <span className='lg:p-3'><u className='lg:p-5'>Home</u></span>
                        <span className='lg:p-3'>Our Industrius</span>
                        <span className='mt-4'><ExpandMoreIcon style={{ fontSize: '2rem' }} /></span>
                        <span className='lg:p-3'>Our Company</span>
                        <span className='mt-4'><ExpandMoreIcon style={{ fontSize: '2rem' }} /></span>
                    </div>
                    <div className='right-nav text-white'>
                        <span className='p-3 mb-3'>Career</span>
                        <span className='p-3 mb-3'>Contact</span>
                        <span className='p-1 mb-4'> <SearchIcon className=' search' /></span>

                        {/* <span>Seacrh</span> */}
                    </div>

                </div>
            </div>
            <div className='home'>
                {/* <h5>Home</h5> */}
                <div className="relative lg:top-56 xs:top-72" >
                    <Carousel responsive={responsive} interval={7000} dynamicHeight={true} showDots={true} className='mt-2' swipeable={true} infiniteLoop={false} autoPlay={false}>
                        <div className='item  ' >
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                            {/* <img className='h-25'  src="https://researchleap.com/wp-content/uploads/2021/09/Usine-du-futur_0-scaled.jpg" /> */}
                        </div>
                        <div className='item  ' >
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                            {/* <img className='h-25'  src="https://researchleap.com/wp-content/uploads/2021/09/Usine-du-futur_0-scaled.jpg" /> */}
                        </div>
                       <div className='item  ' >
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                            {/* <img className='h-25'  src="https://researchleap.com/wp-content/uploads/2021/09/Usine-du-futur_0-scaled.jpg" /> */}
                        </div>
                    </Carousel>
                </div>

            </div>
        </>

    )
}

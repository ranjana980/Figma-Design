import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Lottie from 'react-lottie';
import WidgetsIcon from '@material-ui/icons/Widgets';
import HotelIcon from '@material-ui/icons/Hotel';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import SearchIcon from '@material-ui/icons/Search';
import SpaIcon from '@material-ui/icons/Spa';
import cat from '../lotties/developer.json'
import hotel from '../lotties/hotel.json'
import food from '../lotties/food.json'
import grocery from '../lotties/grocery.json'
import packing from '../lotties/packing.json'
import shoping from '../lotties/shoping.json'
import logoFigma from './../logofigma.png';
export default function Home() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cat,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: hotel,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: packing,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions3 = {
        loop: true,
        autoplay: true,
        animationData: grocery,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions4 = {
        loop: true,
        autoplay: true,
        animationData: food,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const defaultOptions5 = {
        loop: true,
        autoplay: true,
        animationData: shoping,
        height: '100px',
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };



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
                        <span className=' '><u className='p-5'>Home</u></span>
                        <span className=''>Our Industrius</span>
                        <KeyboardArrowDownIcon className='text-white arrow' />
                        <span className='mt-4'></span>
                        <span className=''>Our Company</span>
                        <KeyboardArrowDownIcon className='text-white arrow' />
                        <span className='mt-4'><i className="fas fa-angle-down" aria-hidden="true"></i></span>
                    </div>
                    <div className='right-nav text-white'>
                        <span className=' mb-3'>Career</span>
                        <span className=' mb-3'>Contact</span>
                        <span className=' mb-3'><SearchIcon className='text-white search' /></span>
                    </div>
                </div>
            </div>
            <div className='home'>
                <div className="relative lg:top-72 xs:top-72" >
                    <Carousel responsive={responsive} interval={7000} dynamicHeight={true} showDots={true} className='mt-2' swipeable={true} infiniteLoop={false} autoPlay={false}>
                        <div style={{ height: '430px' }}>
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                        </div>
                        <div style={{ height: '430px' }}>
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                        </div>
                        <div style={{ height: '430px' }}>
                            <h1 className='text-gradient-to-r from-yello-400'>RAMAERA </h1>
                            <h1 className='text-gradient-to-r from-yello-400'>INDUSTRIES</h1>
                            <h4>An Incredible multi-industrial approach orianted<br />towords financial independant,custmor focus and<br /> serving the best quality to the people</h4>
                            <button className='more-btn'>Explore More</button>
                        </div>
                    </Carousel>
                </div>
            </div>
            <div className='relative bottom-72 bg-gray-900'>
                <div className='justify-content-between w-100 lg:p-20 xs:p-10' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    {/* <div class="arrow-up"></div> */}
                    {/* <div class="arrow-down"></div> */}
                    {/* <div class="arrow-left"></div> */}
                    <div className="arrow-right"></div>
                    <div className="div-left">
                        <h1 className='text-gradient-to-r from-yello-400'>THE RAMAERA EXPANSION </h1>
                        <h5 className="text-white">
                            We are aiming to be a part of the major industrialisation drive<br /> in india and embarking our presnence in every significant<br />industrial domain including IT.
                        </h5>
                    </div>
                </div>

                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    <div className='left-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                    <div className='right-side text-end ' >
                        <h2>Unleashing the strength of </h2>
                        <h2 style={{ color: '#8c0b9a', }}>Technology </h2>
                        <h5 className='text-gray-300'>We belive in innvovation and excellence hence,<br />our approach in the field of technology is<br />focused to relish Incredible custmor experience<br />and stability business models for tomarrow.</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div' >

                            </div>
                        </div>
                    </div>
                    <div className='small-div'>
                        <WidgetsIcon className="icon" />
                    </div>
                </div>
                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    <div className='small-div-left' style={{ background: 'radial-gradient(rgb(151 141 13), rgb(212 211 190))' }}>
                        <HotelIcon className="icon"  />
                    </div>
                    <div className='left-side text-start' >
                        <h2 className='text-yellow-600'>making </h2>
                        <h2 className='text-yellow-600'>accommodations easier </h2>
                        <h5 className='text-gray-300'>Introducing capsule hotels in places of extreme<br />need such as examination centers and hospitals<br />to provide comfortable and convenient<br />accommodation at pocket friendy prices.</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div-left' ></div>
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions1}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                </div>
                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    <div className='left-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions2}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                    <div className='small-div-pack' style={{ background: 'radial-gradient(#c88153, rgb(212, 211, 190))' }}>
                        <IndeterminateCheckBoxIcon className="icon" />
                    </div>
                    <div className='right-side-pack text-end ' >
                        <h2>Packing industry for</h2>
                        <div className='flex relative lg:left-48 xs:left-10'><h2>business </h2><h2 className='text-orange-200 ml-2'>growth</h2></div>
                        <h5 className='text-gray-300'>We provide packaging solutions to help your<br />business flourish with boosted outreach.<br />ensuring the protection,containment,and<br />communication of packaged projects is our<br />foremost priority.</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div' ></div>
                        </div>

                    </div>
                </div>
                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    <div className='small-div-left' style={{ background: 'radial-gradient( #8b026ed9,#86b4c1)' }}>
                        <AddShoppingCartIcon className="icon"  />
                    </div>
                    <div className='left-side text-start' >

                        <h2 className='text-gradient-to-r from-blue-800 offer'>offering the best with </h2>
                        <h2 className='text-gradient-to-r from-blue-800 offer'>fmcg industry </h2>
                        <h5 className='text-gray-300'>Ramaera fmca industry has commenced an<br />extensive range of fmca to make your days<br />more than ordinary. We plan to offer you<br />nothing less than the best.</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div-left' ></div>
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions3}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                </div>
                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', display: 'flex' }}>
                    <div className='left-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions4}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                    <div className='right-side text-end ' >
                        <h2>Agri-business to bestow</h2>
                        <h2 className='nature'>nature's Love </h2>
                        <h5 className='text-gray-300'>Our Agri-business industry is established to get<br />you fresh and organic fruits and vegetables<br />with the blessed with the touch of nature</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div' ></div>
                        </div>
                    </div>
                    <div className='small-div' style={{ background: 'radial-gradient(#1f854ed9,#61dafb)' }}>
                        <SpaIcon className="icon" />
                    </div>
                </div>
                <div className='justify-content-between w-100 p-5' style={{ borderTop: '1px solid white', borderBottom: '1px solid white', display: 'flex' }}>
                    <div className='small-div-left' style={{ background: 'radial-gradient(#8b026ed9,#86b4c1 )' }}>
                        <StoreMallDirectoryIcon className="icon" />
                    </div>
                    <div className='left-side text-start' >
                        <h2>Get all your essentials in</h2>
                        <h2 className='place'>one place </h2>
                        <h5 className='text-gray-300'>Ramaera Supermart is an online custmor<br />oriented marketpave to motivated to provude<br />everythong you need right at one place under<br />the comfort of your homes.</h5>
                        <div className='d-flex justify-content-end'>
                            <button className='read-more p-2'>Read More</button>
                            <div className='sm-div-left' ></div>
                        </div>
                    </div>
                    <div className='right-side'>
                        <div className='img-lottie'>
                            <Lottie
                                options={defaultOptions5}
                                className="img-lottie"
                            />
                        </div>
                    </div>
                </div>
                <div className='bg-gray-900 lg:p-48'>
                    <div className='arrow-left'>

                    </div>
                </div>
            </div>
        </>

    )
}

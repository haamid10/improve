import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className=" text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center" >
            <p className=" text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
            <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with data</h1>
            <div className=" md:flex md:flex-row items-center  ">
                <p className=" md:text-5xl sm:text-4xl text-xl font-bold ">Fast , Flexible financing for</p>
                <Typed className=" md:text-5xl sm:text-4xl text-xl font-bold pl-2" strings={ [' BTB','BTS', 'SASS']} typeSpeed={120} backSpeed={160} loop/>
            </div>
            <p className='mt-4 md:text-2xl text-xl font-bold text-gray-500'>Monitor your data to increase revenue for BTB , BTC & SASS platforms</p>
            <button className=' bg-[#00df9a] rounded-md my-6 mx-auto text-black font-medium  text-xl  w-[150px]   '>start</button>
        </div>

    </div>
  )
}

export default Hero
import laptop from '../assets/laptop.jpg'
const Analytics = () => {
  return (
    <div className=" w-full bg-white py-10 px-4">
        <div className=" max-w-[1240px] mx-auto grid md:grid-cols-2 ">
            <img className='w-[500px] mx-auto my-4 ' src={laptop} alt="laptop" />
            <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage data Analytics Centrally </h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus fugit, quidem rerum omnis ab itaque esse 
                totam aspernatur nostrum ipsa dolores reprehenderit,
                eum praesentium culpa eius porro vel? Natus, deleniti?
            </p>
            <button className='text-[#00df9a] p-2 rounded-md my-6 mx-auto md:mx-0 bg-black font-medium  text-xl  w-[150px]   '>get start</button>
        </div>
        </div>
       
    </div>
  )
}

export default Analytics
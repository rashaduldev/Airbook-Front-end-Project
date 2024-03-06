import fet1 from '../../../public/Thumbnail/Rectangle 181.png'
import fet2 from '../../../public/Thumbnail/Rectangle 18-11.png'
import fet3 from '../../../public/Thumbnail/Rectangle 18-22.png'

const MainPart = () => {
    return (
        <div className="mx-20 mt-24">
            {/* Featured Dentinations part */}
            <div>
                <h1 className="text-black font-bold text-3xl my-3">Featured Dentinations</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet1} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                    <div className="card bg-base-100 shadow-2xl">
                    <figure className="px-3 pt-10">
                        <img src={fet3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center">
                        <p className='font-bold text-lg'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn bg-[#ffb700e8] hover:bg-[#FFB700] px-14">View More</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MainPart;
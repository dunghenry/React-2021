import Cards from '../../assets/desktop/isocard.svg';
const Slogan = () => {
    return (
        <section className="md:my-28 relative md:grid md:grid-cols-3 md:items-center md:text-48 text-36 my-14 font-extrabold">
            <div className="text-center md:col-span-1 md:col-start-2">
                <p>
                    Earn <span className="text-purple-300">More</span>
                </p>
                <p className="">
                    Pay Less
                </p>
                <button className="text-20 text-white px-6 py-[6px] font-bold mt-[27px] bg-purple-500 rounded-[8px] hover:bg-pink-500 transition-all duration-300 md:text-24 md:px-8 md:py-[8px]">Start</button>
            </div>
            <div className="mt-[69px] md:absolute md:right-[-1rem]">
                <img src={Cards} alt="credit-card" />
            </div>
        </section>
    )
}

export default Slogan;

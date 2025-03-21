export default function DestinationCard1({cardTitle, cardContent, cardImg}) {
    return(
        <div className="xl:w-[80%] lg:w-[100%] rounded-4xl shadaow-lg shadow-gray-300 bg-pink-300 flex flex-row items-center justify-between px-[2rem] py-[2rem] gap-[1.5rem] self-end max-[450px]:flex-col max-[450px]:self-center max-[450px]:w-[100%] max-[450px]:p-[1rem] max-[450px]:flex-col">
            <div className="flex flex-col justify-center gap-[1rem] w-[50%] max-[450px]:order-2 max-[450px]:w-[90%]">
                <h2 className="text-[2.5rem] font-[600] text-black leading-[3rem] max-[450px]:text-[1.5rem] max-[450px]:leading-[1.5rem] max-[450px]:w-[100%]">{cardTitle}</h2>
                <p className="text-[1rem] max-[450px]:text-[12px] max-[450px]:leading-[15px]">{cardContent}</p>
            </div>
            <img src={cardImg} alt="" className="xl:w-[40%] lg:w-[50%] rounded-3xl border-[2px] border-solid border-white shadow-lg shadow-gray-500" />
        </div>
    );
}
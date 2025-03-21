export default function WhyBrajSevaCard({icon, title, content}) {
    return(
        <div className="text-black flex flex-col w-[22rem] bg-gray-300 mb-[3rem] py-[1.5rem] px-[3rem] rounded-xl gap-[0.5rem] items-center shadow-gray-400 shadow-lg max-[450px]:w-[15rem] max-[450px]:p-[1rem]">
            <i className={icon}></i>
            <h3 className="text-[1.6rem] font-[600] max-[450px]:text-[1.3rem] max-[450px]:leading-[1.3rem]">{title}</h3>
            <p className="text-center max-[450px]:text-[12px] max-[450px]:leading-[15px]">{content}</p>
        </div>
    );
}
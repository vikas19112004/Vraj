export default function ServiceCard({ serviCardImg, serviCardTitle }) {
    return(
        <div className="h-[400px] w-[350px] bg-blue-200 rounded-[15px] flex flex-col items-center gap-[2rem] py-[2rem] shadow-lg shadow-white mb-[2rem] max-[450px]:w-[250px] max-[450px]:h-[250px] max-[450px]:gap-[1rem]">
            <img src={serviCardImg} alt="" className="h-[60%] w-[80%] rounded-[15px] border border-solid border-gray-300 shadow-lg shadow-gray-400 max-[450px]:h-[70%]" />
            <h3 className="text-[2rem] font-[600] text-gray-800 w-[90%] text-center max-[450px]:text-[1.4rem]">{serviCardTitle}</h3>
        </div>
    );
}
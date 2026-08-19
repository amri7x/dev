import travelData from "../TravelData"
import Travel from "./Travel"


const Card = () => (
    <>
        {travelData.map(({imageUrl,date,country,title,description}, id) => (
            <>
                <img src={imageUrl}/>
            </>
        )
    )}
    </>
)

export default Card;

    // <div className="my-[45px] px-[40px] flex flex-col gap-[34px] text-default font-[Inter]">
    //   {travelData.map((item) => (
    //     <div key={item.id} className="flex gap-4">
    //         <div>
    //             <img 
    //             src={item.imageUrl} 
    //             alt={item.title}
    //             className="max-w-[125px] h-[168px] rounded-[5px] object-cover shadow-md transition-transform hover:scale-105" 
    //             />
    //         </div>
    //         <div className="flex flex-col w-full">
    //             <div className="flex gap-3 justify-start">
    //                 <div className="pt-1">
    //                     <svg
    //                         width="15"
    //                         height="15"
    //                         viewBox="0 0 7 10"
    //                         fill="none"
    //                         xmlns="http://www.w3.org/2000/svg">
    //                     <path 
    //                         fill-rule="evenodd" 
    //                         clip-rule="evenodd" 
    //                         d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" 
    //                         fill="#F55A5A"/>
    //                 </svg>
    //                 </div>
    //                 <div>
    //                     <p>{item.country}</p>
    //                 </div>
    //                 <div>
    //                     <a href="">View on Google Maps</a>
    //                 </div>
    //             </div>
    //             <h2 className="font-bold text-[25px]">
    //                 {item.title}
    //             </h2>
    //             <p className="font-bold text-[0.9rem]">{item.date}</p>
    //             <p>
    //                 {item.description}
    //             </p>
    //         </div>
    //     </div>
    //   ))}
    // </div>
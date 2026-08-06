// import { ArrowLeft, Flame, Star } from 'lucide-react'
// import React from 'react'

// const MoviePageNav = () => {
//     return (
//         <div>
//             <div className='absolute flex'>
//                 <div className="left">
//                     <ArrowLeft />
//                 </div>

//                 <div className="right flex">
//                     <Flame />
//                     <Star />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MoviePageNav




// import { ArrowLeft, Flame, Star } from 'lucide-react'
// import React from 'react'

// const MoviePageNav = () => {
//     return (
//         <div className="relative">
//             <div className="flex justify-between items-center w-full">
//                 <div className="left">
//                     <ArrowLeft className="cursor-pointer" />
//                 </div>
//                 <div className="right flex gap-4">
//                     <Flame className="cursor-pointer" />
//                     <Star className="cursor-pointer" />
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default MoviePageNav


















import { ArrowLeft, Flame, Star } from 'lucide-react'
import React from 'react'

const MoviePageNav = () => {
    return (
        <div className="relative w-full h-full">
            <div className="navCnt absolute inset-5 flex justify-between items-center p-4">
                <div className="left">
                    <button>
                        <ArrowLeft className="text-white cursor-pointer w-6 h-6" />
                    </button>
                </div>
                <div className="right flex gap-2">
                    <button>
                        <Flame className="text-white cursor-pointer w-6 h-6" />
                    </button>
                    <button>
                        <Star className="text-white cursor-pointer w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MoviePageNav
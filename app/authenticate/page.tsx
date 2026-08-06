import { redirect } from 'next/navigation';

export default function Authenticate(){

// const session = await getSession();
  
//   if (!session) {
    redirect('/login'); // Redirects unauthorized users
//   }


    return (
        <div className="">
            <div className="">
                <div className="">

                </div>
            </div>
        </div>
    )
}
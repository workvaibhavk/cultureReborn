import { redirect } from 'next/navigation';

export default function Authenticate(){  
    redirect('/login');
}
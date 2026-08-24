"use client";
import { useRouter } from 'next/navigation';

export default function Authenticate(){  
    const router = useRouter();
    router.push('/login');
}
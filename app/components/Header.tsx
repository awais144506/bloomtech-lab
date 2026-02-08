'use client'; 

import { useUser } from '@auth0/nextjs-auth0/client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
    const { user, error, isLoading } = useUser();
    return (
        <header className='flex w-full bg-[#666555] justify-between px-14 items-center'>
            <div className='flex items-center'>
                <Link href='https://www.humanrightsfirst.org/'>
                    <Image
                        src="/logo.png"
                        alt="Human Rights First Logo"
                        width={150}
                        height={80}
                        className="object-contain"
                    />
                </Link>
            </div>

            <div className='flex items-center py-4 gap-16'>
                <Link href='/' className='text-white hover:text-amber-200'>
                    Home
                </Link>
                <Link href='/graphs' className='text-white hover:text-amber-200'>
                    Graphs
                </Link>
                
                {/* user exists means the person is authenticated */}
                {user && (
                    <Link href='/profile' className='text-white hover:text-amber-200'>
                        Profile
                    </Link>
                )}

                {/* Integration of Logging Buttons */}
                {!user ? (
                    <a 
                      href="/api/auth/login" 
                      className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Login
                    </a>
                ) : (
                    <a 
                      href="/api/auth/logout" 
                      className="text-white border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
                    >
                        Logout
                    </a>
                )}
            </div>
        </header>
    );
}
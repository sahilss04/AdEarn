
import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Avatar, Button } from '@mui/material';
import { Notifications } from '@mui/icons-material';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-between items-center p-2 border-b border-[#ccd] bg-white max-h-[50px]">
            <Image src="/AdEarn_Logo.png" width={100} height={100} alt="AdEarn Logo" />
            <div className="flex items-center">
                <button className="h-[50px] w-[50px]">
                    <Notifications sx={{ fontSize: "30px" }} />
                </button>

                <button className='h-[35px] w-[35px] border-sm'>
                    <Avatar alt="Admin" src="AdEarn_Logo.png" className='bg-blue-500' sx={{ height: '30px', width: '30px'}}/>
                </button>
            </div>
        </header>
    );
};

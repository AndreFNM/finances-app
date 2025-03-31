"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
import {
    HomeIcon,
    CreditCardIcon,
    ArrowTrendingDownIcon,
    Cog6ToothIcon,
    CurrencyDollarIcon,
    UserCircleIcon,
    ArrowRightStartOnRectangleIcon,
  } from '@heroicons/react/24/outline';

const navItems = [
    {label: 'Home', href: '/', icon: HomeIcon},
    {label: 'Dashboard', href: '/dashboard', icon: CreditCardIcon},
    {label: 'Transactions', href: '/transactions', icon: ArrowTrendingDownIcon},
    {label: 'Add Transaction', href: '/transactions/add', icon: CurrencyDollarIcon },
    {label: 'Settings', href: '/profile-settings', icon: Cog6ToothIcon },
    
]

export default function Sidebar() {
    const pathname = usePathname();
    const {data: session} = useSession()

    return (
      <>
        {session ? (<aside className="flex flex-col justify-between h-screen w-64 bg-gray-900 text-white p-4 fixed">
          <div>
            <div className="mb-10 text-2xl font-bold">Finances<span className="text-teal-400">App</span></div>
    
            <nav className="space-y-2">
              {navItems.map(({ label, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={label}
                    href={href}
                    className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm transition-all 
                    ${isActive ? 'bg-teal-600 text-white' : 'hover:bg-gray-700 text-gray-300'}`}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                );
              })}
            </nav>
          </div>
    
          <div className="space-y-4">
            <button onClick={() => signOut()} className="flex items-center gap-2 w-full px-4 py-2 rounded-md bg-gray-800 text-gray-200 hover:bg-gray-700 text-sm">
              <ArrowRightStartOnRectangleIcon className="h-5 w-5" />
              Logout
            </button>
    
            <div className="flex items-center gap-3 px-4 py-2 rounded-md hover:bg-gray-800 transition">
              <UserCircleIcon className="h-8 w-8 text-gray-400" />
              <div>
                <p className="text-sm font-medium">André Magalhães</p>
                <p className="text-xs text-gray-400">View profile</p>
              </div>
            </div>
          </div>
        </aside>)
      :
      (<button onClick={() => signIn()}>Sign in</button>)  
      }
        </>
      );
    }
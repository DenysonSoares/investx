"use client"

import { useNavigationContext } from '@/app/contexts/NavigationsContext';
import React from 'react';

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const MenuNavigation = () => {

    const { state } = useNavigationContext();
    const { navigation } = state;

    return (
        <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default MenuNavigation
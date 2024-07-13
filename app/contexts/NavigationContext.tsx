"use client"

import React, { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface User {
    name: string;
    email: string;
    imageUrl: string;
}

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

interface UserNavigationItem {
    name: string;
    href: string;
}

interface NavigationContextState {
    user: User;
    navigation: NavigationItem[];
    userNavigation: UserNavigationItem[];
}

const defaultUser: User = {
    name: 'Tom Cook', 
    email: 'tom@example.com', 
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}

const defaultNavigation: NavigationItem[] = [
    { name: 'Meus investimentos', href: '/', current: true },
];

const defaultUserNavigation: UserNavigationItem[] = [
    { name: 'Perfil', href: '#' },
    { name: 'Configurações', href: '#' },
    { name: 'Sair', href: '#' },
];

const defaultState: NavigationContextState = {
    user: defaultUser,
    navigation: defaultNavigation,
    userNavigation: defaultUserNavigation,
};

interface NavigationProviderProps {
    children: ReactNode;
}

interface NavigationContextType {
    state: NavigationContextState;
    setState: Dispatch<SetStateAction<NavigationContextState>>;
}

export const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
    const [state, setState] = useState<NavigationContextState>(defaultState);

    return (
        <NavigationContext.Provider value={{ state, setState }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigationContext = (): NavigationContextType => {
    const context = useContext(NavigationContext);
    if (context === undefined) {
        throw new Error('useNavigationContext must be used within a NavigationProvider');
    }
    return context;
};

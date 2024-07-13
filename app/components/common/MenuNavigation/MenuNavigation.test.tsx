import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/dom'
import { NavigationContext } from "../../../contexts/NavigationContext";
import MenuNavigation from "./MenuNavigation";

const mockNavigationContext: any = {
    state: {
        navigation: [
            { name: 'Meus investimentos', href: '#investments', current: true },
            { name: 'Rendimentos', href: '#earnings', current: false },
            { name: 'Ativos', href: '#assets', current: false },
        ]
    },
};

const renderWithContext = (component: React.ReactNode) => {
    return render(
        <NavigationContext.Provider value={mockNavigationContext}>
            {component}
        </NavigationContext.Provider>
    );
};

describe("Teste teste", () => {
    test('renders navigation items correctly', () => {
        const { getByText } = renderWithContext(<MenuNavigation />);
    
        expect(getByText('Meus investimentos')).toBeInTheDocument();
        expect(getByText('Rendimentos')).toBeInTheDocument();
        expect(getByText('Ativos')).toBeInTheDocument();
    });
})
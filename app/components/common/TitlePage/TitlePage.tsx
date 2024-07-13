"use client"

import { usePathname } from "next/navigation";
import ModalInvestimento from "../../customs/ModalInvestimento/ModalInvestimento"

const TitlePage = ({ title }: any) => {
    let pathname = usePathname();
    let titlePage  = ""

    if (pathname === "/") {
        titlePage = "Meus Investimentos"
    }
    if (pathname.includes("/investiments/")) {
        titlePage = "Detalhes do empreendimento"
    }

    return (
        <header className="bg-white shadow">
            <div className=" flex justify-between mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 capitalize">{titlePage}</h1>
                {pathname === "/" && (
                    <ModalInvestimento />
                )}
            </div>
        </header>
    )
}

export default TitlePage
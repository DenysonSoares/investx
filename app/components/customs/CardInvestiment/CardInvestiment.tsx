interface Investment {
    id: number
    investmentName: string;
    ownerName: string;
    date: string;
    value: string;
  }

const CardInvestimento = ({id, investmentName, ownerName, date, value}: Investment) => {
    return (
        <div className="rounded border-slate-300 shadow-md bg-white p-4">
            <h4 className="text-xl font-bold">{investmentName}</h4>
            <h5 className="text-base mt-3 font-medium">{ownerName}</h5>
            <span className="text-xs">{date}</span>
            <p className="text-base mt-5 text-green-500 font-bold">R$ {value}</p>
            <a className="text-sm bg-gray-800 py-1 text-slate-200 mt-2 rounded block text-center w-full" href={`/investiments/${id.toString()}`}>Ver rendimento</a>
        </div>
    )
}

export default CardInvestimento
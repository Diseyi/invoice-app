
import rightarrow from "../../../assets/images/icon-arrow-right.svg"

interface InvoiceProps {
    id: string;
    paymentDue: string;
    clientName: string;
    total: number;
    status: "paid" | 'pending' | 'draft'
}

const Invoice = ({ id, paymentDue, clientName, total, status }: InvoiceProps) => {
    return (
        <div className="bg-white dark:bg-black-shade-2 border rounded-xl w-full">
            <div className="hidden md:grid grid-cols-6 items-center  w-full px-5 py-4 ">
                <div className=" text-left">
                    <span className="text-gray-purple dark:text-white">#</span>
                    <span className=""> {id} </span>
                </div>
                <div className=" text-left text-gray-purple text-sm dark:text-white"> Due {paymentDue} </div>
                <div className=" text-gray-purple text-sm dark:text-white">{clientName} </div>
                <div className=" font-semibold dark:text-white"> $ {total} </div>
                <div className={` w-24 p-2 flex items-center justify-center gap-2 capitalize rounded ${status === 'pending' ? 'text-dark-orange' : status === 'draft' ? 'text-gray-purple-2' : 'text-light-green'}`}>
                    <span className={`w-2 h-2 rounded-full bg-orange ${status === 'pending' ? 'bg-dark-orange' : status === 'draft' ? 'bg-gray-purple-2' : 'bg-light-green'} `}></span> {status} </div>
                <div className=" w-12 flex items-center justify-end ">
                    <img src={rightarrow} alt="right arrow" className="" />
                </div>
            </div>
            <div className="md:hidden  w-full px-5 py-4 flex flex-col gap-2 ">
                <div className="flex justify-between">
                    <div className=" text-left">
                        <span className="text-gray-purple">#</span>
                        <span className="text-sm"> {id} </span>
                    </div>
                    <div className=" text-gray-purple text-xs">{clientName} </div>
                </div>
                <div className="flex items-end justify-between">
                    <div className="flex flex-col gap-1">
                        <div className="text-left text-gray-purple text-xs"> Due {paymentDue} </div>
                        <div className="text-sm font-semibold"> $ {total} </div>
                    </div>
                    <div className={`border w-24 p-2 flex items-center justify-center gap-2 capitalize rounded ${status === 'pending' ? 'text-dark-orange' : status === 'draft' ? 'text-gray-purple-2' : 'text-light-green'}`}>
                        <span className={`w-2 h-2 rounded-full bg-orange ${status === 'pending' ? 'bg-dark-orange' : status === 'draft' ? 'bg-gray-purple-2' : 'bg-light-green'} `}></span> {status} </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice
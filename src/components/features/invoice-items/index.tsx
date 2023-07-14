
interface ItemsProps {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

const InvoiceItems = (data: { items: ItemsProps[]; total:number; }) => {
    console.log(data);

    return (
        <div className=" mt-6">
            <div className=" px-5 py-8">
                <div className="w-full py-4 hidden md:grid grid-cols-4">
                    <div className="">Item Name</div>
                    <div className="text-right">QTY.</div>
                    <div className="text-right">Price</div>
                    <div className="text-right">Total</div>
                </div>
                {
                    data.items?.map((item) => (
                        <div key={item.name} className="py-2 ">
                            {/* Mobile view */}
                            <div className="flex justify-between md:hidden">
                                <div className="">
                                    <div className="">{item.name} </div>
                                    <div className="">{item.quantity} x ${item.price} </div>
                                </div>
                                <div className=""> ${item.total} </div>
                            </div>
                            {/* Tablet and Laptop view */}
                            <div className="">
                                <div className="w-full hidden md:grid grid-cols-4">
                                    <div className="">{item.name}</div>
                                    <div className="text-right">{item.quantity}</div>
                                    <div className="text-right">${item.price}</div>
                                    <div className="text-right">${item.total}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-between py-6 px-4 border">
                <div className="">Grand Total</div>
                <div className="">${data.total} </div>
            </div>
        </div>
    )
}

export default InvoiceItems
import leftarrow from "../../assets/images/icon-arrow-left.svg";
import Modal from "../../shared/modal";
import Button from "../../shared/button";
import Input from "../../shared/input";
import Select from "../../shared/select";
import Label from "../../shared/label";

interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

interface Items {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

interface EditInvoiceProps {
    id: string;
    createdAt: string;
    paymentDue: string;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: string;
    senderAddress: Address;
    clientAddress: Address;
    items: Items[],
    total: number;
  }

const EditInvoice = (data : EditInvoiceProps) => {

    return (
        <Modal >
            <div className="flex w-full justify-start h-full ">
                <div className="bg-white w-full md:w-3/5 z-20 px-24 fixed top-0 h-screen ">

                    <div className="py-12 md:hidden">
                        <button className="flex items-center gap-4">
                            <img src={leftarrow} alt="" className="" />
                            <span className="">Go Back</span>
                        </button>
                    </div>
                    <h1 className=""> Edit #{data.id} </h1>
                    <form action="" className="">
                        <h2 className="text-light-purple">Bill From</h2>
                        <div className="">
                            <Label text="Street Address" />
                            <Input value={data.senderAddress?.street} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="">
                                <Label text="City" />
                                <Input value={data.senderAddress?.city} />
                            </div>
                            <div className="">
                                <Label text="PostCode" />
                                <Input value={data.senderAddress?.postCode} />
                            </div>
                            <div className="">
                                <Label text="Country" />
                                <Input value={data.senderAddress?.country} />
                            </div>
                        </div>

                        <h2 className="text-light-purple">Bill To</h2>
                        <div className="w-full">
                            <Label text="Client's Name" />
                            <Input value={data.senderAddress?.street} />
                        </div>
                        <div className="w-full">
                            <Label text="Client's Email" />
                            <Input value={data.senderAddress?.street} />
                        </div>
                        <div className="w-full">
                            <Label text="Street Address" />
                            <Input value={data.clientAddress?.street} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="">
                                <Label text="City" />
                                <Input value={data.clientAddress?.city} />
                            </div>
                            <div className="">
                                <Label text="PostCode" />
                                <Input value={data.clientAddress?.postCode} />
                            </div>
                            <div className="">
                                <Label text="Country" />
                                <Input value={data.clientAddress?.country} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="">
                                <Label text="Invoice Date" />
                                <Input type="date" value="" />
                            </div>
                            <div className="">
                                <Label text="Payment Terms" />
                                <Select
                                    name="payment terms"
                                    options={[
                                        { value: '1', label: 'Net 1 day' },
                                        { value: '7', label: 'Net 7 days' },
                                        { value: '14', label: 'Net 14 days' },
                                        { value: '30', label: 'Net 30 days' },
                                    ]}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="absolute left-0 bottom-0 w-full border py-6 px-10">
                        <div className="flex justify-end items-center w-full gap-4">
                            <Button text="Cancel" />
                            <Button color='text-white' bgColor='bg-light-purple' text="Save Changes" />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default EditInvoice
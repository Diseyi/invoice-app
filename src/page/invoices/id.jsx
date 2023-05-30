import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import InvoiceItems from "../../components/invoice-items"
import invoicedata from "../../data.json";
import leftarrow from "../../assets/images/icon-arrow-left.svg";

const EditInvoice = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    setLoading(true)
    const idData = await invoicedata.filter((item) => item.id === id)
    setLoading(false)
    setData(idData[0])
    console.log(idData);
  }

  if (loading) {
    return <div className="w-11/12 lg:w-7/12 m-auto py-12">Loading</div>
  }


  return (
    <div className="">
      <div className="w-11/12 lg:w-7/12 m-auto">
        <div className="py-12">
          <button className="flex items-center gap-4">
            <img src={leftarrow} alt="" className="" />
            <span className="">Go Back</span>
          </button>
        </div>
        <div className="flex justify-between bg-white items-center px-6 py-8">
          <div className="flex w-full md:w-fit justify-between items-center gap-6 rounded">
            <div className="">Status</div>
            <div className={`border w-24 p-2 flex items-center justify-center gap-2 capitalize rounded ${data.status === 'pending' ? 'text-dark-orange' : data.status === 'draft' ? 'text-gray-purple-2' : 'text-light-green'}`}>
              <span className={`w-2 h-2 rounded-full bg-orange ${data.status === 'pending' ? 'bg-dark-orange' : data.status === 'draft' ? 'bg-gray-purple-2' : 'bg-light-green'} `}></span> {data.status} </div>
          </div>
          <div className="hidden md:flex gap-3">
            <button className="rounded-full py-4 px-8 border">Edit</button>
            <button className="bg-light-red rounded-full py-4 px-8 text-white  ">Delete</button>
            <button className="bg-light-purple rounded-full py-4 px-8 text-white ">Mark as Paid</button>
          </div>
        </div>

        <div className="my-6 bg-white rounded px-6 py-10  gap-6 ">
          <div className="flex flex-col md:flex-row justify-start md:items-center gap-6 w-full md:justify-between">
            <div className="">
              <p className="">{data.id} </p>
              <p className=""> {data.description} </p>
            </div>
            <div className="">
              <p className=""> {data.senderAddress?.street} </p>
              <p className=""> {data.senderAddress?.city} </p>
              <p className=""> {data.senderAddress?.postCode} </p>
              <p className=""> {data.senderAddress?.country} </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 items-center md:items-start">
            <div className="flex flex-col gap-6">
              <div className="">
                <div className=""> Invoice Date </div>
                <div className=""> {data.createdAt} </div>
              </div>
              <div className="">
                <div className=""> Payment Due</div>
                <div className=""> {data.paymentDue} </div>
              </div>
            </div>

            <div className="">
              <div className="">Bill to</div>
              <div className=""> {data.clientName} </div>
              <div className="">
                <p className=""> {data.clientAddress?.street} </p>
                <p className=""> {data.clientAddress?.city} </p>
                <p className=""> {data.clientAddress?.postCode} </p>
                <p className=""> {data.clientAddress?.country} </p>
              </div>
            </div>

            <div className="">
              <div className="">Sent to</div>
              <div className="">{data.clientEmail}</div>
            </div>
          </div>
          <InvoiceItems items={data.items} total={data.total} />
        </div>
      </div>
      <div className="flex items-center justify-center md:hidden gap-3 bg-white py-5">
        <button className="rounded-full py-4 px-6 border text-sm">Edit</button>
        <button className="bg-light-red rounded-full py-4 px-6 text-white text-sm ">Delete</button>
        <button className="bg-light-purple rounded-full py-4 px-6 text-white text-sm">Mark as Paid</button>
      </div>
    </div>
  )
}

export default EditInvoice
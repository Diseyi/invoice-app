import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from "../../components/shared/button";
import ButtonIcon from "../../components/shared/button/icon";
// import EditInvoice from "../../../components/edit-invoice/";
import InvoiceItems from "../../components/features/invoice-items";
import invoicedata from "../../data.json";
import leftarrow from "../../assets/images/icon-arrow-left.svg";


const InvoiceDetail = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);


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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  if (loading) {
    return <div className="w-11/12 lg:w-7/12 m-auto py-12">Loading</div>
  }


  return (
    <div className="">
      <div className="w-11/12 lg:w-7/12 m-auto">
        <div className="py-12">
          <Link to="/">
            <ButtonIcon src={leftarrow} text='Go Back' imgSize='w-2 h-3' />
          </Link>
        </div>
        <div className="flex justify-between bg-white items-center px-6 py-8">
          <div className="flex w-full md:w-fit justify-between items-center gap-6 rounded">
            <div className="">Status</div>
            <div className={` bg-green-200 w-24 p-2 flex items-center justify-center gap-2 capitalize rounded ${data.status === 'pending' ? 'text-dark-orange' : data.status === 'draft' ? 'text-gray-purple-2' : 'text-light-green'}`}>
              <span className={`w-2 h-2 rounded-full bg-orange ${data.status === 'pending' ? 'bg-dark-orange' : data.status === 'draft' ? 'bg-gray-purple-2' : 'bg-light-green'} `}></span> {data.status} </div>
          </div>
          <div className="hidden md:flex gap-3">
            <Button onClick={handleClickOpen} color='text-black' bgColor='bg-gray-100' text='Edit' />
            <Button color='text-white' bgColor='bg-light-red' text='Delete' />
            <Button color='text-white' bgColor='bg-light-purple' text='Mark as Paid' />
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
        <Button onClick={handleClickOpen} color='text-white' bgColor='bg-gray-100' text='Edit' />
        <Button color='text-white' bgColor='bg-light-red' text='Delete' />
        <Button color='text-white' bgColor='bg-light-purple' text='Mark as Paid' />
      </div>
      {/* <EditInvoice data={data} /> */}
    </div>
  )
}

export default InvoiceDetail
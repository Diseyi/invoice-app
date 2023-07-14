import React, { useState } from 'react';
import { Link } from "react-router-dom";

import invoicedata from "../../data.json"
import arrowdown from "../../assets/images/icon-arrow-down.svg";
import plusicon from "../../assets/images/icon-plus.svg";
import Invoice from "../../components/features/invoice-list";
// import ButtonIcon from '../../components/button/icon';

const InvoiceHome = () => {
  const [invoiceData, setInvoiceData] = useState(invoicedata);

  return (
    <div className=" w-11/12  lg:w-7/12 m-auto">
      <header className="py-12 lg:py-20 flex justify-between items-center">
        <div className="">
          <h1 className=" text-dark-blue dark:text-white text-2xl md:3xl lg:text-5xl font-bold">Invoices</h1>
          <div className="text-gray-purple dark:text-white text-sm">
            <span className=" hidden md:block  ">There are {invoiceData.length} total invoices</span>
            <span className=" md:hidden  ">{invoiceData.length} invoices</span>
          </div>
        </div>
        <div className="flex gap-3 md:gap-10">
          <div role='button' className="flex items-center gap-2">
            <div className="text-sm text-dark-blue dark:text-white font-semibold">
              <span className=" hidden md:block">Filter by status</span>
              <span className="md:hidden ">Filter </span>
            </div>
            <img src={arrowdown} alt="arrow down" className="" />
          </div>
          {/* <ButtonIcon text */}
          <div role='button' className="bg-light-purple rounded-full flex p-2 gap-1 md:gap-2 items-center ">
            <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <img src={plusicon} alt="" className="" />
            </div>
            <div className="text-sm px-1  text-white font-semibold">
              <span className="hidden md:block"> New Invoice</span>
              <span className=" md:hidden"> New </span>
            </div>
          </div>
        </div>
      </header>
      <main className=" h-full pb-10">
        <div className="flex flex-col gap-5 ">
          {
            invoiceData.map((item) => (
              <Link key={item.id} to={`invoice/${item.id}`} >
                <Invoice id={item.id} paymentDue={item.paymentDue} clientName={item.clientName} total={item.total} status={item.status} />
              </Link>

            ))
          }
        </div>
      </main>
    </div>
  )
}

export default InvoiceHome
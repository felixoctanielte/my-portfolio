import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import SingelInfo from "./SingelInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
        <SingelInfo  text="felixoctanieltel05@gmail.com" Image={HiOutlineMail}/>
        <SingelInfo  text="+62 823 7266 2504" Image={FaWhatsapp}/>
        <SingelInfo  text="Cluster Allogio Gading Serpong Allogio Barat 2 no. 38" Image={GrLocation}/>
    </div>
  )
}

export default ContactInfo;
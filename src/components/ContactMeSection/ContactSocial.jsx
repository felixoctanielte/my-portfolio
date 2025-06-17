import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
        <SingleContactSocial link="www.linkedin.com/in/felix-octaniel-telaumbanua-32042b28a" Icon={SiLinkedin}/>
        <SingleContactSocial link="https://github.com/felixoctanielte" Icon={VscGithubInverted}/>
        <SingleContactSocial link="https://www.instagram.com/felixdlw?igsh=dHNyZnl2OXN2bXFt" Icon={FaInstagramSquare}/>
    </div>
  )
}

export default ContactSocial;
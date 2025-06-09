'use client'
import { BiHome } from "react-icons/bi"
import { CiSettings } from "react-icons/ci"
import { FaUserSlash } from "react-icons/fa6"
import { GrAnalytics } from "react-icons/gr"
import {motion} from 'motion/react'
import { useState } from "react"
import { IoIosArrowDropdown, IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io"
import { stagger } from "motion"


const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(true)
    const links = [
        {
            name:"Home",
            href:"/",
            icon: <BiHome />
        },
        {
            name:"Analytics",
            href:"/analytics",
            icon: <GrAnalytics />
        },
        {
            name:"Users",
            href:"/users",
            icon: <FaUserSlash />
        },
        {
            name:"Settings",
            href:"/settings",
            icon: <CiSettings />
        },
    ]
    const sidebarVariant = {
        open:{
            width:"16rem"
        },
        closed:{
            width:"4.5rem"
        }
    }
    const childVariants = {
        open:{
            opacity:1,
            y:0,
        },
        closed:{
            opacity:0,
            y:-10,
        }
    }
    const staggerVairants ={
        open:{
            transition:{
                staggerChildren:0.07, delayChildren:0.2
            }
        },
        closed:{
            transition:{
               staggerChildren:0.05, staggerDirection:-1 
            }
        }
    }
  return (
    <motion.div
    initial={false}
    animate={isOpen ? "open":"closed"}
    exit={"closed"}
    transition={{
        duration:0.3
    }}
    className="border-r min-h-screen border-neutral-100 h-full">
        <motion.nav
        variants={sidebarVariant}
        className={`bg-white shadow-md h-full`}>
            <div className="p-4 flex justify-between items-center">
                <h2 className={`text-xl font-semibold ${!isOpen && 'sr-only'}`}>
                    Dashboard
                    </h2>
                    {/* togglebutton */}
                    <button
                        onClick={()=>setIsOpen(prev=>!prev)}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                        aria-label={isOpen? "Close sidebar": "Open sidebar"}
                    >
                        {isOpen ? <IoIosArrowDropleft />: <IoIosArrowDropright />}
                    </button>
            </div>
            <div className="relative">
            <nav className="p-4">
                <motion.ul variants={staggerVairants} className="space-y-2">
                    {
                        links.map(link => (
                            <motion.li
                            variants={childVariants}
                                key={link.name}
                            >
                                <a href={link.href}
                                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200"
                                title={!isOpen ? link.name : ""}
                                >
                                    {link.icon}
                                    {isOpen && link.name}
                                </a>
                            </motion.li>
                        ))
                    }
                </motion.ul>
            </nav>
            </div>
        </motion.nav>

    </motion.div>
  )
}

export default Dashboard

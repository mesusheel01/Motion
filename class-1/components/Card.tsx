'use client'
import { cn } from "@/lib/utils"
import Image from "next/image"
import { IoIosClose } from "react-icons/io"
import InsideContent from "./InsideContent"
import { AnimatePresence, motion, useTime, useTransform } from 'motion/react'
import { useState } from "react"

const Card = () => {
    const [open, setOpen] = useState(true)
    const time = useTime();

    const rotate = useTransform(time, [0, 3000],[0,360],{
        clamp:false,
    })
    const rotatingBg = useTransform(rotate, (r)=>{
        return `conic-gradient(from ${r}deg, #000000, #ffffff, #ffffff, #ffffff)`
    })
    return (
        <div className="relative">
        <AnimatePresence mode="wait">
            {open && (
                <motion.div
                    initial={{
                        scale: 0.98,
                        opacity: 0,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)"
                    }}
                    // whileHover={{
                    //     filter:"blur(50px)",
                    //     borderRadius:15,
                    //     content:"",
                    //     animation:"spin 2s linear infinite",
                    //     zIndex:1
                    // }}
                    exit={{
                        opacity: 0,
                        scale: 0.98,
                        filter: "blur(10px)"
                    }}
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut"
                    }}
                    className={cn(
                        "w-80 min-h-[25rem] relative h-[25rem] rounded-xl bg-white",
                        "shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]",
                        "p-4 flex flex-col",
                        "before:absolute before:-inset-[1px] before:rounded-xl before:z-[-1] before:content-['']"
                    )}
                    style={{
                        '--rotating-bg': rotatingBg
                    } as React.CSSProperties}>
                    <h2 className="font-semibold">Project Cognito</h2>
                    <p className="text-sm pt-1 text-gray-500">
                        Your second brain to keep your important things.
                    </p>
                    <div className="flex text-center items-center justify-center">
                        <button className="flex px-2 py-1 rounded-md
                        shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]">
                            <Image className="w-6 h-6" width={50} height={50} alt="logo" src="/logo.png"

                            />
                            Cognito
                            <IoIosClose onClick={()=>setOpen(!open)} className="text-2xl text-neutral-400"/>
                        </button>
                    </div>
                    <div className="bg-gray-100 flex-1 mt-4 rounded-xl border border-dashed border-neutral-100 relative ">
                    <motion.div
                    initial={{
                        opacity:0,
                        scale:0.9,
                        filter:"blur(10px)"
                    }}
                    whileHover={{
                        opacity:1,
                        scale:1,
                        filter:"blur(0px)"
                    }}
                    transition={{
                        duration:0.3,
                        ease:"easeInOut"
                    }}
                    className="absolute border border-neutral-200 inset-0 flex flex-col gap-2 h-full w-full bg-white rounded-lg items-start divide-y divide-neutral-400">
                        <InsideContent />
                        <InsideContent />
                        <InsideContent />
                    </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
        </div>
    )
}

export default Card

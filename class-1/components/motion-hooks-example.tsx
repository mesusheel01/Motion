import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { GiIncomingRocket, GiArtificialIntelligence, GiSmartphone } from 'react-icons/gi'
import { BsRobot } from 'react-icons/bs'
import { PiFileAudioThin } from 'react-icons/pi'
import { useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from 'motion/react'
import {motion} from 'motion/react'

const MotionHooksExample = () => {
    const containterRef = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        target:containterRef,
        offset:["start end",'end start']
    })
    const backgrounds = ["#343434", "#00193b","#05291c"]

    const [background, setBackground] = useState(backgrounds[0])

    useMotionValueEvent(scrollYProgress, "change",(latest)=>{
        const finalValue = Math.floor(latest* backgrounds.length);
        setBackground(backgrounds[finalValue])
    })

  return (
    <motion.div
    ref={containterRef}
    animate={{
        background
    }}
    transition={{
        duration:.3,
        ease:'easeInOut'
    }}
    className='flex min-h-screen bg-neutral-900 items-center'>
        <div className='flex flex-col gap-10 mx-auto max-w-4xl py-20'>
            {features.map((feature,idx)=>(
                <Card key={feature.title} feature={feature} />
            ))}
        </div>
    </motion.div>
  )
}
type Feature = {
    icon:React.ReactNode,
    title: string,
    description:string,
    content: React.ReactNode
}

const Card = ({feature}: {feature:Feature}) =>{
    const ref = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", 'end start']
    })
    // useMotionValueEvent(scrollYProgress, "change", (latest)=>{
    //     console.log(latest)
    // })
    const translateContent = useSpring(useTransform(scrollYProgress, [0,1], [-200,200]),{
        damping:30,
        stiffness:100,
        mass:1
    })
    const opacityContent = useTransform(scrollYProgress, [0,0.5,1],[0,1,0])
    const blur = useTransform(scrollYProgress, [0.5,1],[0,10])
    const scale = useTransform(scrollYProgress, [0,1],[1,0.8])

    return (
        <div
        ref={ref}
        key={feature.title}
        className='grid grid-cols-2 gap-20 items-center py-40'>
        <motion.div
            style={{
                filter:useMotionTemplate`blur(${blur}px)`,
                scale,
            }}
        >

            {feature.icon}
            <h2 className='text-4xl font-bold text-white'>{feature.title}</h2>
            <p className='text-neutral-400'>{feature.description}</p>
        </motion.div>
        <motion.div
            style={{
                y:translateContent,
                opacity:opacityContent
            }}
        >
            {feature.content}
        </motion.div>
    </div>
    )
}



const commonStyle = "h-8 w-8 text-neutral-200"
const features = [
    {
        icon: <GiIncomingRocket className={commonStyle} />,
        title: "Generate Ultrareaclistic images through this tool!",
        description: "New Ai tool in the markeet to generate ultra realistic images.",
        content:(
            <div>
                <Image
                    src="https://png.pngtree.com/png-vector/20221214/ourmid/pngtree-car-image-white-vector-png-image_6523677.png"
                    alt='car'
                    height={500}
                    width={500}
                    className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon: <GiArtificialIntelligence className={commonStyle} />,
        title: "AI-Powered Code Generation",
        description: "Transform your ideas into code with our advanced AI coding assistant.",
        content:(
            <div>
                <Image
                    src="https://torybarber.com/wp-content/uploads/2023/03/toryb-gptwireframe-feat-1.webp"
                    alt='code'
                    height={500}
                    width={500}
                    className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon: <BsRobot className={commonStyle} />,
        title: "Smart Automation Solutions",
        description: "Automate your workflow with intelligent robotic process automation.",
        content:(
            <div>
                <Image
                    src="https://static.vecteezy.com/system/resources/thumbnails/027/533/474/small/car-or-bike-smokie-background-realistic-ai-generative-free-photo.jpg"
                    alt='robot'
                    height={500}
                    width={500}
                    className='rounded-lg'
                />
            </div>
        )
    },
    {
        icon: <GiSmartphone className={commonStyle} />,
        title: "Mobile-First Development",
        description: "Build responsive applications that work seamlessly across all devices.",
        content:(
            <div>
                <Image
                    src="https://www.techmagic.co/blog/content/images/2022/06/cover-Mobile-First-Design.png"
                    alt='mobile'
                    height={500}
                    width={500}
                    className='rounded-lg'
                />
            </div>
        )
    }
]

export default MotionHooksExample

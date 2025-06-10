'use client'
import Button from "@/components/Button";
import Card from "@/components/Card";
import Dashboard from "@/components/Dashboard";
import { Feedback } from "@/components/Feedback";
import MotionHooksExample from "@/components/motion-hooks-example";


export default function page() {
  return (
    <div className=" min-h-screen">
        {/* <Button />
        <Card />
        <Dashboard /> */}
        {/* <MotionHooksExample /> */}
        <Feedback />

    </div>
  )
}

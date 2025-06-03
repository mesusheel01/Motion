import { CiHeadphones } from "react-icons/ci";

export default function InsideContent() {
  return (
    <div className="flex items-center shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1 rounded-md gap-2">
        <button className="shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] p-1 rounded-md">
            <CiHeadphones />
        </button>
        <div className="text-[12px]">
        <h4>Sony headphone m2</h4>
        <h3 className="text-neutral-400">This is the worlds first sony AI headphones with live translation.</h3>
        </div>
    </div>
  )
}

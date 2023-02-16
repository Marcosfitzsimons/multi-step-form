'use client'

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import FormWrapper from './FormWrapper'
import { FormItems } from "@/app/page"

type stepProps = FormItems & {
    updateForm: (fieldToUpdate: Partial<FormItems>) => void
}

type Plan = "arcade" | "advanced" | "pro"

const PlanForm = ({ updateForm, plan, yearly }: stepProps) => {
    const [yearlyUpdated, setYearlyUpdated] = useState(yearly)
    const [planSelected, setPlanSelected] = useState<Plan>(plan)

    const handleCheckedChange = (yearlyUpdated: boolean) => {
        setYearlyUpdated((prev) => !prev)
        updateForm({ yearly: yearlyUpdated })
    }

    const handleValueChange = (planSelected: Plan) => {
        setPlanSelected(planSelected)
        updateForm({ plan: planSelected })
    }
    
  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <RadioGroup defaultValue="arcade" className='flex items-center justify-around border border-red-500' value={planSelected} onValueChange={handleValueChange}>
        <div className="border border-slate-400 w-48 aspect-square flex">
          {/* <img src="" alt="" />*/}
          <Label htmlFor="arcade" className="h-full w-full">
          <RadioGroupItem value="arcade" id="arcade" className="invisible absolute" />
            <p>Arcade</p>
            <p>{yearly ? '$90/yr' : '$9/mo'}</p>
            {yearly && <span>2 months free</span>}
          </Label>
        </div>
        <div className="flex items-center space-x-2 border border-slate-400 p-8">
          {/* <img src="" alt="" />*/}
          <RadioGroupItem value="advanced" id="advanced" />
          <Label htmlFor="advanced">
            <p>Advanced</p>
            <p>{yearly ? '$120/yr' : '$12/mo'}</p>
            {yearly && <span>2 months free</span>}
          </Label>
        </div>
        <div className="flex items-center space-x-2 border border-slate-400 p-8">
          {/* <img src="" alt="" />*/}
          <RadioGroupItem value="pro" id="pro" className="" />
          <Label htmlFor="pro" className="bg-violet-400">
            <p>Pro</p>
            <p>{yearly ? '$150/yr' : '$15/mo'}</p>
            {yearly && <span>2 months free</span>}
          </Label>
        </div>
      </RadioGroup>
        <div className="flex items-center space-x-2">
            <Label htmlFor="airplane-mode">Monthly</Label>
                <Switch id="airplane-mode" checked={yearlyUpdated} onCheckedChange={handleCheckedChange} />
            <Label htmlFor="airplane-mode">Yearly</Label>
        </div>
    </FormWrapper>
  );
}

export default PlanForm
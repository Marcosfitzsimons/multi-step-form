"use client";

import { useState } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import FormWrapper from "./FormWrapper";
import { FormItems } from "@/app/page";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

type Plan = "arcade" | "advanced" | "pro";

const PlanForm = ({ updateForm, plan, yearly }: stepProps) => {
  const [yearlyUpdated, setYearlyUpdated] = useState(yearly);
  const [planSelected, setPlanSelected] = useState<Plan>(plan);

  const handleCheckedChange = (yearlyUpdated: boolean) => {
    setYearlyUpdated((prev) => !prev);
    updateForm({ yearly: yearlyUpdated });
  };

  const handleValueChange = (planSelected: Plan) => {
    if (planSelected) {
      setPlanSelected(planSelected);
      updateForm({ plan: planSelected });
    }
  };

  return (
    <FormWrapper
      title="Select your plan"
      description="You have the option of monthly or yearly billing."
    >
      <ToggleGroup.Root
        orientation="horizontal"
        className="flex items-center gap-2"
        type="single"
        value={planSelected}
        onValueChange={handleValueChange}
      >
        <ToggleGroup.Item
          value="arcade"
          className="border border-slate-400 w-48 aspect-square flex data-[state=on]:border-red-500"
        >
          <p>Arcade</p>
          <p>{yearly ? "$90/yr" : "$9/mo"}</p>
          {yearly && <span>2 months free</span>}
        </ToggleGroup.Item>
        <ToggleGroup.Item
          value="advanced"
          className="flex items-center space-x-2 border border-slate-400 p-8"
        >
          <p>Advanced</p>
          <p>{yearly ? "$120/yr" : "$12/mo"}</p>
          {yearly && <span>2 months free</span>}
        </ToggleGroup.Item>

        <ToggleGroup.Item
          className="flex items-center space-x-2 border border-slate-400 p-8"
          value="pro"
        >
          <p>Pro</p>
          <p>{yearly ? "$150/yr" : "$15/mo"}</p>
          {yearly && <span>2 months free</span>}
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <div className="flex items-center space-x-2">
        <Label htmlFor="airplane-mode">Monthly</Label>
        <Switch
          id="airplane-mode"
          checked={yearlyUpdated}
          onCheckedChange={handleCheckedChange}
        />
        <Label htmlFor="airplane-mode">Yearly</Label>
      </div>
    </FormWrapper>
  );
};

export default PlanForm;

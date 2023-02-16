"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMultiplestepForm } from "hooks/useMultiplestepForm";
import UserInfoForm from "@/components/UserInfoForm";
import PlanForm from "@/components/PlanForm";
import AddonsForm from "@/components/AddonsForm";
import FinalStep from "@/components/FinalStep";
import SuccessMessage from "@/components/SuccessMessage";

interface AddOn {
  id: number;
  checked: boolean;
  title: string;
  subtitle: string;
  price: number;
}

export type FormItems = {
  name: string;
  email: string;
  phone: string;
  plan: "arcade" | "advanced" | "pro";
  yearly: boolean;
  addOns: AddOn[];
};

const initialValues: FormItems = {
  name: "",
  email: "",
  phone: "",
  plan: "arcade",
  yearly: false,
  addOns: [
    {
      id: 1,
      checked: true,
      title: "Online Service",
      subtitle: "Access to multiple games",
      price: 1,
    },
    {
      id: 2,
      checked: false,
      title: "Large storage",
      subtitle: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: 3,
      checked: false,
      title: "Customizable Profile",
      subtitle: "Custom theme on your profile",
      price: 2,
    },
  ],
};

export default function Home() {
  const [formData, setFormData] = useState(initialValues);
  const {
    previousStep,
    nextStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    steps,
    showSuccessMsg,
  } = useMultiplestepForm(4);

  function updateForm(fieldToUpdate: Partial<FormItems>) {
    setFormData({ ...formData, ...fieldToUpdate });
  }
  console.log(formData);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main className="bg-slate-300 text-xl">
      <p>
        {currentStepIndex + 1} / {steps}
      </p>
      {showSuccessMsg ? (
        <SuccessMessage />
      ) : (
        <form onSubmit={handleOnSubmit}>
          {currentStepIndex === 0 && (
            <UserInfoForm {...formData} updateForm={updateForm} />
          )}
          {currentStepIndex === 1 && (
            <PlanForm {...formData} updateForm={updateForm} />
          )}
          {currentStepIndex === 2 && (
            <AddonsForm {...formData} updateForm={updateForm} />
          )}
          {currentStepIndex === 3 && (
            <FinalStep {...formData} updateForm={updateForm} />
          )}
          {!isFirstStep && (
            <Button onClick={previousStep} type="button">
              Go Back
            </Button>
          )}
          <Button onClick={nextStep} type="submit" className="">
            {isLastStep ? "Confirm" : "Next Step"}
          </Button>
        </form>
      )}
    </main>
  );
}

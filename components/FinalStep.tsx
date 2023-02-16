"use client";

import { useState, useEffect } from "react";
import FormWrapper from "./FormWrapper";
import { Separator } from "@/components/ui/separator";
import { FormItems } from "@/app/page";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const FinalStep = ({ yearly, plan, addOns, updateForm }: StepProps) => {
  let planPrice = 0;
  switch (plan) {
    case "arcade":
      planPrice = 9;
      break;
    case "advanced":
      planPrice = 12;
      break;
    case "pro":
      planPrice = 15;
      break;
    default:
      planPrice = 0;
      break;
  }

  const filteredAddOns = addOns.filter((addOn) => addOn.checked === true);

  const totalAddOnsPrice = filteredAddOns?.reduce(
    (acc, obj) => acc + obj.price,
    0
  );
  console.log(totalAddOnsPrice);

  return (
    <FormWrapper
      title="Finishing Up"
      description="Double-check everything looks OK before confirming."
    >
      <div className="">
        <div>
          <div className="space-y-1">
            <div className="">
              <h4 className="text-sm font-medium leading-none">
                {`${plan.charAt(0).toUpperCase() + plan.slice(1)} (${
                  yearly ? "Yearly" : "Monthly"
                })`}
              </h4>
              <button>change</button>
            </div>
            <p>{`$${yearly ? planPrice * 10 : planPrice}${
              yearly ? "/yr" : "/mo"
            }`}</p>
          </div>
          {filteredAddOns.length > 0 && <Separator className="my-4" />}
          {filteredAddOns?.map((addOn) => (
            <div className="" key={addOn.id}>
              <p>{addOn.title}</p>
              <p>{`$${yearly ? addOn.price * 10 : addOn.price}${
                yearly ? "/yr" : "/mo"
              }`}</p>
            </div>
          ))}
        </div>
        <div className="">
          <p>Total (per {yearly ? "year" : "month"})</p>
          <p>
            +$
            {yearly
              ? planPrice * 10 + totalAddOnsPrice * 10
              : planPrice + totalAddOnsPrice}
            /{yearly ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </FormWrapper>
  );
};

export default FinalStep;

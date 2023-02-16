import { FormItems } from "@/app/page";
import { Checkbox } from "@/components/ui/checkbox";
import FormWrapper from "./FormWrapper";

type stepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
};

const AddonsForm = ({ addOns, yearly, updateForm }: stepProps) => {
  function handleCheckboxChange(addOnId: number, checked: boolean) {
    const updatedAddOns = addOns.map((addOn) => {
      if (addOn.id === addOnId) {
        return {
          ...addOn,
          checked,
        };
      } else {
        return addOn;
      }
    });
    updateForm({ addOns: updatedAddOns });
  }

  return (
    <FormWrapper
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience"
    >
      {addOns.map((addOn) => (
        <div className="flex" key={addOn.id}>
          <Checkbox
            id="online-service"
            checked={addOn.checked}
            onCheckedChange={(checked) =>
              handleCheckboxChange(addOn.id, checked as boolean)
            }
          />
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <label
                htmlFor="online-service"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {addOn.title}
              </label>
              <p className="text-sm text-slate-900 dark:text-slate-400">
                {addOn.subtitle}
              </p>
            </div>
            <p>{yearly ? addOn.price * 10 : addOn.price}</p>
          </div>
        </div>
      ))}
    </FormWrapper>
  );
};

export default AddonsForm;

import FormWrapper from "./FormWrapper";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormItems } from "../app/page";

type StepProps = FormItems & {
  updateForm: (fieldToUpdate: Partial<FormItems>) => void;
  errors: Partial<FormItems>;
};

const UserInfoForm = ({
  name,
  email,
  phone,
  errors,
  updateForm,
}: StepProps) => {
  return (
    <FormWrapper
      title="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="">
        <div className="">
          <Label htmlFor="name">Name</Label>
          <Input
            className=""
            autoFocus
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => updateForm({ name: e.target.value })}
            required
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="">
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="text"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => updateForm({ email: e.target.value })}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className="">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            value={phone}
            onChange={(e) => updateForm({ phone: e.target.value })}
            required
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
      </div>
    </FormWrapper>
  );
};

export default UserInfoForm;

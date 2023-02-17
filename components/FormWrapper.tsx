import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  description: string;
  children: ReactNode;
};

const FormWrapper = ({ title, description, children }: FormWrapperProps) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        <p className="text-neutral-300">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FormWrapper;

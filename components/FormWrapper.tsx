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
        <h2 className="text-xl font-semibold text-white md:text-2xl">
          {title}
        </h2>
        <p className="text-sm text-neutral-300 md:text-base">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default FormWrapper;

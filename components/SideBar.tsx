import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="text-slate-200 w-[25%]">
      <nav className="bg-neutral-900 p-5 h-full rounded-md border border-neutral-700">
        <ul className="flex flex-col gap-2">
          <li className="flex flex-col items-start font-medium">
            <span className="text-neutral-500 uppercase text-sm">step 1</span>
            <button
              tabIndex={0}
              onClick={() => goTo(0)}
              className={
                currentStepIndex === 0 ? "text-[#ffe666]" : "text-white"
              }
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 0}
                color="#ffe666"
              >
                Your info
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="text-neutral-500 uppercase text-sm">step 2</span>
            <button
              tabIndex={0}
              onClick={() => goTo(1)}
              className={
                currentStepIndex === 1 ? "text-[#bd284d]" : "text-white"
              }
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 1}
                color="#bd284d"
              >
                Select plan
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="text-neutral-500 uppercase text-sm">step 3</span>
            <button
              tabIndex={0}
              onClick={() => goTo(2)}
              className={
                currentStepIndex === 2 ? "text-[#E7B8FF]" : "text-white"
              }
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 2}
                color="#E7B8FF"
              >
                Add-ons
              </RoughNotation>
            </button>
          </li>
          <li className="flex flex-col items-start font-medium">
            <span className="text-neutral-500 uppercase text-sm">step 4</span>
            <button
              tabIndex={0}
              onClick={() => goTo(3)}
              className={
                currentStepIndex === 3 ? "text-[#6fe79f]" : "text-white"
              }
            >
              <RoughNotation
                type="underline"
                show={currentStepIndex === 3}
                color="#6fe79f"
              >
                Summary
              </RoughNotation>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;

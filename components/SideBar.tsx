import { RoughNotation } from "react-rough-notation";

type NavProps = {
  currentStepIndex: number;
  goTo: (index: number) => void;
};

const SideBar = ({ currentStepIndex, goTo }: NavProps) => {
  return (
    <div className="text-slate-200">
      <nav>
        <ul>
          <li>
            <span>step 1</span>
            <button tabIndex={0} onClick={() => goTo(0)}>
              <RoughNotation
                type="underline"
                show={currentStepIndex === 0}
                color="#f3f3f3"
              >
                Your info
              </RoughNotation>
            </button>
          </li>
          <li>
            <span>step 2</span>
            <button tabIndex={0} onClick={() => goTo(1)}>
              <RoughNotation
                type="underline"
                show={currentStepIndex === 1}
                color="yellow"
              >
                Select plan
              </RoughNotation>
            </button>
          </li>
          <li>
            <span>step 3</span>
            <button tabIndex={0} onClick={() => goTo(2)}>
              <RoughNotation
                type="underline"
                show={currentStepIndex === 2}
                color="yellow"
              >
                Add-ons
              </RoughNotation>
            </button>
          </li>
          <li>
            <span>step 4</span>
            <button tabIndex={0} onClick={() => goTo(3)}>
              <RoughNotation
                type="underline"
                show={currentStepIndex === 3}
                color="yellow"
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

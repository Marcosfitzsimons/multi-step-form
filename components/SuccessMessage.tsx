import { RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";

const SuccessMessage = () => {
  const refresh = () => window.location.reload();
  return (
    <section>
      <h4>Thank you!</h4>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        plataform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
      <div className="flex flex-1 items-center">
        <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
          <Button
            onClick={refresh}
            className="relative text-neutral-200 bg-neutral-900 border border-black/20 shadow-input shadow-black/10 rounded-xl hover:text-white"
          >
            <RefreshCcw className="mr-2 h-4 w-4" /> Restart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;

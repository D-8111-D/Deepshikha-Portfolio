import React from "react";

const Toast = ({ show, type = "success", message, description }) => {
  if (!show) return null;

  return (
    <div
      className={`
        fixed bottom-8 right-8 z-[999]
        min-w-[320px]
        rounded-tl-[50px] rounded-br-[50px] border-t-[5px] border-b-[5px]
        px-6 py-4
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,0,0,0.4)]
        animate-slideIn
        transition-all duration-500
        ${
          type === "success"
            ? "border-green-400/40 bg-green-500/10 text-green-300"
            : "border-red-400/40 bg-red-500/10 text-red-300"
        }
      `}
    >
      <div className="flex items-start gap-4">
        <div className="text-3xl">{type === "success" ? "🚀" : "⚠️"}</div>

        <div>
          <h3 className="text-lg font-bold">{message}</h3>

          <p className="mt-1 text-sm opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;

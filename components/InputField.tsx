import React from "react";

type inputProps = {
  id: string;
  label: string;
  type: React.HTMLInputTypeAttribute | "text-area";
};
const InputField = ({
  id = "name",
  label = "name",
  type = "text",
}: inputProps) => {
  return (
    <div className="relative flex text-base w-full rounded-lg">
      {type !== "text-area" ? (
        <>
          <input
            type={type}
            className="border outline-none border-slate-500 py-2 px-4 opacity-80 rounded-lg w-full peer "
            id={id}
            required
            placeholder=" "
          />
          <label
            htmlFor={id}
            className="absolute select-none pointer-events-none opacity-65 cursor-text peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:bg-[#faf1e1] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-focus:opacity-100 text-base left-4 top-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#faf1e1] px-1 transition-all duration-500 "
          >
            {label}
          </label>
        </>
      ) : (
        <>
          {/* <input
            type={type}
            className="border outline-none border-slate-500 py-2 px-4 opacity-80 rounded-lg w-full peer "
            id={id}
            required
            placeholder=" "
          /> */}
          <textarea
            id={id}
            className="border outline-none border-slate-500 py-2 px-4 opacity-80 rounded-lg w-full peer min-h-64"
            placeholder=" "
          ></textarea>
          <label
            htmlFor={id}
            className="absolute select-none pointer-events-none opacity-65 cursor-text peer-not-placeholder-shown:opacity-100 peer-not-placeholder-shown:bg-[#faf1e1] peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-focus:opacity-100 text-base left-4 top-2 peer-focus:-top-2 peer-focus:text-xs peer-focus:bg-[#faf1e1] px-1 transition-all duration-500 "
          >
            {label}
          </label>
        </>
      )}
    </div>
  );
};

export default InputField;

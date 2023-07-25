import { XCircle } from "@phosphor-icons/react";
import clsx from "clsx";
import { useState } from "react";

interface ModalProps {
  onModalOpen: (value: boolean) => void;
  onSubmit?: (event: any) => void;
}

export function Form({ onModalOpen, onSubmit }: ModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit() {
    onModalOpen(false);
    alert("Application sent!");
  }
  return (
    <div className="fixed inset-0 z-20 bg-gray-700/70">
      <div
        className={clsx(
          "fixed z-50",
          "w-[95vw] max-w-md rounded-lg p-4 md:w-full",
          "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]",
          "bg-light-gray",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
        )}
      >
        <button
          className={clsx(
            "focus-visible:purple-500 absolute right-3.5 top-3.5 inline-flex items-center justify-center rounded-full p-1 hover:bg-purple-600 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75"
          )}
        >
          <XCircle
            size={24}
            color="#bcbcbc"
            onClick={() => onModalOpen(false)}
          />
        </button>

        <div className="dark:text-gray-100 text-xl font-medium text-purple-300">
          Sent application
        </div>

        <form className="mt-2 space-y-2" onSubmit={onSubmit}>
          <fieldset>
            <label htmlFor="name" className="text-sm text-base-subtitle">
              Name
            </label>
            <input
              className="text-md mt-1 block w-full rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <fieldset className="mb-10">
            <label htmlFor="email" className="text-sm text-base-subtitle">
              E-mail
            </label>
            <input
              className="text-md mb-6 mt-1 block w-full rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="email"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>

          <button
            className="text-md flex select-none justify-center rounded-md  bg-purple-500 p-3 font-medium text-base-title hover:bg-purple-600 focus:outline-none focus-visible:bg-purple-500 focus-visible:ring focus-visible:ring-opacity-75 disabled:bg-smoke-gray disabled:text-gray-300"
            type="submit"
            onClick={handleSubmit}
            disabled={name.length < 1 || email.length < 1}
          >
            I'm interested!
          </button>
        </form>
      </div>
    </div>
  );
}

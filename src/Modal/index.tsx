import {
  Bed,
  Calendar,
  ClipboardText,
  MapTrifold,
  XCircle,
} from "@phosphor-icons/react";
import clsx from "clsx";

interface FormProps {
  houseUnit: any;
  onModalOpen: (value: boolean) => void;
}

export function Modal({ houseUnit, onModalOpen }: FormProps) {
  return (
    <div className="fixed inset-0 z-20 bg-gray-700/70">
      <div
        className={clsx(
          "fixed z-50",
          "w-[600px] rounded-lg p-4 ",
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

        <div className="dark:text-gray-100  text-xl font-bold text-purple-300">
          {houseUnit.name}
        </div>

        <div className="mt-4 flex">
          <img
            alt=""
            src={houseUnit.imageUrl}
            className="h-[250px] w-[600px] rounded-lg border-4 border-smoke-gray object-cover hover:border-purple-600"
          />
        </div>

        <div className="mt-4 flex gap-8">
          <div className="flex items-center justify-center">
            <Bed size={24} color="#bcbcbc" weight="fill" />
            <div className="ml-2 text-sm text-base-subtitle">
              Bedrooms: {houseUnit.bedrooms}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <MapTrifold size={24} color="#bcbcbc" weight="fill" />
            <div className="ml-2 text-sm text-base-subtitle">
              Distance: {houseUnit.distance} km
            </div>
          </div>

          <div className="flex items-center justify-center">
            <ClipboardText size={24} color="#bcbcbc" weight="fill" />
            <div className="ml-2 text-sm text-base-subtitle">
              Interests: {houseUnit.interestAmount}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Calendar size={24} color="#bcbcbc" weight="fill" />
            <div className="ml-2 text-sm text-base-subtitle">
              Available: {houseUnit.available ? "Yes" : "No"}
            </div>
          </div>
        </div>

        <div className="text-md mt-4 text-base-subtitle">
          {houseUnit.description}
        </div>
      </div>
    </div>
  );
}

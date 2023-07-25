import { MapPinLine } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="mx-auto bg-light-gray p-4">
      <div className="mx-20 flex items-center justify-between">
        <div className="mx-10 text-xl text-white">Housing Cloud</div>
        <div className="mx-10 flex items-center justify-center gap-4">
          <div className="flex gap-1 rounded-md bg-purple-300 p-2">
            <MapPinLine size={30} color="hotpink" weight="fill" />
            <p className="text-lg text-purple-700">San Diego, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

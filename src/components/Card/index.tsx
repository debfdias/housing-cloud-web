import {
  Bed,
  ClipboardText,
  CurrencyDollarSimple,
  MapTrifold,
} from "@phosphor-icons/react";

interface UnitItem {
  id: string;
  name: string;
  description: string;
  price: number;
  bedrooms: number;
  distance: number;
  imageUrl?: string;
}

interface CardProps {
  unit: any;
}

export function Card({ unit }: CardProps) {
  return (
    <div className="mb-10 flex h-[150px] justify-between overflow-hidden rounded-[12px] border-2 border-smoke-gray bg-light-gray">
      <div className="flex">
        <div className="flex">
          <img alt="" src={unit.imageUrl} width={220} height={220} />
        </div>
        <div className="mx-6 mt-3 ">
          <div className="text-xl font-bold text-base-title">{unit?.name}</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="mt-2 flex items-center">
                <Bed size={24} color="#bcbcbc" weight="fill" />
                <div className="ml-4 text-sm text-base-subtitle">
                  Bedrooms: {unit.bedrooms}
                </div>
              </div>
              <div className="mt-1 flex items-center">
                <MapTrifold size={24} color="#bcbcbc" weight="fill" />
                <div className="ml-4 text-sm text-base-subtitle">
                  Distance: {unit.distance} km
                </div>
              </div>
              <div className="mt-1 flex items-center">
                <ClipboardText size={24} color="#bcbcbc" weight="fill" />
                <div className="ml-4 text-sm text-base-subtitle">
                  Applications: {unit.interestAmount}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mr-8 flex items-center">
        <CurrencyDollarSimple size={24} color="#bcbcbc" />
        <div className="ml-1 ">
          <div className="text-xl font-bold text-base-subtitle">
            {unit.price},00
          </div>
        </div>
      </div>
      {/* <div>
        <button>
          <PencilLine size={25} color="#0bb864" />
        </button>
        <button>
          <Trash size={25} color="#ff4b33" />
        </button>
      </div> */}
    </div>
  );
}

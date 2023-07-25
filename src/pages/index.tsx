import { ClipboardText, Eye, Faders, Ghost } from "@phosphor-icons/react";
import Head from "next/head";
import { useState } from "react";
import { Modal } from "~/Modal";
import { Card } from "~/components/Card";
import { Form } from "~/components/Form";
import Header from "~/components/Header";
import { api } from "~/utils/api";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalDetailsOpen, setModalDetailsOpen] = useState(false);
  const [houseUnit, setHouseUnit] = useState<any>();
  const [filters, setFilters] = useState({
    bedrooms: -1,
    distance: -1,
    minPrice: -1,
    maxPrice: -1,
  });

  const { data: houseUnits, refetch: refetchHouseUnits } =
    api.houseUnits.getAll.useQuery({
      bedrooms: filters.bedrooms,
      distance: filters.distance,
      minPrice: filters.minPrice,
      maxPrice: filters.maxPrice,
    });

  const createStudent = api.students.create.useMutation({
    onSuccess: () => {
      refetchHouseUnits();
    },
  });

  const addHouseUnitInterest = api.houseUnits.updateInterest.useMutation({
    onSuccess: () => {
      refetchHouseUnits();
    },
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    createStudent.mutate({
      name: e.target.name.value,
      email: e.target.email.value,
    });
    addHouseUnitInterest.mutate({ id: houseUnit!.id });
    setModalOpen(false);
    alert("Application sent!");
    await refetchHouseUnits();
  }

  function onOpenModal(houseUnit: any) {
    setModalOpen(true);
    setHouseUnit(houseUnit);
  }

  function onOpenDetailsModal(houseUnit: any) {
    setModalDetailsOpen(true);
    setHouseUnit(houseUnit);
  }

  const deletePost = api.houseUnits.delete.useMutation({
    onSuccess: () => {
      refetchHouseUnits();
    },
  });

  async function handleDelete(id: string) {
    deletePost.mutate({ id });
  }

  return (
    <>
      <Head>
        <title>Housing Cloud</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div className="mx-20 mt-8 px-12">
        <div className="mb-4 flex items-center gap-2">
          <Faders size={32} color="#bcbcbc" />
          <h1 className="text-xl font-bold text-base-subtitle">Filters</h1>
        </div>
        <div className="flex gap-4">
          <fieldset>
            <label htmlFor="bedrooms" className="text-sm text-base-subtitle">
              Bedrooms
            </label>
            <input
              className="text-md mb-8 mt-1 block w-28 rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="bedrooms"
              placeholder="Bedrooms"
              type="number"
              min="1"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  bedrooms: e.target.valueAsNumber,
                })
              }
            />
          </fieldset>

          <fieldset>
            <label htmlFor="distance" className="text-sm text-base-subtitle">
              Distance (km)
            </label>
            <input
              className="text-md mb-8 mt-1 block w-28 rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="distance"
              placeholder="Distance"
              type="number"
              min="1"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  distance: e.target.valueAsNumber,
                })
              }
            />
          </fieldset>

          <fieldset>
            <label htmlFor="min" className="text-sm text-base-subtitle">
              Min price
            </label>
            <input
              className="text-md mb-8 mt-1 block w-28 rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="min"
              placeholder="Min price"
              type="number"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  minPrice: e.target.valueAsNumber,
                })
              }
            />
          </fieldset>

          <fieldset>
            <label htmlFor="max" className="text-sm text-base-subtitle">
              Max price
            </label>
            <input
              className="text-md mb-8 mt-1 block w-28 rounded-md bg-smoke-gray p-2 text-base-title placeholder:text-base-subtitle focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              name="max"
              placeholder="Max price"
              type="number"
              onChange={(e) =>
                setFilters({
                  ...filters,
                  maxPrice: e.target.valueAsNumber,
                })
              }
            />
          </fieldset>
        </div>
      </div>

      <main className="mx-20 mb-1 grid gap-12 px-12 sm:grid-cols-2">
        {modalOpen && (
          <Form onModalOpen={setModalOpen} onSubmit={handleSubmit} />
        )}
        {modalDetailsOpen && (
          <Modal onModalOpen={setModalDetailsOpen} houseUnit={houseUnit} />
        )}
        {houseUnits?.map((house) => (
          <div key={house.id}>
            <Card unit={house} />
            <div className="-mt-5 flex gap-4">
              <button
                className="font-mono rounded-md bg-purple-300 p-2 text-purple-700 transition duration-0 hover:bg-purple-500 hover:text-purple-900 hover:duration-500"
                onClick={() => onOpenDetailsModal(house)}
              >
                <div className="mx-3 flex items-center justify-center gap-2">
                  <Eye size={24} />
                  <div className="text-md font-semibold">See details</div>
                </div>
              </button>

              <button
                className="font-mono rounded-md bg-purple-300 p-2 text-purple-700 transition duration-0 hover:bg-purple-500 hover:text-purple-900 hover:duration-500"
                onClick={() => onOpenModal(house)}
              >
                <div className="mx-3 flex items-center justify-center gap-2">
                  <ClipboardText size={24} />
                  <div className="text-md font-semibold">Apply</div>
                </div>
              </button>
            </div>
          </div>
        ))}

        {houseUnits?.length === 0 && (
          <div className="mt-8 flex gap-4">
            <div className="text-4xl text-pink">Ops! Nothing found!</div>
            <Ghost size={40} weight="fill" color="#ff79c6" />
          </div>
        )}
      </main>
    </>
  );
}

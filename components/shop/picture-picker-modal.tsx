"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import Image from "next/image";
export const dynamic = "force-dynamic";

/* @ts-ignore */
export default function PictureModal({
  open,
  setOpen,
  createdImages,
  variantsId,
  productId,
  setProduct,
  product,
}: any) {
  const [selectedName, setSelectedName] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedUri, setSelectedUri] = useState(null);


  useEffect(() => {
    if (!createdImages) return;

    const selectedItem = createdImages[selectedName];
    if (selectedItem) {
      setSelectedImages(selectedItem.images);
    }
  }, [selectedName, createdImages]);

  /* @ts-ignore */
  const simplifiedArray = selectedImages.map((obj) => obj.uri);

  /* @ts-ignore */
  const handleImageClick = (uri) => {
    setSelectedUri(uri);
  };
   /* @ts-ignore */
  // const handleClick = (productId) => {
  
  //   MockProcess({productId});
  // };


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden md:inline-block md:h-screen md:align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full rounded-2xl items-center overflow-hidden bg-dark px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="flex flex-col w-full">
                    <h2 className="text-2xl font-medium text-terceary sm:pr-12">
                      Choose an image
                    </h2>
                    <select
                      /* @ts-ignore */
                      onChange={(e) => setSelectedName(e.target.value)}
                      className="form-select mt-5 appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-gray-50 border border-gray-300 focus:border-gray-500 shadow-sm text-gray-500 text-sm focus:outline-none focus:text-gray-900 rounded ring-0 focus:ring-0"
                    >
                      {createdImages &&
                        /* @ts-ignore */
                        createdImages.map((item, index) => (
                          <option key={index} value={index}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                    <div className="flex flex-row w-full grid-col-4  mt-14 ">
                      <ul className="flex gap-x-8">
                        {simplifiedArray &&
                          simplifiedArray.map((images, index) => (
                            <li
                              key={index}
                              className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100  col-span-1"
                            >
                              <Image
                                 priority={true}
                                key={index}
                                src={images}
                                width={300}
                                height={300}
                                onClick={() => handleImageClick(images)}
                                alt="test"
                                className={
                                  selectedUri === images
                                    ? "cursor-pointer object-cover object-center border-4 border-secondary"
                                    : "cursor-pointer object-cover object-center"
                                }
                              />
                            </li>
                          ))}
                      </ul>
                    </div>
                    {true ? (
                      <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center rounded-full border border-transparent bg-primary px-8 py-3 text-base font-medium text-terceary hover:bg-red-500 "
                        // onClick={() => handleClick(productId)}
                      >
                        Submit Image
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gray-600 px-8 py-3 text-base font-medium cursor-default text-white"
                      >
                        No Image Selected
                      </button>
                    )}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";

export const dynamic = "force-dynamic";
import { X, Star } from "lucide-react";


/* @ts-ignore */
export default function PictureModal({ open, setOpen, pictures }) {
  const [selectedImageId, setSelectedImageId] = useState()

  // const handleImageClick = (id) => {
  //   setSelectedImageId(id);
  // };


  const fetchPictures = async () => {
    /* @ts-ignore */
    const response = await fetch(`/api/getPictures/`);
    const data = await response.json();
  
  };

  useEffect(() => {
    const fetchData = async () => {
      /* @ts-ignore */
      const result = await fetchPictures();
    };
    fetchData();
  }, []);
       /* @ts-ignore */
  // const modelNames = pictures?.map(item => item.name);
console.log(pictures)
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
              <select

      className="form-select appearance-none w-full relative mb-3 sm:mb-0 flex-grow sm:mr-3 pl-3 py-2 bg-gray-50 border border-gray-300 focus:border-gray-500 shadow-sm text-gray-500 text-sm focus:outline-none focus:text-gray-900 rounded ring-0 focus:ring-0"
    >
      {pictures && pictures.map(
           /* @ts-ignore */
        (item) => (
          <option key={item} value={item}>
          {item}
          </option>
        )
      )}
    </select>





{/* 
              <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="flex flex-col">
                    <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                      Pick and image
                    </h2>
                    <button
                      type="submit"
                      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Select Model
                    </button>
                    <div className="flex flex-row w-full grid-col-4 gap-x-8 mt-14 ">
                      {images.map((imageUrl, index) => (
                        <div className="aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100  col-span-1">
                          <img
                            key={index}
                            src={
                              imageUrl.imageSrc
                            }
                            alt="test"
                            className={`cursor-pointer object-cover object-center ${selectedImageId === imageUrl.id ? " border-4 border-purple-500" : ""}`}

                         
                            onClick={() => handleImageClick(imageUrl.id)}
                          />
                        </div>
                      ))}
                    </div>

                    <button
                      type="submit"
                      
                      className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Select Image
                    </button>
                  </div>
                </div>  */}












              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
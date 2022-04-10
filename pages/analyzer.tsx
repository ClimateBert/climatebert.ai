import { Navbar } from "components/navbar";
import Footer from "components/footer";
import { ExclamationIcon } from "@heroicons/react/outline";
import { Res as InferenceResponse } from "./api/analyze";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Field, Form, handleSubmit } from "components/form";
import { NextPage } from "next";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import React, { Fragment, useState } from "react";

import { Button } from "components/button";

const validation = z.object({ text: z.string().min(1).max(5000) });

const Analyzer: NextPage = () => {
	const [submitting, setSubmitting] = useState(false);
	const [formError, setFormError] = useState<string | null>(null);
	const formContext = useForm<z.infer<typeof validation>>({
		mode: "onBlur",
		resolver: zodResolver(validation),
	});
	const [response, setResponse] = useState<InferenceResponse | null>(null);

	console.log({ response });
	return (
		<>
      <div className="relative w-screen h-screen">
        <Navbar />
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <Form ctx={formContext} formError={formError}>
            <div className="lg:relative lg:flex">
              <div className="px-4 sm:px-6 lg:px-8 py-8 lg:grow lg:pr-8 xl:pr-16 2xl:ml-[80px]">
                <div className="mb-8 sm:flex sm:justify-between sm:items-center">
                  <div className="mb-4 sm:mb-0">
                    <h1 className="text-2xl font-bold text-slate-800 md:text-3xl">
                      Analyze a paragraph
                    </h1>
                  </div>
                </div>

                <div>
                  <Field.TextArea
                    label="Paragraph"
                    name="text"
                    description="Enter a climate related paragraph to analyze. (max 5000 characters)"
                  />
                </div>
                <div className="flex justify-center w-full mt-6">
                  <Button
                    state={submitting ? "loading" : undefined}
                    type="button"
                    onClick={() => {
                      handleSubmit<z.infer<typeof validation>>(
                        formContext,
                        async ({ text }) => {
                          const res = await fetch("/api/analyze", {
                            method: "POST",
                            body: JSON.stringify({ text }),
                            headers: { "Content-Type": "application/json" },
                          });

                          setResponse((await res.json()) as InferenceResponse);
                        },
                        setSubmitting,
                        setFormError
                      );
                    }}
                  >
                    Analyze
                  </Button>
                </div>
                <Transition.Root
                  show={
                    typeof response?.isClimateRelated === "boolean" &&
                    !response.isClimateRelated
                  }
                  as={Fragment}
                >
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setResponse(null)}
                  >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75 bg-slate-500" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                          <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                            <button
                              type="button"
                              className="text-slate-400 hover:text-slate-500 focus:outline-none"
                              onClick={() => setResponse(null)}
                            >
                              <span className="sr-only">Close</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                          </div>
                          <div className="sm:flex sm:items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-orange-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                              <ExclamationIcon
                                className="w-6 h-6 text-orange-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-slate-900"
                              >
                                Not climate related
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-slate-500">
                                  It looks like your text is not climate
                                  related, please try a different paragraph.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
                <Transition.Root
                  show={typeof response?.err !== "undefined"}
                  as={Fragment}
                >
                  <Dialog
                    as="div"
                    className="fixed inset-0 z-10 overflow-y-auto"
                    onClose={() => setResponse(null)}
                  >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="fixed inset-0 transition-opacity bg-opacity-75 bg-slate-500" />
                      </Transition.Child>

                      {/* This element is to trick the browser into centering the modal contents. */}
                      <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true"
                      >
                        &#8203;
                      </span>
                      <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                      >
                        <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                          <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                            <button
                              type="button"
                              className="text-slate-400 hover:text-slate-500 focus:outline-none"
                              onClick={() => setResponse(null)}
                            >
                              <span className="sr-only">Close</span>
                              <XIcon className="w-6 h-6" aria-hidden="true" />
                            </button>
                          </div>
                          <div className="sm:flex sm:items-start">
                            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                              <ExclamationIcon
                                className="w-6 h-6 text-red-600"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                              <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-slate-900"
                              >
                                Error
                              </Dialog.Title>
                              <div className="mt-2">
                                <p className="text-sm text-slate-500">
                                  {response?.err}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Transition.Child>
                    </div>
                  </Dialog>
                </Transition.Root>
                <Transition.Root show={!!response?.inferences} as={Fragment}>
                  <Dialog
                    as="div"
                    className="fixed inset-0 overflow-hidden"
                    onClose={(_v) => setResponse(null)}
                  >
                    <div className="absolute inset-0 overflow-hidden">
                      <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Dialog.Overlay className="absolute inset-0 transition-opacity bg-black bg-opacity-50" />
                      </Transition.Child>
                      <div className="fixed bottom-0 flex h-3/4 md:right-0 md:h-full md:w-1/2 md:pt-0">
                        <Transition.Child
                          as={Fragment}
                          enter="transition ease-in-out duration-500 sm:duration-700"
                          enterFrom="translate-y-full md:translate-x-full md:translate-y-0"
                          enterTo="translate-y-0 translate-x-0"
                          leave="transition ease-in-out duration-500 sm:duration-700"
                          leaveFrom="translate-y-0 translate-x-0 "
                          leaveTo="translate-y-full md:translate-x-full md:translate-y-0"
                        >
                          <div className="relative w-screen">
                            <div className="flex flex-col h-full bg-gray-50">
                              <header className="px-5 py-4 border-b border-slate-100">
                                <h2 className="font-semibold text-slate-800">
                                  Inference Results
                                </h2>
                              </header>
                              <div className="grid items-center justify-between w-full h-full grid-cols-1 gap-4 p-12 overflow-y-scroll sm:px-6">
                                {response?.inferences?.map((model) => {
                                  return (
                                    <div key={model.model}>
                                      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 lg:grid-cols-1">
                                        <div className="px-4 py-4 space-y-2 lg:px-6 ">
                                          <span className="block text-xs font-semibold tracking-wider uppercase text-slate-600">
                                            {model.model}
                                          </span>

                                          {model.inference.map((m) => (
                                            <div key={m.label}>
                                              <span className="text-xs uppercase">
                                                {m.label}
                                              </span>
                                              <div className="h-2 overflow-hidden rounded-lg bg-primary-100">
                                                <div
                                                  className="bg-primary-600"
                                                  style={{
                                                    width: `${m.score * 100}%`,
                                                  }}
                                                >
                                                  &nbsp;
                                                </div>
                                              </div>
                                            </div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </Transition.Child>
                      </div>
                    </div>
                  </Dialog>
                </Transition.Root>
              </div>
            </div>
          </Form>
        </div>
      </div>
      <Footer />
    </>
	);
};
export default Analyzer;

"use client";

import { useEffect, useRef } from "react";
import { FaWindowClose } from "react-icons/fa";
import { FiExternalLink, FiLogOut, FiX, FiZoomOut } from "react-icons/fi";
import DataSetChartPreview from "./chart-preview";
import ChartPreview from "./chart-preview";


type Props = {
    isOpen: boolean;
    exitHandler: any;
}

export default function DatasetConfigurator(props: Props) {

    return (
        <dialog id="my_modal_1" className="modal" open={props.isOpen}>
            <div className="modal-backdrop bg-zinc-300 opacity-80"></div>
            <div className="modal-box max-w-5xl min-h-fit bg-white">
                <div className="modal-body ">
                    <div className="flex flex-row">
                        <div className="flex flex-1 p-3 flex-col">
                            <div className="flex flex-1 flex-col p-3">
                                <span className="text-md inline text-zinc-400  font-bold inter-title">
                                    Configure data for
                                </span>
                                <span className="text-lg inline text-zinc-700  font-bold inter-title">
                                    Normal Dist.2
                                </span>

                            </div>
                            <div className="flex flex-1 p-3">
                                <div className="grid grid-cols-12 min-w-full items-center">
                                    <div className="col-span-12 mb-2">
                                        <span className="text-md">
                                            Enter Range
                                        </span>
                                    </div>
                                    <div className="col-span-12  min-w-full">
                                        <div className="flex flex-col w-full">
                                            <div className="flex flex-row gap-2">
                                                <input type="text" placeholder="Min" className="input  input-bordered input-md w-full max-w-xs" />
                                                <input type="text" placeholder="Max" className="input  input-bordered input-md w-full max-w-xs" />
                                            </div>
                                            <div className="flex mt-2 items-center">
                                                <input type="checkbox" className="checkbox checkbox-sm checked:border-blue-800 [--chkbg:theme(colors.blue.600)] mr-2" />
                                                <span className="ml-2 inline text-md text-zinc-400">
                                                    Include decimals in dataset
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="flex flex-1 p-3">
                                <div className="grid grid-cols-12 w-full items-center">

                                    <div className="col-span-6 p-3">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-12 mb-2">
                                                <span className="text-md">
                                                    Height / Spread
                                                </span>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="flex flex-col">
                                                    <div className="flex gap-2">
                                                        <div className="flex min-w-full">
                                                            <input type="range" max="100" className="range range-sm" step="25" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-span-6 p-3">
                                        <div className="grid grid-cols-12">
                                            <div className="col-span-12 mb-2">
                                                <span className="text-md">
                                                    Skewness
                                                </span>
                                            </div>
                                            <div className="col-span-12">
                                                <div className="flex flex-col">
                                                    <div className="flex gap-2">
                                                        <div className="flex min-w-full">
                                                            <input type="range" max="100" className="range range-sm" step="25" />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className="flex flex-1 p-3">
                                <div className="grid grid-cols-12 items-center">
                                    <div className="col-span-12 mb-2">
                                        <span className="text-md">
                                            Advanced
                                        </span>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row gap-2">
                                                <input type="text" placeholder="Mean (μ)" className="input  input-bordered input-md w-full max-w-xs" />
                                                <input type="text" placeholder="Mode" className="input  input-bordered input-md w-full max-w-xs" />
                                                <input type="text" placeholder="S.D. (σ)" className="input  input-bordered input-md w-full max-w-xs" />
                                            </div>



                                        </div>
                                    </div>

                                </div>


                            </div>
                            <div className="flex flex-1 p-3">
                                <div className="grid grid-cols-12 items-center w-full">
                                    <div className="col-span-12 mb-2 w-full ">
                                        <div className="flex flex-row gap-2 min-w-full">
                                            <button className="w-1/2 btn bg-blue-800 text-white text-md">
                                                Save
                                            </button>
                                            <button className="w-1/2 btn w-fit "
                                                onClick={props.exitHandler}
                                            >
                                                Close
                                            </button>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1">
                            <ChartPreview />
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    )
}
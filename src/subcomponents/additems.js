import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { QrcodeIcon } from '@heroicons/react/solid'
import QrScan from './QrScan'

export default function AddItems(props) {
  const open = props.open
  const setOpen = props.setOpen
  const [qropen,setqropen] = useState(false)
  const [itemData,setItemsData] = useState({
    id: false,
    name: false,
    description: false,
    stock: false,
    price: false,
    qr: false,
    image: false,
  });
  const getQrdata = (data) => {
    if (data) {
      setItemsData({...itemData,qr:data});
      setqropen(false);
    }
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <form className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl" onSubmit={(e)=>{
                      e.preventDefault()
                  }}>
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-gray-900"> New Item </Dialog.Title>
                            <p className="text-sm text-gray-500">
                              Get started by filling in the information below to create Item.
                            </p>
                          </div>
                          <div className="flex h-7 items-center">
                            <button
                              type="button"
                              className="text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Divider container */}
                      <div className="space-y-6 py-6 sm:space-y-0 sm:divide-y sm:divide-gray-200 sm:py-0">
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              {' '}
                              Item name{' '}
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="text"
                              required
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              {' '}
                              Description{' '}
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <textarea
                              rows={3}
                              className="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              defaultValue={''}
                            />
                          </div>
                        </div>

                        <div className="space-y-2 px-4 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Cover photo
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                {itemData.image ? <img alt="item" src={itemData.image} className="w-full h-auto cursor-not-allowed" onClick={(e)=>{
                    setItemsData({...itemData,image:false})
                }} /> : 
                <div className="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input type="file" id="file-upload" className="sr-only" onChange={(e)=>{
                            const reader = new FileReader();
                            reader.onload = function (x) {
                                setItemsData({...itemData, image: x.target.result})
                              };
                              reader.readAsDataURL(e.target.files[0]);
                        }}/>
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>}
                </div>
                        </div>

                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              {' '}
                              Item Price{' '}
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="number"
                              required
                              min="0"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              {' '}
                              In Stock{' '}
                            </label>
                          </div>
                          <div className="sm:col-span-2">
                            <input
                              type="number"
                              min="0"
                              required
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                          <div>
                            <label
                              
                              className="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"
                            >
                              {' '}
                              Scan QR{' '}
                            </label>
                          </div>
                          <div className="sm:col-span-2" onClick={()=>{
                              setqropen(true)
                          }}>
                            <QrcodeIcon className="h-10 w-10 text-indigo-800 cursor-pointer"/>
                            QR Data : {itemData.qr ? itemData.qr : ''}
                          </div>
                          <QrScan open={qropen} setOpen={setqropen} qrdata={getQrdata}/>
                        </div>

                      </div>
                    </div>
                    
                    
                        
                    {/* Action buttons */}
                    <div className="flex-shrink-0 border-t border-gray-200 px-4 py-5 sm:px-6">
                      <div className="flex justify-end space-x-3">
                        <button
                          type="button"
                          className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          Create
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

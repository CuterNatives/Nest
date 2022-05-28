import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { QrcodeIcon } from '@heroicons/react/solid'
import QrScan from './QrScan'
import nest from '../crud/index'
const db = new nest()

export default function Update(props) {
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
  useEffect(()=>{
     setItemsData(props.item)
  },[open, props.item])
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
                      e.preventDefault();
                      db.updateItem({...itemData}).then(()=>{
                          setItemsData({
                            id: false,
                            name: false,
                            description: false,
                            stock: false,
                            price: false,
                            qr: false,
                            image: false,
                          });
                          setOpen(false)
                          console.log(2)
                      })
                  }}>
                    <div className="flex-1">
                      {/* Header */}
                      <div className="bg-gray-50 px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between space-x-3">
                          <div className="space-y-1">
                            <Dialog.Title className="text-lg font-medium text-gray-900"> Update Stock </Dialog.Title>
                            <p className="text-sm text-gray-500">
                              Update Item Stock , Item Id : {itemData.id}
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
                              value={itemData.name}
                              disabled
                              onChange={(e)=>{
                                  setItemsData({...itemData,name:e.target.value})
                              }}
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
                              value={itemData.stock}
                              onChange={(e)=>{
                                setItemsData({...itemData,stock:e.target.value})
                            }}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                          </div>
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
                          Update
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

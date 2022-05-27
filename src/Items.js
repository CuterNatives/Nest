import { useLayoutEffect, useRef, useState } from 'react'
import AddItems from './subcomponents/additems'
const items = [
  {
    name: 'Iphone',
    id: '3774djf234vaadjf',
    photo: 'https://images.pexels.com/photos/4065899/pexels-photo-4065899.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    price: 100000,
    stock: 10,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Items() {
  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selecteditems, setSelecteditems] = useState([])
  const [open,setOpen] = useState(false)
  useLayoutEffect(() => {
    const isIndeterminate = selecteditems.length > 0 && selecteditems.length < items.length
    setChecked(selecteditems.length === items.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selecteditems])

  function toggleAll() {
    setSelecteditems(checked || indeterminate ? [] : items)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Items</h1>
          <p className="mt-2 text-sm text-gray-700">
            List of Items.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pr-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pr-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            onClick={() => setOpen(true)}
          >
            Add Item
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="relative overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              {selecteditems.length > 0 && (
                <div className="absolute top-0 left-12 flex h-12 items-center space-x-3 bg-gray-50 sm:left-16">
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Bulk edit
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center rounded border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-30"
                  >
                    Delete all
                  </button>
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-pr-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="relative w-12 px-6 sm:w-16 sm:px-8">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th scope="col" className="min-w-[6rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                      Photo
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Name
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Id
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Price
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {items.map((item) => (
                    <tr key={item.id} className={selecteditems.includes(item) ? 'bg-gray-50' : undefined}>
                      <td className="relative w-12 px-6 sm:w-16 sm:px-8">
                        {selecteditems.includes(item) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-pr-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 sm:left-6"
                          value={item.id}
                          checked={selecteditems.includes(item)}
                          onChange={(e) =>
                            setSelecteditems(
                              e.target.checked
                                ? [...selecteditems, item]
                                : selecteditems.filter((p) => p !== item)
                            )
                          }
                        />
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <img src={item.photo} alt={item.name} className="h-10 w-10 rounded-full"/>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.name}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.id}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.price}</td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </a>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <a href="#" className="text-indigo-600 hover:text-indigo-900">
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddItems open={open} setOpen={setOpen}/>
    </div>
  )
}

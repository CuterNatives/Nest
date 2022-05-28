import { ArrowSmDownIcon, ArrowSmUpIcon } from '@heroicons/react/solid'
import { DocumentReportIcon, ExclamationIcon, ArchiveIcon, } from '@heroicons/react/outline'
import nest from './crud/index'
import { useEffect, useState } from 'react'
const db = new nest()
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
export default function Dashboard(){
    const [stats,setStats] = useState([
      { id: 1, name: 'New Items', stat: 0, icon: ArchiveIcon, change: '0%', changeType: 'increase' },
      { id: 2, name: 'Out Of Stock Items', stat: 0, icon: ExclamationIcon, change: '0%', changeType: 'decrease' },
      { id: 3, name: 'New Reports', stat: 0, icon: DocumentReportIcon, change: '0%', changeType: 'increase' },
    ])
    useEffect(()=>{
      db.getStats().then((s)=>{
            setStats([
              { id: 1, name: 'New Items', stat: s.newitems, icon: ArchiveIcon, change: `${s.newitems}%`, changeType: 'increase' },
              { id: 2, name: 'Out Of Stock Items', stat: s.outofstock, icon: ExclamationIcon, change: `${s.outofstock}%`, changeType: 'decrease' },
              { id: 3, name: 'New Reports', stat: 0, icon: DocumentReportIcon, change: '0%', changeType: 'increase' },
            ])
      })
    },[])
    return (
        <div className="py-6 px-4">
              <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden transition duration-150 ease-out hover:ease-in border-pr-100 border-2 hover:border-pr-400"
          >
            <dt>
              <div className="absolute bg-pr-500 rounded-md p-3 transition duration-150 ease-out hover:ease-in border-pr-100 border-2 hover:border-pr-400">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-gray-500 truncate">{item.name}</p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowSmUpIcon className="self-center flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowSmDownIcon className="self-center flex-shrink-0 h-5 w-5 text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only">{item.changeType === 'increase' ? 'Increased' : 'Decreased'} by</span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="#" className="font-medium text-pr-600 hover:text-pr-500">
                    {' '}
                    View all<span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
            </div>
    )
}
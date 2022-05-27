import { DotsVerticalIcon } from '@heroicons/react/solid'

const projects = [
  { name: 'Stocks Report', initials: 'SR', href: '#', date: '16/05/2022', bgColor: 'bg-pr-600' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className='py-4 px-4'>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold text-gray-900">Reports</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the Reports
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none ">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-pr-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pr-700 focus:outline-none focus:ring-2 focus:ring-pr-500 focus:ring-offset-2 sm:w-auto"
          >
            Generate Report
          </button>
        </div>
      </div>
      <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide mt-3">Resent Reports</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
        {projects.map((project) => (
          <li key={project.name} className="col-span-1 flex  rounded-md transition duration-150 ease-out hover:ease-in shadow-pr hover:shadow-md">
            <div
              className={classNames(
                project.bgColor,
                'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              {project.initials}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <a href={project.href} className="text-gray-900 font-medium hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">Created On : {project.date}</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pr-500"
                >
                  <span className="sr-only">Open options</span>
                  <DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

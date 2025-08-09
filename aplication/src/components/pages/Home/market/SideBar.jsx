import React from 'react'
import {
  FiLayers,
  FiDollarSign,
  FiShoppingCart,
  FiShield,
  FiBarChart2,
  FiLogOut
} from 'react-icons/fi'

const navItems = [
  { id: 1, label: 'وضعیت', icon: <FiLayers /> },
  { id: 2, label: 'کیف پول', icon: <FiDollarSign /> },
  { id: 3, label: 'بازار', icon: <FiShoppingCart /> },
  { id: 4, label: 'امنیت', icon: <FiShield /> },
  { id: 5, label: 'گزارشات', icon: <FiBarChart2 /> }
]

export default function Sidebar({
  activeId = 3,
  onNavClick = () => {}
}) {
  return (
    <>
      <aside
        dir="rtl"
        className="
          w-[72px] min-w-[72px]
          h-[calc(100vh-20px)]
          md:bg-white
          flex flex-col justify-between
          rounded-[16px] p-[16px]
          items-center select-none

          lg:w-[16vw] lg:min-w-[16vw] lg:h-screen
          lg:rounded-none lg:px-[1.5vw] lg:py-[2vw]
          lg:items-start
        "
      >
        <div className="flex items-center justify-center lg:hidden md:flex">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-[48px] h-[48px] rounded-full object-cover"
          />
        </div>

        <div className="hidden lg:flex items-center gap-[0.69vw]">
          <img
            src="/avatar.jpg"
            alt="Avatar"
            className="w-[3vw] h-[3vw] rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="text-[1.3vw] font-bold text-gray-900">
              عباس مرادی
            </span>
            <div
              className="
                mt-[0.28vw] w-[3.26vw] h-[1.39vw]
                flex items-center justify-center
                bg-yellow-400 text-black text-[0.75vw] font-bold
                rounded-full px-[0.28vw]
              "
            >
              سطح 2
            </div>
          </div>
        </div>

        <nav className="hidden md:flex flex-1 flex-col items-center justify-start mt-[12px] lg:items-start lg:justify-center lg:mt-0">
          <ul className="flex flex-col gap-[8px] lg:gap-[1.5vw] lg:mt-[3vw]">
            {navItems.map(item => {
              const isActive = item.id === activeId
              return (
                <li
                  key={item.id}
                  onClick={() => onNavClick(item.id)}
                  className={`
                    flex items-center justify-center lg:justify-start
                    cursor-pointer transition-all duration-200 rounded-full

                    w-[56px] h-[56px] p-[12px] gap-[8px]
                    ${isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900'}

                    lg:w-[13.82vw] lg:h-[4.17vw]
                    lg:pl-[7.64vw] lg:pr-[1.11vw] lg:py-[0.97vw] lg:gap-[0.83vw]
                  `}
                >
                  <span className="text-[24px] lg:text-[1.1vw] font-bold">
                    {item.icon}
                  </span>
                  <span className="hidden lg:inline text-[1vw] font-bold">
                    {item.label}
                  </span>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="hidden lg:flex items-center justify-center lg:justify-start">
          <button
            onClick={() => console.log('Logout')}
            className="
              hidden lg:flex items-center justify-center gap-[0.56vw]
              w-[13.82vw] h-[4.17vw]
              pl-[2vw] pr-[1.11vw] py-[0.97vw]
              border border-red-500 text-red-500
              rounded-[2.64vw] text-[1vw] font-bold
              transition-colors duration-200 hover:bg-red-50
            "
          >
            <FiLogOut className="text-[1.2vw]" />
            خروج از حساب
          </button>
        </div>

        <div className="md:flex lg:hidden items-center justify-center">
          <button
            onClick={() => console.log('Logout')}
            className="
              flex items-center justify-center
              w-[56px] h-[56px] p-[12px]
              bg-red-600 text-white rounded-full
              transition-all duration-200 hover:bg-red-700
            "
          >
            <FiLogOut className="text-[24px]" />
          </button>
        </div>
      </aside>
    </>
  )
}
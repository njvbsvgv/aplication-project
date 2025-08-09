
import React from 'react'
import { FiLayers, FiDollarSign, FiShoppingCart, FiShield, FiBarChart2, FiMoreHorizontal, FiLogOut } from 'react-icons/fi'
import Sidebar from './SideBar'

const bottomNavItems = [
    { id: 5, label: 'بازار', icon: <FiShoppingCart className="text-[24px]" />, left: 298, top: 12, width: 32, height: 53 },
    { id: 4, label: 'حسابداری', icon: <FiLayers className="text-[24px]" />, left: 221, top: 12, width: 57, height: 53 },
    { id: 3, label: 'کیف پول', icon: <FiDollarSign className="text-[24px]" />, left: 153, top: 13, width: 48, height: 51 },
    { id: 2, label: 'گزارشات', icon: <FiBarChart2 className="text-[24px]" />, left: 86, top: 13, width: 47, height: 51 },
    { id: 1, label: 'بیشتر', icon: <FiMoreHorizontal className="text-[24px]" />, left: 31, top: 13, width: 35, height: 51 }
]

export default function MarketLayout({ children }) {
    const activeMobileId = 5;
    const onMobileNavClick = (id) => console.log('Mobile nav clicked:', id);

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            <div className="hidden md:block md:w-[72px] lg:w-[16vw]">
                <Sidebar />
            </div>

            <div className="flex-1 w-full px-[2vw] py-[1.5vw] overflow-y-auto">
                <div className="flex  items-center md:hidden mb-4">
                    <div className="flex items-center gap-[8px]">
                        <img
                            src="/avatar.jpg"
                            alt="Avatar"
                            className="w-[48px] h-[48px] rounded-full object-cover"
                        />
                        <button
                            onClick={() => console.log('Logout')}
                            className="
                                flex items-center justify-center
                                w-[44px] h-[44px]
                                border border-red-500 text-red-500
                                rounded-full text-[20px]
                                transition-colors duration-200 hover:bg-red-50
                            "
                        >
                            <FiLogOut />
                        </button>
                    </div>
                </div>
                {children}
            </div>

            <div
                className="
                    fixed bottom-[16px] left-1/2 transform -translate-x-1/2
                    bg-white rounded-[64px] shadow-md md:hidden z-50
                "
                style={{ width: '361px', height: '80px', opacity: 1 }}
            >
                <div className="relative w-full h-full">
                    {bottomNavItems.map(item => {
                        const isActive = item.id === activeMobileId
                        return (
                            <div
                                key={item.id}
                                onClick={() => onMobileNavClick(item.id)}
                                className="absolute flex flex-col items-center justify-start cursor-pointer"
                                style={{
                                    top: `${item.top}px`,
                                    left: `${item.left}px`,
                                    width: `${item.width}px`,
                                    height: `${item.height}px`
                                }}
                            >
                                <span className={isActive ? 'text-blue-600' : 'text-gray-700'}>
                                    {item.icon}
                                </span>
                                <span
                                    className={`text-[12px] mt-[4px] ${
                                        isActive ? 'text-blue-600' : 'text-gray-700'
                                    }`}
                                >
                                    {item.label}
                                </span>
                                {isActive && (
                                    <span
                                        className="absolute bg-blue-600"
                                        style={{
                                            width: `${item.width}px`,
                                            height: '2px',
                                            bottom: '-4px'
                                        }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
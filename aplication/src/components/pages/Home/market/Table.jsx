import { FaEye } from "react-icons/fa";
import { useState } from "react";

const TransactionTable = () => {
  const [selectedId, setSelectedId] = useState(null);

  const transactions = [
    {
      id: 1,
      name: "طلا",
      type: "خرید",
      method: "با تعیین قیمت",
      price: "۲۰,۰۵۱,۶۱۰ تومان",
      amount: "۲۵ گرم",
      date: "دوشنبه، ۱۶ آذر ۱۴۰۰",
      avatar: "https://i.pravatar.cc/40?img=1",
    },
    {
      id: 2,
      name: "نقره",
      type: "فروش",
      method: "بازار آزاد",
      price: "۵,۵۰۰,۰۰۰ تومان",
      amount: "۱۰ گرم",
      date: "چهارشنبه، ۱۸ آذر ۱۴۰۰",
      avatar: "https://i.pravatar.cc/40?img=2",
    },
  ];

  const handleViewClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };

  return (
    <div className="w-full max-w-[1241px] mx-auto bg-white rounded-[16px] shadow-md mt-6 overflow-auto relative">
      <h2 className="text-xl font-semibold mb-4 text-right px-4">تاریخچه خرید و فروش</h2>

      <div className="hidden md:block">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="py-3 px-4">پروفایل</th>
              <th className="py-3 px-4">نام</th>
              <th className="py-3 px-4">نوع</th>
              <th className="py-3 px-4">نوع معامله</th>
              <th className="py-3 px-4">قیمت</th>
              <th className="py-3 px-4">مقدار</th>
              <th className="py-3 px-4">تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-t hover:bg-gray-50 transition">
                <td className="py-3 px-4">
                  <img
                    src={tx.avatar}
                    alt="avatar"
                    className="w-8 h-8 rounded-full mx-auto"
                  />
                </td>
                <td className="py-3 px-4">{tx.name}</td>
                <td className="py-3 px-4">{tx.type}</td>
                <td className="py-3 px-4">{tx.method}</td>
                <td className="py-3 px-4">{tx.price}</td>
                <td className="py-3 px-4">{tx.amount}</td>
                <td className="py-3 px-4">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="absolute top-6 left-6 flex flex-col gap-4">
          {transactions.map((tx) => (
            <FaEye
              key={tx.id}
              className={`text-gray-600 hover:text-blue-500 cursor-pointer`}
              onClick={() => handleViewClick(tx.id)}
              title={`مشاهده ${tx.name}`}
            />
          ))}
        </div>
      </div>

      <div className="md:hidden">
        {transactions.map((tx) => (
          <div key={tx.id} className="border-b p-4 flex flex-col items-end">
            <div className="flex items-center justify-between w-full mb-2">
              <img
                src={tx.avatar}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <FaEye
                className={`text-gray-600 hover:text-blue-500 cursor-pointer ${
                  selectedId === tx.id ? "text-blue-600" : ""
                }`}
                onClick={() => handleViewClick(tx.id)}
                title={`مشاهده ${tx.name}`}
              />
            </div>
            <div className="text-right">
              <p className="font-semibold">{selectedId === tx.id ? "..." : tx.name}</p>
              <p>{selectedId === tx.id ? "..." : tx.type}</p>
              <p>{selectedId === tx.id ? "..." : tx.method}</p>
              <p>{selectedId === tx.id ? "..." : tx.price}</p>
              <p>{selectedId === tx.id ? "..." : tx.amount}</p>
              <p className="text-sm text-gray-500">{selectedId === tx.id ? "..." : tx.date}</p>
            </div>
            {selectedId === tx.id && (
              <div className="mt-2 bg-yellow-100 p-2 rounded flex items-center justify-center">
                <span className="text-yellow-800">Gold</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionTable;
export default function Header() {
  const weekday = 'چهارشنبه';
  const dayFa = '2';
  const monthFa = 'اردیبهشت';
  const dayEn = '10';
  const monthEn = 'July';
  const dateText = `${weekday} ${dayFa} ${monthFa} / ${dayEn} ${monthEn}`;

  const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;

  return (
    <header
      dir="rtl"
      className={`
        w-full flex items-center justify-between
        select-none overflow-x-hidden
        pt-[1.2vw] px-[2vw]
        sm:pt-[4vh]
        ${isTablet ? 'flex-col items-center w-[506px] mx-auto' : 'max-w-[1241px] mx-auto'}
      `}
      style={isTablet ? { padding: '10px 0' } : {}}
    >
      {isTablet ? (
        <>
          <div
            className="
              flex items-center justify-center
              bg-gray-200 text-gray-900
              rounded-full font-extrabold text-[0.95vw]
              w-[4.11vw] h-[1.61vw]
              mb-4
            "
          >
            بازار &lt; بازار
          </div>
          <h2
            className="text-2xl font-bold text-center"
            style={{ marginTop: '10px' }}
          >
            Trading View
          </h2>
        </>
      ) : (
        <>
          <div
            className="
              flex items-center justify-center
              bg-gray-200 text-gray-900
              rounded-full font-extrabold text-[0.95vw]
              w-[4.11vw] h-[1.61vw]
              mr-0 ml-[1.5vw]
            "
          >
            بازار &lt; بازار
          </div>
          <div className="flex items-center gap-[2.92vw]">
            <div className="hidden md:flex items-center gap-[2vw]">
              <div className="font-bold text-[0.95vw] text-gray-900 whitespace-nowrap">صفحه‌ی اصلی</div>
              <div className="font-bold text-[0.95vw] text-gray-900 whitespace-nowrap">ارتباط با ما</div>
              <div className="font-bold text-[0.95vw] ml-[209px] text-gray-900 whitespace-nowrap">درباره‌ی ما</div>
            </div>
            <div
              className="
                hidden lg:flex
                w-[3.125vw] h-[1.2vw]
                bg-gray-100 text-gray-800 ml-[10.9vw]
                rounded-[0.3vw] items-center justify-center
                text-[0.75vw] font-semibold whitespace-nowrap
              "
            >
              {dateText}
            </div>
          </div>
        </>
      )}
    </header>
  );
}
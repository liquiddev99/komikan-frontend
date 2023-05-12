export default function DetailMangaSkeleton() {
  return (
    <div>
      <div className="w-full pb-[24%] bg-slate-500 animate-pulse"></div>
      <div className="z-10 flex layout">
        <div className="relative top-[-110px] z-10 mr-8 w-1/5">
          <div className="w-[250px] h-[300px] bg-slate-500 animate-pulse rounded-xl"></div>
          <div className="bg-slate-500 h-[36px] w-[200px] rounded-lg animate-pulse mt-4"></div>

          <div className="w-[60px] h-[28px] animate-pulse bg-slate-500 mt-4"></div>

          <div className="w-[110px] h-[28px] animate-pulse bg-slate-500 rounded-full mt-2"></div>

          <div className="w-[210px] h-[28px] animate-pulse bg-slate-500 rounded-full mt-3"></div>
          <div className="w-[90px] h-[28px] animate-pulse bg-slate-500 mt-2"></div>

          <div className="w-[130px] h-[28px] animate-pulse bg-slate-500 rounded-full mt-2"></div>
        </div>

        <div className="w-4/5 mt-6">
          <div className="w-2/3 h-[40px] animate-pulse bg-slate-500"></div>

          <div className="w-full h-[16px] animate-pulse bg-slate-500 rounded-full mt-4"></div>
          <div className="w-full h-[16px] animate-pulse bg-slate-500 rounded-full mt-2"></div>
          <div className="w-full h-[16px] animate-pulse bg-slate-500 rounded-full mt-2"></div>
          <div className="w-1/3 h-[16px] animate-pulse bg-slate-500 rounded-full mt-2"></div>

          <div className="mt-4 flex">
            <div className="w-[100px] h-[38px] animate-pulse bg-slate-500 rounded-full mr-3"></div>
            <div className="w-[100px] h-[38px] animate-pulse bg-slate-500 rounded-full mr-3"></div>
            <div className="w-[100px] h-[38px] animate-pulse bg-slate-500 rounded-full mr-3"></div>
          </div>

          <div className="mt-8">
            <div className="mb-3">
              <div className="w-[80px] h-[36px] animate-pulse bg-slate-500"></div>
              <div className="w-[130px] h-[30px] animate-pulse bg-slate-500 mt-2"></div>
              <div className="w-[90px] h-[24px] animate-pulse bg-slate-500 mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

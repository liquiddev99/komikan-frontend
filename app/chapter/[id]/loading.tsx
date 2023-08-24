export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="xs:layout min-h-[80vh]">
      <div className="flex flex-col justify-center items-center">
        <div className="w-[45%] pb-[3.5%] bg-slate-500 animate-pulse mt-8 mb-6"></div>
        <div className="w-3/5 pb-[100%] bg-slate-500 animate-pulse"></div>
      </div>
    </div>
  );
}

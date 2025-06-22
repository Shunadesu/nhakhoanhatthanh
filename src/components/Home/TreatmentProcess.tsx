import { process } from "../../data";

const TreatmentProcess = () => {
  return (  
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
     <h2 className="text-base font-semibold leading-7 text-primary-600">Quy trình điều trị</h2>
     <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
       Hành trình đến với nụ cười hoàn hảo
     </p>
     <p className="mt-6 text-sm lg:text-lg leading-8 text-gray-600">
       Quy trình điều trị chuẩn quốc tế, đảm bảo an toàn và hiệu quả tối đa cho khách hàng.
     </p>
   </div>
   <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
       {process.map((step, index) => (
         <div key={step.id} className="relative flex flex-col items-center">
           <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 mb-4">
             <step.icon className="h-8 w-8 text-primary-600" />
           </div>
           <div className="text-center">
             <h3 className="text-lg font-semibold text-gray-900">{step.name}</h3>
             <p className="mt-2 text-sm text-gray-600">{step.description}</p>
           </div>
           {index < process.length - 1 && (
             <div className="hidden lg:block absolute top-8 left-1/2 -ml-px h-0.5 w-full bg-primary-100" />
           )}
         </div>
       ))}
     </div>
   </div>
 </div>
</div>
  )
}

export default TreatmentProcess
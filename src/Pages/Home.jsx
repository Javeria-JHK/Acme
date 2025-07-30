import react from "react";
import {Card, Skeleton} from "@heroui/react";
import StarIcon from '@mui/icons-material/Star';
import AccessAlarm from '@mui/icons-material/AccessAlarm';
import Accessibility from '@mui/icons-material/Accessibility'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center  overflow-hidden bg-black text-white relative">

      <h1 className="text-5xl font-bold mb-4 mt-6 text-center">Welcome to the Home Page</h1>
      <div className="relative min-h-screen min-w-screen bg-blue-100">
  {/* Background pattern */}
  <div className="absolute inset-0 bg-[url('/Images/bg.png')] bg-contain bg-no-repeat opacity-50 z-0" />

  {/* Optional overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black z-10" />

  {/* Main content on top */}
  <div className="relative z-20 flex flex-col items-center justify-center min-h-screen gap-8 p-8">
    <h1 className="text-5xl  font-bold text-center bg-gradient-to-r from-primary-400 to-primary-900 bg-clip-text py-2 text-transparent">Powering Smarter Choices</h1>
      <h2 className="text-4xl   font-bold text-gray-300 text-center py-0 my-0 ">"One Product at a Time"</h2>
      <p className="w-130 text-center text-1xl text-primary-900"  >Discover and compare the best products from top brands across Pakistan — all in one place. ACME helps you shop smarter with real-time pricing, quality insights, and personalized filters tailored to your needs.</p>

    
      
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white/90 p-6 rounded-2xl shadow-xl flex align-middle justify-center"><StarIcon className="text-primary-500" fontSize="large" /></div>
      <div className="bg-white/80 p-6 rounded-2xl shadow-xl flex align-middle justify-center"><AccessAlarm className="text-primary-400" fontSize="large" /></div>
      <div className="bg-white/70 p-6 rounded-2xl shadow-xl flex align-middle justify-center"><Accessibility className="text-primary-300 " fontSize="large" /></div>
    </div>
  </div>
</div>


      {/* <Card className="w-[200px] space-y-5 p-4" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-3/5 rounded-lg">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg">
          <div className="h-3 w-2/5 rounded-lg bg-default-300" />
        </Skeleton>
      </div>
    </Card> */}
  

    </div>
  );
}
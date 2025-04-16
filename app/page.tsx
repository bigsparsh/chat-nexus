import Header from "@/components/Header";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";

const Page = () => {
  return <div className="relative">
    <nav className="w-full absolute top-0 z-90 p-3">
      <Header className="bg-black/20 backdrop-blur-2xl rounded-3xl" />
    </nav>
    <AuroraBackground className="">
      <div className=" text-center flex flex-col gap-2 items-center justify-center">
        <h1 className="text-7xl text-white font-bold">Welcome to ChatNexus</h1>
        <p className="text-white/75 text-xl">Here we show the friends you made along the way and help you make more!</p>
        <div className="flex gap-3 mt-5">
          <Button className="rounded-3xl">
            Get Started
          </Button>
          <Button className="rounded-3xl" variant="secondary">
            Read More
          </Button>
        </div>
      </div>
    </AuroraBackground>

  </div>
}

export default Page;

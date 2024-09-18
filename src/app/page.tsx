import Image from 'next/image'
import safetyBoxImg from "@/assets/images/safety-box.png"
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <div className={"flex flex-col text-center md:text-start"}>
      <div className={"flex flex-col justify-center text-start md:flex-row md:items-center md:justify-between"}>
        <div className={"w-3/4 text-wrap md:w-1/2"}>
          <h1 className={"font-bold text-4xl lg:text-5xl"}>Get live crypto signals</h1>
          <p className={"mt-4 md:text-lg"}>For selected cryptocurrency pairs, manage Your portfolio, all in one app</p>
        </div>
        <Image src={safetyBoxImg} alt={"safe"} className={"w-3/4 md:w-1/3 m-auto"}/>
      </div>
      <div>
        <Button className={"text-xl font-bold px-10 py-6 mt-10"}>Explore</Button>
      </div>
    </div>
  );
}

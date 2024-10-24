import Image from 'next/image'
import safetyBoxImg from "@/assets/images/safety-box.png"
import {Button} from "@/components/ui/button";
import type {StaticImport} from 'next/dist/shared/lib/get-img-props';
import {CryptoListView} from "@/components/crypto-list-view";
import {TopCrypto} from "@/components/top-crypto";

export default function Home() {
    return (
        <div className={"2xl:w-5/6 m-auto"}>
            <div className={"flex flex-col text-center md:text-start"}>
                <div
                    className={"flex flex-col justify-center text-start md:flex-row md:items-center md:justify-between"}>
                    <div className={"w-3/4 text-wrap md:w-1/2"}>
                        <h1 className={"text-4xl font-bold lg:text-5xl"}>Get live crypto signals</h1>
                        <p className={"mt-4 md:text-lg"}>For selected cryptocurrency pairs, manage Your portfolio, all
                            in one
                            app</p>
                        <Button
                            className={"mt-4 hidden px-8 text-xl font-medium hover:bg-amber-400 lg:block"}>Explore</Button>

                    </div>
                    <Image src={safetyBoxImg as StaticImport} alt={"safe"} className={"m-auto w-3/4 md:w-1/3"}/>
                </div>
                <div>
                    <Button className={"mt-10 px-10 py-6 text-xl font-medium lg:hidden"}>Explore</Button>
                </div>
            </div>
            <div className={"mt-12"}>
                <CryptoListView/>
                <div className={"mt-8 flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-x-8 lg:mt-12"}>
                    <TopCrypto type={"win"}/>
                    <TopCrypto type={"loss"}/>
                </div>
            </div>
        </div>
    );
}

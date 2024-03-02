import Image from "next/image";

export default function About() {
    return (
        <main className="">
            <div className={"w-full h-screen"}>
                <div className={"w-full bg-blue-900"}>
                    <div className={"md:pt-48 md:pb-28 pt-32 pb-12 w-full md:w-3/4 px-10 space-y-4 text-white"}>
                        <h1 className={"text-4xl font-bold"}>
                            We Are Folk Impressions
                        </h1>
                        <p className={"md:text-2xl text-xl"}>
                            We are the manufacturer of the Original Electric Kistka (hot wax pen) — also known as the “white handled” kistka.
                        </p>
                    </div>
                </div>
                <div className={"w-full"}>
                    Image will go here
                </div>
            </div>
            <div>

            </div>
        </main>
    );
}

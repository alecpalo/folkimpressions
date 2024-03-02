import Image from "next/image";

export default function NotFound() {
    return (
        <main className={"w-full min-h-screen items-center"}>
            <div className={"flex-col flex justify-center items-center text-center w-full h-screen bg-blue-300"}>
                <h1 className={"text-2xl"}>
                    Error, Page Not Found
                </h1>
                <p className={"text-xl"}>
                    Try going to another page!
                </p>
            </div>
        </main>
    );
}

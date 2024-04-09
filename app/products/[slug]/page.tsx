import { notFound } from 'next/navigation'
import {getProductInfo} from "@/app/utils";


export default function Product( { params }: { params: { slug: string } }) {
    const data = getProductInfo(params.slug);
    if(!data) {
        console.log("No House Details Page");
        notFound();
    }

    return (
        <main className={"bg-white min-h-screen "}>
            <div className={"w-full flex justify-center py-5"}>
                <div className={"w-3/4 flex-col text-left"}>
                    <h1 className={"text-2xl"}>
                        TEST
                    </h1>
                    <p>
                        TEST
                    </p>
                </div>

            </div>
        </main>

    );
}

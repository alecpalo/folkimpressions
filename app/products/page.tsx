import ProductCategory from "@/app/_components/_products/_categories/productCategory";

export default function Home() {
    return (
        <main className="min-h-screen w-full dark:bg-gray-700">
            <div className={"h-screen w-full bg-blue-900"}>
            {/* This is to test where the image will go */}
            </div>

            {/* Product Categories go here */}
            <div className={"w-full flex justify-center py-10 px-5 md:px-0"}>
                <div className={"w-2/3 flex flex-col justify-start space-y-10"}>
                    <ProductCategory/>
                    <ProductCategory/>
                    <ProductCategory/>
                    <ProductCategory/>

                </div>

            </div>
        </main>
    );
}

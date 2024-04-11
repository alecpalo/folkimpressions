import Image from "next/image";

const ProductCategory = () => {
    return(
        <div className={"border-2 border-black w-full md:px-0 w-3/4 rounded-3xl shadow-2xl hover:scale-105 duration-300 transition ease-in-out"}>
            <div className={"p-2 flex flex-col md:flex-row w-full"}>
                <div className={"md:w-1/4 w-full flex justify-center"}>
                    <Image src={"/temp.png"} alt={"Temp"} width={200} height={200}/>
                </div>
                <div className={"md:w-3/4 w-full flex-col flex justify-center md:justify-start px-5"}>
                    <h1 className={"text-2xl"}>
                        Title of product
                    </h1>
                    <p className={"text-xl"}>
                        description of product, this is a description of a product. This is what it is, it does this.
                        Ect. Ect.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default ProductCategory;
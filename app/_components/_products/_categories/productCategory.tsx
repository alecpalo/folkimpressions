import Image from "next/image";

const ProductCategory = () => {
    return(
        <div className={"border-2 border-black w-full md:px-0 md:w-3/4 lg:w-1/2 rounded shadow-xl flex flex-col md:flex-row"}>
            <div className={"md:w-1/4 w-full flex justify-center"}>
                <Image src={"/temp.png"} alt={"Temp"} width={250} height={250}/>
            </div>
            <div className={"md:w-3/4 w-full flex-col flex justify-center md:justify-start px-5"}>
                <h1 className={"text-2xl"}>
                    Title of product
                </h1>
                <p className={"text-xl"}>
                    description of product, this is a description of a product. This is what it is, it does this. Ect. Ect.
                </p>
            </div>
        </div>
    );
}

export default ProductCategory;
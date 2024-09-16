

import Billboard from "@/components/billboard";
import Container from "@/components/ui/container"
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";

const HomePage = async () => {
    const products=await getProducts({isFutured:true})
    const billboard = await getBillboard("2577dcc5-33fa-4df8-af8c-2a82148091fd");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Futured Products" items={products}/>
                </div>
            </div>
        </Container>
    )
}

export default HomePage;
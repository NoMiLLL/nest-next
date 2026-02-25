import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProductForm } from "./productForm";
import { getProduct } from "../products.api";

interface Props {
    params?: {
        id?: string;
    };
}

async function productsNewPage({params}: Props) {
    const id = params?.id;
    const product = id ? await getProduct(id) : undefined;
    return (
    <div className="h-screen flex justify-center items-center">
    <Card>
        <CardContent>
        <CardHeader>
            <CardTitle className="flex justify-center items-center">
                {id ? "edit product": "create product"}
            </CardTitle>
        </CardHeader>
        <ProductForm product={product}/>
        </CardContent>
    </Card>
    </div>
);
}

export default productsNewPage;

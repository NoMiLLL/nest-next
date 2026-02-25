import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProduct } from "../products.api";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

interface Props {
    params: {
        id: string;
    };
}

async function ProductDetailsPage({ params }: Props) {
    const { id } = await params;
    const producto = await getProduct(id);
    return (
        <div className="flex justify-center items-center h-screen">
        <Card>
            <CardHeader>
            <CardTitle className="flex justify-between">
                Product Detail: {producto.id}
                <Link className={buttonVariants()} href="/">
                Go back
                </Link>
            </CardTitle>
            </CardHeader>
            <CardContent>
                <h1>{producto.name}</h1>
                <p>{producto.description}</p>
                <p>${producto.price}</p>
                <img
                src={producto.image}
                alt=""
                className="w-full h-64 object-cover"
                />
            </CardContent>
        </Card>
        </div>
    );
    }
    export default ProductDetailsPage;

    
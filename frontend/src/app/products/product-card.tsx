"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { removeProduct } from "./products.api";
import { useRouter } from "next/navigation";

export function ProductCard({ product }: any) {
  const router = useRouter();
  async function deleteProduct(id: string) {
    await removeProduct(id);
    router.refresh();
  }

  return (
    <Card onClick={() => {
      router.push(`products/${product.id}`)
    }}>
      <CardHeader>
        <CardTitle className="flex justify-between">
          {product.name}
          <span className="text-sm font-bold text-gray-500">
            ${product.price}
          </span>
        </CardTitle>
      </CardHeader>
      <img src={product.image} alt="No se encontro imagen disponible" />
      <CardContent>
        <p>{product.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className="mt-5"
        onClick={(e) => {
          e.stopPropagation()
          router.push(`/products/${product.id}/edit`);
        }}
        >editar</Button>
        <Button
          className="mt-5"
          variant={"destructive"}
          onClick={(e) => {e.stopPropagation();
            deleteProduct(product.id)}}
        >
          eliminar
        </Button>
      </CardFooter>
    </Card>
  );
}

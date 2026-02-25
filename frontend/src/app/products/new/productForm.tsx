"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { CreateProduct, updateProduct } from "../products.api";
import { useParams, useRouter } from "next/navigation";

export function ProductForm({product}: any) {
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: product?.name,
            description: product?.description,
            price: product?.price,
            image: product?.image,
        }
    });
    const router = useRouter()
    const params = useParams<{id: string}>();

    const onSubmit = handleSubmit(async (data) => {
        if(params?.id) {
            await updateProduct(params.id, {
                ...data,
                price: parseFloat(data.price),
            })
        }else {
            await CreateProduct({
            ...data,
            price: parseFloat(data.price),
    });
        }
    router.push('/');
    router.refresh();
});

    return (
        <form onSubmit={onSubmit}>
            <Label  style={{ margin: "5px", display: "block" }}>Product Name</Label>
            <Input {...register("name")} />

            <Label  style={{ margin: "5px", display: "block" }}>Decription</Label>
            <Input {...register("description")} />

            <Label  style={{ margin: "5px", display: "block" }}>Price</Label>
            <Input {...register("price")} />

            <Label  style={{ margin: "5px", display: "block" }}>Image</Label>
            <Input {...register("image")} />

            <Button style={{ margin: "5px", display: "block" }}>
                {params.id ? 'update product' : 'create product'}
            </Button>
        </form>
    );
}

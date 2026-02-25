const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api";

export async function getProducts() {
    const data = await fetch(`${API_BASE_URL}/products`, {
        cache: "no-store",
    });
    return await data.json()
}

export async function getProduct(id: string) {
    const data = await fetch(`${API_BASE_URL}/products/${id}`, {
        cache: "no-store"
    });
    return await data.json()
}



export async function CreateProduct(producData: any) {
    const res = await fetch(`${API_BASE_URL}/products`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(producData),
        })
        const data = await res.json()
        console.log(data)
}

export async function removeProduct(id:string) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`,{
        method: "DELETE",
    })
    return await res.json();
}

export async function updateProduct(id: string, newProduct: any) {
    const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct),
        cache: 'no-store'
    });
    return await res.json();
}

import { collection, addDoc, getDocs, updateDoc, doc, getDoc, deleteDoc } from "firebase/firestore";
import type { Product } from "../types/Product";
import { auth, db } from "../firebase/firebase";


const productsRef = collection(db, "articulos");

export const createProductService = async (product: Omit<Product, "id">) => {
    const user = auth.currentUser;
    if (!user) throw new Error("Usuario no autenticado");

    await addDoc(productsRef, {
        ...product,
        creadoPor: user.uid,
    });
}

export const getProductsService = async (): Promise<Product[]> => {
    const snapshot = await getDocs(productsRef);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })) as Product[];
}

export const updateProductService = async (id: string, data: Partial<Product>) => {
    await updateDoc(doc(db, "articulos", id), data);
}

export const getProductByIdService = async (id: string) => {
    const snapshot = await getDoc(doc(db, "articulos", id));
    return snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as Product : null;
}

export const deleteProduct = async (id: string): Promise<void> => {
    await deleteDoc(doc(db, "articulos", id));
}


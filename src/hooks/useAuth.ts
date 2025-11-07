import type { User } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";

export function useAuth() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsub();
    }, []);

    return { user, loading };
}
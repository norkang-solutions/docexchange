import { useAuth } from "@/app/_contexts/auth-context";
import { useQuery } from "@tanstack/react-query";
import getUser from "@firebase/firestore/get-user";

export default function useGetUser() {
    const { user, loading: isLoadingAuth } = useAuth();
    const id = user?.uid;

    const res = useQuery({
        queryKey: ["user", id],
        queryFn: () => getUser(id!),
        enabled: !!id,
    });

    return {
        ...res,
        isLoading: isLoadingAuth || res.isLoading,
    };
}

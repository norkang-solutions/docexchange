import { useCallback } from "react";

export default function useWait() {
    return useCallback(
        (ms: number) =>
            new Promise(resolve => {
                setTimeout(resolve, ms);
            }),
        []
    );
}

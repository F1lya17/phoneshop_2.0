import { useCallback, useRef } from "react";


const useDebounce: (a: (s?: string) => void, delay: number) => (s?: string) => void = (callback, delay) => {
    const timer = useRef<number>();

    const debouncedCallback = useCallback((s?: string) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(() => {
            callback(s);
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}

export default useDebounce;
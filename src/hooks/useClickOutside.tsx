import { RefObject, useEffect } from "react";

interface useOutsideClickProps {
    ref: RefObject<HTMLUListElement | HTMLDivElement>
    onClickOut: () => void
    deps?: React.DependencyList
}

export function useOutsideClick({ref, onClickOut, deps}:useOutsideClickProps) {

    useEffect(() => {
        const onClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOut()
            }
        }

        document.addEventListener("click", onClick)

        return () => {
            document.removeEventListener("click", onClick)
        }

    }, [onClickOut, ref, ...(deps ?? [])])// eslint-disable-line react-hooks/exhaustive-deps
}
import { RefObject, useEffect } from "react";

interface useOutsideClickProps {
    ref: RefObject<HTMLUListElement | HTMLDivElement | HTMLLIElement | HTMLLabelElement>
    onClickOut: () => void
    deps?: React.DependencyList
}

function useOutsideClick({ref, onClickOut, deps}:useOutsideClickProps) {

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

export default useOutsideClick
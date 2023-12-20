import { useState, ChangeEvent, RefObject } from 'react'
import useOutsideClick from './useClickOutside'

function useDropdownLogic({ initialValue }: { initialValue?: OptionType | null }, { ref }: { ref: RefObject<HTMLUListElement> }) {
    const [isExpanded, setIsExpanded] = useState<boolean | null>(null)
    const [selected, setSelected] = useState<OptionType | null>(initialValue ?? null)
    const [userQuery, setUserQuery] = useState<string>('')

    const handleClick = () => {
        setIsExpanded(!isExpanded)
    }

    useOutsideClick({ ref: ref, onClickOut: () => setIsExpanded(false) })

    const handleSelectItem = (option: OptionType) => {
        setSelected(option)
        setUserQuery(option)
        setIsExpanded(!isExpanded)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target

        if (value === "") {
            setUserQuery("")
            setIsExpanded(null)
        } else {
            setUserQuery(value)
            setIsExpanded(true)
        }
    }

    return {
        isExpanded,
        selected,
        userQuery,
        handleSelectItem,
        handleChange,
        handleClick,
    }
}

export default useDropdownLogic
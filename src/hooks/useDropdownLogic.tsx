import { useState, ChangeEvent, RefObject, KeyboardEvent, MouseEvent } from 'react'
import useOutsideClick from './useClickOutside'

function useDropdownLogic(
    { initialValue }: { initialValue?: OptionType | null },
    { ref }: { ref: RefObject<HTMLUListElement> },
    { options }: { options: OptionType[] },
    { placeholder }: { placeholder?: string }
) {
    const [isExpanded, setIsExpanded] = useState<boolean | null>(null)
    const [selected, setSelected] = useState<OptionType | null>(initialValue ?? null)
    const [userQuery, setUserQuery] = useState<string>('')

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
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

    const handleKeyNavigation = (e: KeyboardEvent<HTMLButtonElement>) => {
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                if (isExpanded && selected === null && ref.current) {
                    (ref.current.childNodes[0] as HTMLLIElement).focus()
                }

                if (selected === null) {
                    setSelected(options[0])
                } else if (placeholder) {
                    setSelected(options[0])
                }

                if (selected) {
                    setSelected(options[(options.indexOf(selected) + 1)])
                }

                if (selected && (options.indexOf(selected) === options.length - 1)) {
                    setSelected(options[0])
                }

                break


            case 'ArrowUp':
                e.preventDefault()

                if (isExpanded && selected === null && ref.current) {
                    const lastChild = ref.current.childNodes.length - 1;
                    (ref.current.childNodes[lastChild] as HTMLLIElement).focus()
                }

                if (selected === null) {
                    setSelected(options[options.length - 1])
                } else if (placeholder) {
                    setSelected(options[options.length - 1])
                }

                if (selected) {
                    setSelected(options[(options.indexOf(selected) - 1)])
                }

                if (selected && (options.indexOf(selected) === 0)) {
                    setSelected(options[options.length - 1])
                }

                break

            case 'Enter':
                e.preventDefault()
                setIsExpanded(true)
                break

            case 'Space':
                e.preventDefault()
                setIsExpanded(true)
                break

            case 'Escape':
                e.preventDefault()
                setIsExpanded(false)
                break
                 
            default:
                break
        }
    }

    return {
        isExpanded,
        selected,
        userQuery,
        handleSelectItem,
        handleChange,
        handleClick,
        handleKeyNavigation
    }
}

export default useDropdownLogic
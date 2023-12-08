interface InputPropType {
    name: string
    type: string
    title: ReactNode
    accessibility?: string
    radioChoices?: string[]
    checkboxChoices?: string[]
    placeholder?: string
    className?: string
    onChange?: (() => void) | ((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void)
    children?: ReactNode
    noHeader?: boolean
}
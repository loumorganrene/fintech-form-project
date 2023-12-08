export interface InputPropType {
    name: string
    type: string
    title: ReactNode
    accessibility?: string
    radioChoices?: string[]
    checkboxChoices?: string[]
    placeholder?: string
    className?: string
    children?: ReactNode
    noHeader?: boolean
}
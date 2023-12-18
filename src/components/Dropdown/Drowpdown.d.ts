interface DropdownPropsI {
    id: string,
    options: OptionType[],
    accessibility: string,
    initialValue?: OptionType,
    placeholder?: string,
    title?: string,
    style: string,
    multipleSelection?: boolean,
}

type OptionType = string

type ErrorType = string | null
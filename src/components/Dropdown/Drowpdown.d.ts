interface DropdownPropsI {
    id: string,
    options: OptionType[],
    accessibility?: string,
    initialValue?: OptionType,
    placeholder?: string,
    title?: string,
    style: string,
    multipleSelection?: boolean,
    useOption?: OptionType,
}

type DropdownStylePropsT = Omit<DropdownPropsI,"style">

type OptionType = string

type ErrorType = string | null
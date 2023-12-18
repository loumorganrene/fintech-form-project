// interface DropdownProps {
//     label: string,
//     subject: string,
//     elementList: string[],
//     regex?: string,
//     searchbar?: boolean,
//     multiSelection?: boolean,
//     accessibility: string,
// }

interface DropdownPropsI {
    id: string,
    options: OptionType[],
    accessibility: string,
    initialValue?: OptionType,
    onUpdateValue?: (value: string)=> void,
    placeholder?: string,
    title?: string,
    style: string,
    multipleSelection?: boolean,
}

type OptionType = string

type ErrorType = string | null
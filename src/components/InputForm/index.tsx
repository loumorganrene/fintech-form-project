import { ReactNode } from 'react'

import './InputForm.scss'
interface InputPropType {
    name: string
    type: string
    title?: ReactNode
    accessibility?: string
    radioChoices?: string[]
    checkboxChoices?: string[]
    placeholder?: string
    className?: string
    children?: ReactNode
    noHeader?: boolean
}

function InputForm({ name, type, title, noHeader, accessibility, placeholder, radioChoices, checkboxChoices, className, children }: InputPropType) {
    const isRadio = type === "radio"
    const isCheckbox = type === "checkbox"
    const isSimple = noHeader === true

    return (
        <>
            {!isRadio
                ?
                (isCheckbox
                    ?
                    (<>
                        {checkboxChoices?.map((choice) =>
                            <label
                                htmlFor={name + "Checkbox"}
                                id={name + "Label"}
                                className="choice__container"
                            >
                                {choice}
                                <input
                                    type={type}
                                    id={name + "Checkbox"}
                                    name={name}
                                />
                            </label>
                        )}
                    </>
                    )
                    :
                    (
                        <label
                            htmlFor={name + "Input"}
                            id={name + "Label"}
                            className={className}>
                            {isSimple ? title : <h3 className="label-heading">{title}</h3>}
                            <input
                                type={type}
                                id={name + "Input"}
                                name={name}
                                aria-label={accessibility}
                                placeholder={placeholder}
                            />
                        </label>
                    )
                )
                :
                (
                    <label id={name}>
                        {isSimple ? title : <h3 className="label-heading">{title}</h3>}
                        {radioChoices?.map(
                            (choice) =>
                                <span className="choice__container">
                                    <label htmlFor={name + choice}>{choice}</label>
                                    <input
                                        type={type}
                                        id={name + choice}
                                        name={name + "Choice"}
                                        value={choice}
                                    />
                                </span>
                        )}
                        {children}
                    </label>
                )
            }
        </>)
}

export default InputForm
import './InputForm.scss'
interface InputPropType {
    name: string
    type: string
    title: string
    accessibility: string
    choices?: string[]
    placeholder?: string
}

function InputForm({ name, type, title, accessibility, placeholder, choices }: InputPropType) {

    return (
        <>
            {type !== "radio"
                ? <label htmlFor={name  + "input"} id={name + "label"}>
                    <h3 className="label-heading">{title}</h3>
                    <input
                        type={type}
                        id={name  + "input"}
                        name={name}
                        aria-label={accessibility}
                        placeholder={placeholder}
                    />
                </label>
                : <label id={name}>
                    <h3 className="label-heading">{title}</h3>
                    {choices?.map((choice) => <span className="choice__container">
                        <label htmlFor={name + choice}>{choice}</label>
                        <input
                            type={type}
                            id={name + choice}
                            name="choice"
                            value={choice}
                        />
                    </span>)
                    }
                </label>
            }
        </>)
}

export default InputForm
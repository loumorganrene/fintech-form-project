import './BtnNav.scss'

interface BtnNavParam {
    changePage: (() => void) | ((e: React.FormEvent<HTMLButtonElement>) => void)
    action: string | boolean
}

function BtnNav({ changePage, action }: BtnNavParam) {

    if (action === '' || action === false) {
        return (<></>)
    }
    return (
        <button
            onClick={changePage}
            className={`btn-form-page ${action}`}>
            {action}
        </button>
    )
}

export default BtnNav
import { useRouteError } from "react-router-dom"
import './ErrorPage.scss'

interface Error {
    status: string;
    message?: string;
    statusText?: string;
}

export default function ErrorPage() {
    const error: Error | undefined = useRouteError() as Error;

    return (
        <div className="error-page">
            <h2>{error && error.status}</h2>
            <p>{error && (error.message || error.statusText)}</p>
            <h2>Oops...</h2>
            <p>Sorry, an unexpected error has occurred.</p>
        </div>
    )
}
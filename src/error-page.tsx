import { useRouteError } from "react-router-dom";

interface ErrorType {
    data: string;
    error: string;
    internal: boolean
    status: number
    statusText: string
}

export default function ErrorPage() {
    const error = useRouteError() as ErrorType;
    console.error(error);

    return (
        <div className="w-11/12  lg:w-7/12 m-auto">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.data}</i>
            </p>
        </div>
    );
}
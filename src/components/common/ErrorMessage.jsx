function ErrorMessage({ errorMessage }) {
    return (
        <div className="container mx-auto py-16 px-10 loading-wrapper">
            <p>{errorMessage}</p>
        </div>
    )
}

export default ErrorMessage
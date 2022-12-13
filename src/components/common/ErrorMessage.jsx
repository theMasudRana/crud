function ErrorMessage({ error }) {
    return (
        <div className="container mx-auto py-16 px-10 loading-wrapper">
            <p>{error}</p>
        </div>
    )
}

export default ErrorMessage
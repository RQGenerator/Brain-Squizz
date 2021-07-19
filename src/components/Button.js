const Button = ({ display, setDisplay }) => {
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>
                Click Here
            </button>
        </div>
    )
}

export default Button

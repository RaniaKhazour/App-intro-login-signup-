const Input = ({ type, placeholder, nameInput }) => {
    return (
        <input className="col-span-8 bg-transparent outline-none border-none font-semibold text-lg text-gray-800" type={type} placeholder={placeholder} name={nameInput} required></input>
    );
}

export default Input;
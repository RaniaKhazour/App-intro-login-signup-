const Input = ({ icon, type, placeholder, nameInput }) => {
    return (
        <>
            <i className={`fas ${icon} text-center mt-2 text-gray-500 text-lg flex-1`}></i>
            <input className="bg-transparent outline-none border-none font-semibold text-lg text-gray-800 flex-4" type={type} placeholder={placeholder} name={nameInput} required></input>
        </>
    );
}

export default Input;
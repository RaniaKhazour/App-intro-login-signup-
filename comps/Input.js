const Input = ({ icon, type, placeholder, nameInput }) => {
    return (
        <div className="max-w-sm w-full h-14 mt-3 rounded-2xl bg-gray-100 flex justify-around py-1.5 shadow-sm flex-row">
            <i className={`fas ${icon} text-center mt-2 text-gray-500 text-lg flex-1`}></i>
            <input className="bg-transparent outline-none border-none font-semibold text-lg text-gray-800 flex-4" type={type} placeholder={placeholder} name={nameInput} required></input>
        </div>
    );
}

export default Input;
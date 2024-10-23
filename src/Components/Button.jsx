const Button = ({text, onClick}) => {
    return(
        <button className="transition ease-in-out delay-150 bg-white font-extrabold rounded-full p-2 hover:scale-110 hover:bg-slate-300" onClick={onClick}>{text}</button>
    )
}

export default Button
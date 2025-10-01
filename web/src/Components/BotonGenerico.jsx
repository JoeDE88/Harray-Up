export default function BotonGenerico({texto,handleClick}) {
    return (
        <button className='btn' onClick={handleClick}>{texto}</button>
    )
}
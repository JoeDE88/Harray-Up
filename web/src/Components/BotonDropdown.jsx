export function BotonDropDown({ texto, funcion }) {
    return (
        <>
            <button className="btn dropdown" onClick={funcion}>{texto} &#x2BC6;</button>
        </>
    )
}
function Btn(){
    const clickHandler = () => console.log("clicked")
    const mouseOverHandler = () => console.log("mouseOvered")
    return (
        <button onClick={clickHandler} onMouseOver={mouseOverHandler}>Click me</button>
    )
}

export default Btn;
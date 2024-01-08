

const Cottage = () => {
    const handleClick= () =>{
        console.log("You have spun yarn")
    }
    return (
        <div>
            <h3>This is Cottage</h3>
            <button onClick={(handleClick)}>Spin yarn</button>
        </div>
    )
    
}

export default Cottage
import React from 'react';
const Row = ({children, spacing}) => {
    const childStyle = {
        marginLeft : `${spacing}px`
    }
    return (
        <div className="Row">
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    style:{
                        ...child.props.style,
                        ...(index > 0?childStyle:{}),
                        ...(index > 1?{color: "blue"}: {color: "red"})
                    }
                })
            })}
        </div>
    )
}


function Containment(){
    return (
        <>
        <Row spacing={32} >
            <p>Margarita</p>
            <p>2</p>
            <p>John</p>
        </Row>
        </>
    )
}

export default Containment;
import {useState, useEffect} from 'react';

const WithMouseMovement = (WrappedComponent) => {
    const MouseTracker = (props) => {
        const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

        useEffect(() => {
            const handleMousePositionChange = (e) => {
                setMousePosition({ x: e.clientX, y: e.clientY });
            };

            window.addEventListener('mousemove', handleMousePositionChange);

            return () => {
                window.removeEventListener('mousemove', handleMousePositionChange);
            };
        }, []);

        // Render the wrapped component and pass down the mousePosition
        return <WrappedComponent {...props} mousePosition={mousePosition} />;
    };

    return MouseTracker;
}

const PanelMouseLogger = ({mousePosition}) =>{
    if(!mousePosition) return null;
    return (
        <div>
            <p>Mouse Position</p>
            <div className="Row">
                <span>x: {mousePosition.x}</span>
                <span>y: {mousePosition.y}</span>
            </div>
        </div>
    )
}
const MousePosition = ({ render }) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
  
    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener("mousemove", handleMousePositionChange);
  
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);
  
    return render(mousePosition);
};

const PointMouseLogger = () => {
    return (
        <MousePosition render={(data) => {
          return <p>({data.x}, {data.y})</p>
        }} />
    )
  };

const PanelMouseTracker = WithMouseMovement(PanelMouseLogger);

function Mouse(){
    return(
        <>
            <PanelMouseTracker/>
            <PointMouseLogger/>
        </>
    )
}

export default Mouse;
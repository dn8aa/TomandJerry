import { Box } from '@mui/system';
import React from 'react';

function ZoomImage({ picture }) {
    // Объявляем состояние, хранящее информацию о масштабе изображения
    const [scale, setScale] = React.useState(1);

    // Объявляем состояние, хранящее информацию о координатах мыши
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

    // Обработчик наведения курсора мыши на изображение
    const handleMouseOver = () => {
        setScale(1.5);
    };

    // Обработчик ухода курсора мыши с изображения
    const handleMouseOut = () => {
        setScale(1);
    };

    // Обработчик движения мыши
    const handleMouseMove = (event) => {
        setMousePosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    return (
        <Box
            sx={{
                overflow: 'hidden',
                cursor: 'crosshair',
                width:'50%',
                p:4
            }}
            onMouseMove={handleMouseMove}
        >
            <img
            width='100%'
                src={picture}
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: `${mousePosition.x}px  ${mousePosition.y}px`,
                }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            />
        </Box>
    );
}

export default ZoomImage;
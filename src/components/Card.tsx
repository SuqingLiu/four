import React from 'react';
import { useCardContext } from '../context/CardContext';
import { Button, ButtonGroup } from '@mui/material';

const colors = ['RED', 'PURPLE', 'ORANGE', 'YELLOW'];


function Card(props: { cardIndex: any; }) {
    const { cardIndex } = props;
    const { selectedColors, setSelectedColors } = useCardContext();

    const selectColor = (color: string) => {
        const newColors = [...selectedColors];
        newColors[cardIndex] = color;
        setSelectedColors(newColors);
    };

    const restColors = colors.filter((color) => !selectedColors.includes(color));

    return (
        <div style={{ marginBottom: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ flex:1 }}>
          <h3>Card {cardIndex + 1}</h3>
          {selectedColors[cardIndex] ? (
            <div>
              Locked: <span style={{ fontWeight: 'bold', color: selectedColors[cardIndex]?? 'black' }}>{selectedColors[cardIndex]}</span>
            </div>
          ) : (
            <ButtonGroup variant="contained" style={{ display: 'flex' }}>
              {restColors.map((color) => (
                <Button key={color} style={{ backgroundColor: color }} onClick={() => selectColor(color)}>
                  {color}
                </Button>
              ))}
            </ButtonGroup>
          )}
          </div>
        </div>

    );
}

export default Card;

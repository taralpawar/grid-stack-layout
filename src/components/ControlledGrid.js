import React, { useState, useEffect } from 'react';
import ControlledStack from './ControlledStack';
import '../GridStack.css'
import NavBar from './NavBar';


const ControlledExample = () => {
    const [items, setItems] = useState([]);
    const [isAppSelectOpen, setIsAppSelectOpen] = useState(false);

    const removeItem = (id) => {
        let newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    return (
        <>
        <NavBar 
            handleAppSelectOpen={() => setIsAppSelectOpen(true)}
        />
        <ControlledStack
        items={items}
        isAppSelectOpen={isAppSelectOpen}
        closePopUpOpen={() => setIsAppSelectOpen(false)}
        removeItem={removeItem}
        addItem={(name, image) => setItems([...items, { id: `item-${items.length + 1}`, name: name, image: image}])}
        />
        </>
    )
}

export default ControlledExample;
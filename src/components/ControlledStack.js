import React, { useState, useEffect, useRef, createRef } from 'react';
import '../GridStack.css';
import AddIcon from '../media/icons/add_circle.svg';

import { GridStack } from 'gridstack';
import AppSelectPopUp from './AppSelectPopUp';

const Item = ({ id, name, image }) => <img className='app-image' src={image} />

const ControlledStack = ({ items, isAppSelectOpen, closePopUpOpen, removeItem, addItem }) => {
    const refs = useRef({})
    const gridRef = useRef()

    if (Object.keys(refs.current).length !== items.length) {
      items.forEach(({ id }) => {
        refs.current[id] = refs.current[id] || createRef()
      })
    }

    useEffect(() => {
      gridRef.current = gridRef.current ||
        GridStack.init({
          column: 3,
          cellHeight: 250,
          //cellWidth: 500,
          disableOneColumnMode: true,
          float: false,
          alwaysShowResizeHandle: 'mobile'
        }, '.controlled')
      const grid = gridRef.current
      grid.batchUpdate()
      grid.removeAll(false)
      items.forEach(({ id }) => {
        grid.addWidget(refs.current[id].current);
      });
      grid.batchUpdate(false)
    }, [items]);

    return (
      <div id="container">
        <div className={`grid-stack controlled`}>
          {console.log("items", items)}
          {items.map((item, i) => {
            return (
              <div ref={refs.current[item.id]} key={item.id} className={'grid-stack-item'}>
                <div className="grid-stack-item-content" data-gs-width="8">
                  <div className='app-image-container'>
                  <button className='app-close-btn' onClick={() => removeItem(item.id)}>
                      <i className="fa fa-close" style={{fontSize: "1em", color: "white"}}></i>
                  </button>
                  <Item {...item} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {isAppSelectOpen && 
          <AppSelectPopUp 
            handleClose={closePopUpOpen}
            addItem={addItem}
          />
        }
      </div>
    );
}

export default ControlledStack;
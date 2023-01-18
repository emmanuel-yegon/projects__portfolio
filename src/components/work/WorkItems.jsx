import React from 'react'

const WorkItems = ({item}) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} className="work__img" alt="" />
      <h3 className="work__title">{item.title}</h3>
        <a href="" className="work__button">
          Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
        </a>
        <a href={item.url} className="work__button">
          Source Code <i className="uil uil-github work__button-icon"></i>
        </a>
      </div>
  );
}

export default WorkItems;
           
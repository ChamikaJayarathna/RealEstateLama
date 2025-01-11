import React from 'react';
import Card from '../../components/Card/Card';
import { listData } from '../../lib/dummydata';
import './List.scss';

const List = () => {
  return (
    <div className='list'>
      {listData.map(item=>(
        <Card key={item.id} item={item}/>
      ))}
    </div>
  );
}

export default List;
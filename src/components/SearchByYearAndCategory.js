import React, {useState} from 'react';
import Prize from '../prize.json';

export function SearchByYearAndCategory (props) {
    let list = [];

   const [year, setYear] =useState(2018);
   const handleChangeYear = ({target}) => setYear(target.value)


   const [category, setCategory] = useState('physics');
   const handleChangeCategory = ({target}) => setCategory(target.value)

   Prize.prizes.map(part => {
       if(part.year === year && part.category === category){
           part.laureates.map(subPart => {
               list.push(subPart.firstname)
           })
       }
   })

   

return (
    <div>
    <input 
      type="number"
      placeholder="Type Year"
      value={year}
      onChange={handleChangeYear}
    />
    <input 
      type="text"
      placeholder="Type category"
      value={category}
      onChange={handleChangeCategory}
    />
    <div>
        {list.map(winner => <p>{winner}</p>)}
    </div>
    </div>
);
}
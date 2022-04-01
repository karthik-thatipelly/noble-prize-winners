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
    <div className="background">
        <h1>Search Noble Prize winners by year and category</h1>
        <p><em>[Tip: Type year between 1943 and 2018 | choose category among physics, medicine, economics, literature, peace, chemistry (case-sensitive)]</em></p>
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
    <div className="decor">
        {list.map(winner => <p>{winner}</p>)}
    </div>
    </div>
);
}
import React, {useState} from 'react';
import Prize from '../prize.json';



export function SearchByYear(props) {
    let list =[];
    const [year, setYear] = useState(2018);
    
       Prize.prizes.map(part => {
           if(part.year === year) {
                part.laureates.map(subPart => {
                    list.push(subPart.firstname)
                } )
           }
       })
    
    
    const handleChange = ({target}) => setYear(target.value);

    return (
        <div className="background1">
            <h1>Search Noble Prize Winners by Year</h1>
        <input
          type='number'
          placeholder="search by year"
          onChange={handleChange}
          value={year}
        />
        <div className="decor1">
             {list.map(winner => <p>{winner}</p>)}
        </div>
        </div>
    );
}

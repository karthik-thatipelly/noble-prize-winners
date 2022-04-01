import React, {useState} from 'react';
import Prize from '../prize.json';

export function SearchByAlphabets () {
    let nameList=[];
    let categoryList=[];
    let yearList=[];
    const [alphabet, setAlphabet] =useState();

    Prize.prizes.map(part=> {
        part.laureates.map(subPart => {
            if(subPart.firstname[0] === alphabet) {
                nameList.push(subPart.firstname)
                categoryList.push(part.category)
                yearList.push(part.year)
            }
        })
    })

    const handleChange =({target}) => setAlphabet(target.value)

   return(
       <div className="background1">
           <h1>Search Noble Prize Winners Alphabetical-wise</h1>
           <p><em>[Tip: Type any letter between A-Z (case sensitive)]</em></p>
          <input 
            type="text"
            placeholder = "Type any letter here"
            value={alphabet}
            onChange={handleChange}
          />
          <div>
              <table className="decor2">
                  <tr>
                      <td>
                  {nameList.map(winner => <tr><td>{winner}</td></tr>)}
                       </td>
                       <td>
                  {categoryList.map(category => <tr><td>{category}</td></tr>)}
                        </td>
                       <td>
                  {yearList.map(year => <tr><td>{year}</td></tr>)}
                       </td>
                  </tr>
              </table>
          </div>
       </div>
   )
}
import React, {useState} from 'react';
import Prize from '../prize.json';



export function SearchByName(props) {
    let id,firstName,lastName, motivation, share, category, year;
    const [name, setName] = useState('Arthur');
    
        Prize.prizes.map(part => {

            part.laureates.map(subPart => {
                if(subPart.firstname === name || subPart.lastname === name || subPart.surname === name) {
                    id = subPart.id;
                    firstName= subPart.firstname;
                    lastName= subPart.lastname || subPart.surname;
                    motivation = subPart.motivtion;
                    share= subPart.share;
                    category= part.category;
                    year= part.year;  
                }
            })

        })
    
    
    const handleChange = ({target}) => setName(target.value);

    return (
        <div className="background">
            <h1>Search Noble Prize Winners by Name</h1>
            <p><em>[Tip: Type year in the second block to get names of winners and type one of them here(case sensitive).]</em></p>
        <input
          type='text'
          placeholder="search by name"
          onChange={handleChange}
          value={name}
        />
        <div className="decor">
              <p>Id : {id}</p>
              <p>FirstName : {firstName}</p>
              <p>LastName : {lastName}</p>
              <p>Motivation : {motivation}</p>
              <p>Share : {share}</p>
              <p>Category : {category}</p>
              <p>Year : {year}</p>   

        </div>
        </div>
    );
}


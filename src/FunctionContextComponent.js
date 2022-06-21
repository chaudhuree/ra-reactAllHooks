import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
function FunctionContextComponent() {
    const {dark,toggleTheme} = useContext(ThemeContext)
    // console.log(darkTheme);
    const theme={
      backgroundColor: dark?'#333':'#ccc',
      color: dark?'#ccc':'#333',
      padding:'2rem',
      margin: '2rem',
      fontWeight: 'bold',
    }
    console.log(dark);
    return (
        <div style={theme}>
            function Context 
            <br></br>
            <br></br>
            <button onClick={toggleTheme}>change theme</button>

        </div>
    )
}

export default FunctionContextComponent





















// import React, { useState, useContext } from 'react';
// import { data } from './data';

// const PersonContext = React.createContext();

// const ContextAPI = () => {
//   const [people, setPeople] = useState(data);
//   const removePerson = (id) => {
//     setPeople((people) => {
//       return people.filter((person) => person.id !== id);
//     });
//   };
//   return (
//     <PersonContext.Provider value={{ removePerson, people }}>
//       <h3>Context API / useContext</h3>
//       <List />
//     </PersonContext.Provider>
//   );
// };

// const List = () => {
//   const mainData = useContext(PersonContext);
//   console.log(mainData);
//   return (
//     <>
//       {mainData.people.map((person) => {
//         return <SinglePerson key={person.id} {...person} />;
//       })}
//     </>
//   );
// };

// const SinglePerson = ({ id, name }) => {
//   const { removePerson } = useContext(PersonContext);

//   return (
//     <div className='item'>
//       <h4>{name}</h4>
//       <button onClick={() => removePerson(id)}>remove</button>
//     </div>
//   );
// };

// export default ContextAPI;


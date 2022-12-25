import React, { useState , useEffect} from "react"

const {Provider, Consumer} = React.createContext()

function UserContextProvider(props){
    const [theme , settheme ] = useState('light')

    useEffect(() => {
        const root = document.getElementById("root");
        root.style.backgroundColor = theme === 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)'
      },[theme])
    function changeHnadle(){
        settheme(prev => prev === 'light' ? 'dark' : 'light')
    }
        return (
            <Provider value={{theme, changeTheme: changeHnadle}}>
                {props.children}
            </Provider>
        )
}

export {UserContextProvider, Consumer as UserContextConsumer}
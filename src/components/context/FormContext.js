import React, {useState} from "react";

const FormContext = React.createContext();


function FormProvider({ defaultValue = [], children }){

    const [formValue, setFormValue] = useState([])
    return (<FormContext.Provider value={{formValue, setFormValue}}>
        {children}
    </FormContext.Provider>)
}

export {FormContext, FormProvider}


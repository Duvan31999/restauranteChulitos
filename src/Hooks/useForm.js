import { useState } from 'react';

const useForm = (initialData, onValidate) => {

    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    //Para el cambio de estado de los inputs.
    const handleChange = (e) => {
      const {name, value} = e.target
      setForm({ ...form, [name]: value})
     };

     //Para el envío del formulario.
    const handleSubmit = (e) => { 
      e.preventDefault();
      const err = onValidate(form);
      setErrors(err);
      //Lo que hace Object.keys es guardar los objetos en este caso los errores que se tengan al validar.
      if(Object.keys(err).length === 0){
        setLoading(true);
      }
    };

  return {form, errors, loading, handleChange, handleSubmit}
}

export default useForm;
import { useState } from'react'; 


const useForm = (initialData) => {
    const [form, setForm] = useState (initialData);
    const [loading, setLoading] = useState (false);

const handleChange = (e) => {

    const {name, value}= e.target 
    setForm({...form, [name]: value })


}

const handleSubmit = (e) => {

    e.preventDefault()


}

return { form, loading, handleChange, handleSubmit }

}

export default useForm;

import { useState } from'react'; 

const useForm = () => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);

const handleChange = (e) => {

    const {name, value}= e.target 
    setForm({...form, [name]: value })


}

const handleSubmit = () => {}

return { form, loading, handleChange, handleSubmit }

}

export default useForm;

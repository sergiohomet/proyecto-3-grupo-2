import { useState } from'react'; 

const useForm = () => {
    const [form, setForm] = useState(initialData);
    const [loading, setLoading] = useState(false);

const handleChange = () => {}

const handleSubmit = () => {}

return { form, loading, handleChange, handleSubmit }

}

export default useForm;

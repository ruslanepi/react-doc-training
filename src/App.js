import React, {useState} from "react";

function App() {

    const [form,
        updateForm] = useState({person: '', city: '', age: ''})

    const handler = (e) => {
        updateForm(prevState => ({
            ...form,
            [e.target.name]: e.target.value
        }))
    }

    

    return (
        <div>
            <div>
                city: {form.city}
            </div>
            <div>
                person: {form.person}
            </div>
            <div>
                age: {form.age}
            </div>
            <br/>

            <form>
                <input name="city" onChange={handler} value={form.city} placeholder="Город"/>
                <input name="person" onChange={handler} value={form.person} placeholder="Имя"/>
                <input name="age" onChange={handler} value={form.age} placeholder="Возраст"/>
            </form>

        </div>
    );
}

export default App;

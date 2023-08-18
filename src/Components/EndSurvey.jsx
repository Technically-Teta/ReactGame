import {useState} from "react";

export default  function Survey () {
const [selectedOption, setSelectedOption] = useState("option1");

const handleDropdownChange = (event)=>{
    setSelectedOption(event.target.value);
};

return(
    <div>
        <p>Please take our short survey and let us know your experience after playing our game</p>
        <label>
            Select an option:
            <select value={selectedOption} onChange={handleDropdownChange}>
            <option value = "The game was enjoyable"> Option 1</option>  
            <option value = "The game was ok"> Option 2</option>
            <option value = "The game was bad">Option 2</option>
           </select>
        </label>
    </div>


);

};




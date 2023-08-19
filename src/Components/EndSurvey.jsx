import {useState} from "react";

export default  function EndSurvey () {
const [selectedOption, setSelectedOption] = useState("option1");

const handleDropdownChange = (event)=>{
    setSelectedOption(event.target.value);
};

return(
    <div>
        <p>Please take our short survey and let us know your feedback!</p>
        <label>
            Select an option:
            <select value={selectedOption} onChange={handleDropdownChange}>
            <option value = "Option 1"> The game was enjoyable</option>  
            <option value = "Option 2">The game was just ok</option>
            <option value = "Option 3">The game was bad</option>
           </select>
        </label>
    </div>


);

};




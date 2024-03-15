export const Task = (props) =>{
    const {name, onComplete} = props;
    const handleSelect = ()=>{onComplete(name);};  //this will
    return(
        <li>
            <article>
               <label>
                {name}
                <input type="checkbox" id="cbox2" value="second_checkbox" onClick={handleSelect} />
                </label>
            </article>
        </li>
    );
};
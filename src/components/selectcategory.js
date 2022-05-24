function SelectCategory({setCategory}) {

    const onChange = (event)=> {
        setCategory(event.target.value)
    }
  return (
    <div>
    <h1>Welcome To The Random Excuse Generator</h1>
    <p>Are you sick of having to force yourself to miserable events? Why not use our custom built excuse App.</p>
    <form>
      <label htmlFor="type"><strong>Excuse Generator</strong></label>
      <select id="type" excuse="type"  onChange={onChange} >
        <option value="">Please select...</option>
        <option value="family">Family</option>
        <option value="office">Work</option>
        <option value="children">Children</option>
        <option value="college">School</option>
        <option value="party">Party</option>
      </select>
    </form>
    </div>
  );
}

export default SelectCategory
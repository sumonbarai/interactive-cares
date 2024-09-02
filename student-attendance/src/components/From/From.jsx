function From({ name, onChangeHandler, onSave, edit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={onChangeHandler} required />
      <button type="submit">{!edit ? "add" : "edit"}</button>
    </form>
  );
}

export default From;

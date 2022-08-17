

function AddSubmit({className, handleSubmit}) {
    return (
        
        <button
         className={className}
         onClick = {handleSubmit}>
             Chọn Mua
        </button>
      
    );
}

export default AddSubmit;
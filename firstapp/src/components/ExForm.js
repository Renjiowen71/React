import{useState, useEffect} from 'react';

function ExForm(){
    const [formData, setFormData] = useState({
        name: "",
        score: 5,
        comment: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.score<5 && formData.comment.length<10){
            alert("Please leave a comment explaining your poor experience.")
        } else {
            alert("Thank you "+formData.name+", you rated "+formData.score+"!!");
            setFormData({
                name: "",
                score: 5,
                comment: ""
            });
        }
    }

    useEffect(()=>{
        document.title = "Hi, "+formData.name+", you rated "+formData.score;
    },[formData.name])
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div className="fieldName">
                    <label htmlFor='name'>Name: </label>
                    <input 
                        id="name"
                        type="text" 
                        placeholder="Name" 
                        name="name" 
                        value={formData.name} 
                        onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                </div>
                <div className="fieldFeedback">
                    <label htmlFor='score'>Score: {formData.score} </label>
                    <input 
                        name="score"
                        type='range'
                        min={0}
                        max={10}
                        value={formData.score}
                        onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                </div>
                <div className="fieldComment">
                    <label htmlFor='comment'>Comment: </label>
                    <textarea 
                        id="comment"
                        name="comment" 
                        value={formData.comment} 
                        onChange={e => setFormData({...formData, [e.target.name]: e.target.value})}
                    />
                </div>
                <button disabled={!formData.name} type="submit">Submit</button>
            </fieldset>
        </form>
    )
}
export default ExForm;
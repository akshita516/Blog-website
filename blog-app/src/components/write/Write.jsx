import './Write.css'

export default function Write(){
    return(
        <div className="write">
            <img
                className="writeImage"
                src="https://media.istockphoto.com/id/515228946/photo/flower.jpg?s=612x612&w=0&k=20&c=oUkBRs-zVtg0jXLEAvZA848SvM6GVQ51WZ3Nlwxge_Y="
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
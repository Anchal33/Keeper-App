import React,{useState} from "react";
import { Fab, Zoom } from "@material-ui/core";


function CreateArea(props) {
   const [zoom,setZoom]=useState(false);
    const [note,UpdateNote]=useState({title:"",content:""});
    function handleChange(event){
        const {name,value}=event.target;
        UpdateNote(function(prev){
          return ({...prev,
                    [name]:value
                  })
        })
    }
    function expand(){
      setZoom(true);
    }
  return (
    <div>
      <form class="create-note">
       {zoom?<input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>:null}
        <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..." rows={zoom?"3":"1"} value={note.content}/>
       <Zoom in={zoom}>
       <Fab onClick={(event)=>{
          event.preventDefault();
          props.addItem(note);
          UpdateNote({title:"",content:""});
         }}>
         +
         </Fab>
       </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

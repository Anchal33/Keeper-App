import React from "react";
import Header from "./header";
import Note from "./note";
import CreateArea from "./CreateArea"
import Footer from "./footer";


function App(){
    const [noteArray,updateNoteArray]=React.useState([]);
function addNote(item){
    updateNoteArray((prev)=>{return [...prev,item]})
}

function deleteNotes(id){
 updateNoteArray((prev)=>{
    return prev.filter(function(note,index){
        return index!==id;
 })
 })
}
    return(<div>
        <Header></Header>
         <CreateArea addItem={addNote}/>
        { 
            noteArray.map(function(note,index){
             return(<Note deleteNote={deleteNotes} key={index} id={index} title={note.title} content={note.content}></Note>);
            })
         }
        <Footer></Footer>
    </div>);
}

export default App;
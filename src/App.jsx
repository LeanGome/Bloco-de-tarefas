import React, { useState } from 'react';

function App() {
const [task, setTask] = useState("")
const [tempo, setTempo] = useState(0)
const [listaTarefas, setListaTarefas] = useState([])

//adicionar uma nota
function adcionarNota(){
  const novaTarefa ={
    task,
    tempo
  }

  setListaTarefas([...listaTarefas, novaTarefa])

}

//apagar uma nota
// pra ouvir os inputs
function handleInputs(evento){
  if(evento.target.name == "task"){
    console.log(evento.target.value)
    setTask(evento.target.value)
  }else{
    console.log(evento.target.value)
    setTempo(evento.target.value)
  }
}

  return (
    <>
      <h1> poe a senha do cartao </h1>

      <label>nota</label>
    <input name='task' onChange={handleInputs} type="text" />
    <label>tempo</label>
    <input name="tempo" onChange={handleInputs} type="number" />
    <button>Adicionar nota</button>

    { listaTarefas.map((value, index)=>{
      return(
        
      )
    }) }

    </>
  );
}

export default App;

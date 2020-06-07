import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const apiCall = 'https://rcbnv6ut12.execute-api.us-east-1.amazonaws.com/test/transactions';
    
    /*useEffect( () => {
      callTriviaApi();
    }, [] );*/

    const callTriviaApi = async () => {
      const response = await fetch(apiCall);
      const data = await response.text();
      console.log(data);
      
    };

    const postMultipleChoice = async () => {
      
      let prompt = document.getElementById('prompt1').value;
      let gameId = document.getElementById('gameId').value;
      let answer1 = document.getElementById('answer1').value;
      let answer2 = document.getElementById('answer2').value;
      let answer3 = document.getElementById('answer3').value;
      let answer4 = document.getElementById('answer4').value;
      let answer = document.getElementById('answer').value;
      
      fetch( apiCall, {
        method: 'post',
        headers: {
        'Accept': 'application/json, text/plain, */*',
        //'Content-Type': 'application/json'
      },


      body: JSON.stringify(
      {
        gameID: gameId,
        answer1: answer1,
        answer2: answer2,
        answer3: answer3,
        answer4: answer4,    
        answer: answer,
        prompt: prompt,
        type: 'multipleChoice'    
     })
      }).then(res=>res.json())
      .then(res => console.log(res));
    }

    const onClickEvent = () => {
      //callTriviaApi()

      //debugger;
      postMultipleChoice()
    }

    return(
      <div className="App">
        <h1>Trivia Games</h1>
        
        <h1>Add Multiple Choice Question</h1>
        <select name="cars" id="cars">
          <option value="90's Trvia">90's Trvia</option>
          <option value="Birds">Birdd</option>
          <option value="SAT">SAT</option>
          <option value="Cars">Cars</option>
        </select>
        <div>
        <label >Game: </label>
        <input type="text" id="gameId"></input><br></br>
        <label >Prompt: </label>
        <input type="text" id="prompt"></input><br></br>
        <label >Answer 1: </label>
        <input type="text" id="answer1"></input><br></br>
        <label >Answer 2: </label>
        <input type="text" id="answer2"></input><br></br>
        <label >Answer 3: </label>
        <input type="text" id="answer3"></input><br></br>
        <label >Answer 4: </label>
        <input type="text" id="answer4"></input><br></br>
        <label >Answer: </label>
        <input type="text" id="answer"></input><br></br>        
        <button onClick = {onClickEvent} className="search-button" type="submit">Submit</button>
        </div>

        <h1>Add True False Question</h1>

        <select name="cars" id="cars">
          <option value="90's Trvia">90's Trvia</option>
          <option value="Birds">Birdd</option>
          <option value="SAT">SAT</option>
          <option value="Cars">Cars</option>
        </select>
        <div>
        <label >Prompt: </label>
        <input type="text" id="prompt1"></input>
        <select name="trueFalse" id="trueFalse">
          <option value="True">True</option>
          <option value="False">False</option>
        </select>
        <button onClick = {onClickEvent} className="search-button">Submit</button>
        </div>
        
      </div>
    );
}

export default App;

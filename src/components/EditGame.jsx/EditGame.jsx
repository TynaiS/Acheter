import React, { useEffect } from 'react';
import { useState } from 'react';
import { useGames} from '../../contexts/GameContext';

const EditGame = () => {
    const {modal,gameDetails,setEditGameInfo,getGameDetails,id,saveEditedGame} = useGames()

    let [editedGame,setEditedGame] = useState({
        name: gameDetails.name,
        description:gameDetails.description,
        creator:gameDetails.creator,
        image:gameDetails.image,
        price:gameDetails.price,
        genre:gameDetails.genre,
        creator:gameDetails.creator,
        isDiscount: gameDetails.isDiscount 
    })

    return (   
        <div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,name:e.target.value});gameDetails.name = e.target.value}} type="text" name="" id="" placeholder='Name' value={gameDetails.name}/></div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,creator:e.target.value});gameDetails.creator = e.target.value}} type="text" name="" id="" placeholder='Creator' value={gameDetails.creator}/></div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,description:e.target.value});gameDetails.description = e.target.value}} type="text" name="" id="" placeholder='Description' value={gameDetails.description}/></div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,image:e.target.value});gameDetails.image = e.target.value}} type="text" name="" id="" placeholder='Phono' value={gameDetails.image}/></div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,price:e.target.value});gameDetails.price = e.target.value}} type="number" name="" id="" placeholder='Price' value={gameDetails.price}/></div>
            <div><input onChange={(e)=> {setEditedGame({...editedGame,discount:e.target.value});gameDetails.discount = e.target.value}} type="number" name="" id="" placeholder='Discount' value={gameDetails.discount}/></div>
            <div>Is discount?</div>
            <div><input onChange={(e) => {setEditedGame({...editedGame,isDiscount: true})}} name='isdiscount' type="radio"/><span>Yes</span></div>
            <div><input onChange={(e) => {setEditedGame({...editedGame,isDiscount: false})}} name='isdiscount' type="radio"/><span>No</span></div>
            <div>
            Choose game genre:
            <div><input type="radio" name="genreRadio" id="" onChange={() => {setEditedGame({...editedGame,genre:'rpg'})}}/>RPG</div>
            <div><input type="radio" name="genreRadio" id="" onChange={() => {setEditedGame({...editedGame,genre:'sandbox'})}}/>Sandbox</div>
            <div><input type="radio" name="genreRadio" id="" onChange={() => {setEditedGame({...editedGame,genre:'shooter'})}}/>Shooter</div>
            <div><input type="radio" name="genreRadio" id="" onChange={() => {setEditedGame({...editedGame,genre:'fighting'})}}/>Fighting</div>
            </div>
            <button type="button" onClick={() => saveEditedGame(gameDetails.id,editedGame)}>Save</button>
        </div>
    );
};

export default EditGame;
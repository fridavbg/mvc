<?php

namespace App\Classes\Card;

class GameManager
{
    /**
     * Rules of the Game
     * Track num of players
     */
    public function __construct()
    {
        $this->cards = new Deck();
        $this->players = array();
    }

    public function startGame($numOfPlayers, $numOfCards)
    {
        // iterate numOfplayers
        for ($i = 0; $i < $numOfPlayers; $i++) {
                // add players to array
                array_push($this->players, $i);
                // new player 

                // set cardHand - Deck.getCards($numOfCards)
                
                // size players x cardsInCardHand < 52
        // shuffle deck if needed 
        }
    }
}

<?php

namespace App\Card;

class Deck
{
    /**
     * @var array representing full deck of cards
     */
    protected $cards;
    private $leftOverCards;
    /**
     * Create a deck of 52 cards
     */
    public function __construct()
    {
        $this->cards = array();
        $suits = array('H', 'C', 'D', 'S');
        $values = array(
            'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'
        );
        $this->leftOverCards = [];

        /** 
         * Loop through to create Deck of cards
         */
        foreach ($suits as $suit) {
            foreach ($values as $value) {
                $card = new Card($suit, $value);
                array_push($this->cards, $card);
            }
        }
    }

    /**
     * Show Deck of cards
     * @return array
     */
    public function getDeck()
    {
        return $this->cards;
    }

    /**
     * Deck Var Setter
     * @param mixed $deck
     */
    public function setDeck($cards)
    {
        $this->cards = $cards;
    }

    /**
     * leftOverDeck Var Setter
     * @param array $leftOverCards
     */
    public function setLeftOverDeck($leftOverCards)
    {
        $this->leftOverCards = $leftOverCards;
    }

    /**
     * leftOverDeck Var Getter
     * @return array $leftOverCards
     */
    public function getLeftOverDeck()
    {
        return $this->leftOverCards;
    }



    /**
     * This function remove array of cards that the player took
     * @param $leftOverDeck array
     * @param $cardToBeRemoved int
     * @return array
     */
    public function updateLeftOverDeck($leftOverCards,$cardToBeRemoved){

        $updatedDeck = array_diff($leftOverCards,$cardToBeRemoved);
        $this->leftOverCards = $updatedDeck;
        return $this->leftOverCards;
    }

    /**
     * Shuffle deck of cards
     * @return bool|array
     */
    public function shuffleDeck()
    {
        $deckCards = $this->getDeck();
        if (shuffle($deckCards)) {
            $this->setDeck($deckCards);
            return $deckCards;
        } else {
            return false;
        }
    }
}

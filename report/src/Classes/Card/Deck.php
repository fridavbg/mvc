<?php

namespace App\Card;

class Deck
{
    /**
     * @var array representing full deck of cards
     * @var array representing deck excluding player cards picked
     */
    protected $cards; // DECK
    private $leftOverCards; // CARDS LEFT IN DECK
    protected $cardHand; // CARDS DRAWN

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
     * Show cardHand
     * @return array
     */
    public function getCardHand()
    {
        return $this->cardHand;
    }

    /**
     * cardHand Var Setter
     * @param array $deck
     */
    public function setCardHand($cards)
    {
        $this->cardHand = $cards;
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

    /**
     * Grab N numbers of random cards from deck & update cardHand & leftOverDeck
     * @param $leftOverDeck array
     * @param $numberOfCards int
     */

    public function getRandomCards($leftOverDeck, $numberOfCards)
    {
        $drawnCards = [];
        shuffle($leftOverDeck);
        for ($i = 0; $i < $numberOfCards; $i++) {
            array_push($drawnCards, array_shift($leftOverDeck));
        }
        $this->setCardHand($drawnCards);
        $this->setLeftOverDeck($leftOverDeck);
    }
}
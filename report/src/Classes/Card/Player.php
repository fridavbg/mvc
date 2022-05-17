<?php

namespace App\Classes\Card;

class Player
{

    private $cardHand;

    public function __construct()
    {
        $this->cardHand = array();
    }

    /**
     * Show cardHand
     * @return arrays
     */
    public function getCardHand()
    {
        return $this->cardHand;
    }

    /**
     * cardHand Var Setter
     * @param array $cards
     */
    public function setCardHand($cards)
    {
        $this->cardHand = $cards;
    }
}

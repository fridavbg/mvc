<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CardController extends AbstractController
{
    /**
     * @Route("/card", name="card-home")
     */
    public function home(): Response
    {
        $numOfCards = 1;
        $data = [
            'title' => 'Deck-Home',
            'link_to_draw' => $this->generateUrl('card-draw', ['numOfCards' => $numOfCards,]),
        ];
        return $this->render('card/home.html.twig', $data);
    }

    /**
     * @Route("/card/deck", name="card-deck")
     */
    public function deck(): Response
    {
        $deck = new \App\Classes\Card\Deck();
        $data = [
            'title' => 'Deck',
            'deck' => $deck->getDeck()
        ];
        return $this->render('card/deck.html.twig', $data);
    }

    /**
     * @Route("/card/deck/shuffle", name="card-shuffle")
     */
    public function shuffle(): Response
    {
        $deck = new \App\Classes\Card\Deck();

        $data = [
            'title' => 'Shuffled Deck',
            'deck' => $deck->shuffleDeck(),
        ];
        return $this->render('card/deck.html.twig', $data);
    }

    /**
     * @Route("/card/deck/draw", name="card-draw")
     * Pull one card and display leftOverDeck length
     */

    public function draw(): Response
    {
        $deck = new \App\Classes\Card\Deck();
        $currentDeck = $deck->getDeck();
        $numOfCards = 1;
        $deck->getRandomCards($currentDeck, $numOfCards);
        $playerHand = $deck->getCardHand();
        $leftOverDeck = $deck->getLeftOverDeck();

        $data = [
            'title' => 'Draw a card',
            'deck' => $currentDeck,
            'playerHand' => $playerHand,
            'leftOverDeck' => $leftOverDeck,
        ];
        return $this->render('card/draw.html.twig', $data);
    }

    // Page card/deck/draw/:number that draws :number from deck and displays
    // - cardHand
    // - leftOverDeck + length

    // Save deck in session when draw or draw/:number
    // leftOverDeck should decrease until deck is empty. Rest with shuffle.

    // Create card/deck/deal/:players/:cards that deals :cards
    // from :players and displays CardHand. Display leftOverDeck length.
    // Tips player and cardHand class

    // create card/deck2 which is a deck with two jokers.
    // Display deck the same as card/deck. Tips try inheritance.
    // Try to recreate Deck ex DeckWith2Jokers extends Deck.
}

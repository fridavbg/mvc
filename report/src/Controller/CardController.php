<?php

namespace App\Controller;

use App\Classes\Card\Deck;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class CardController extends AbstractController
{
    /**
     * @Route("/card", name="card-home")
     */
    public function home(SessionInterface $session): Response
    {
        $session->start();
        $session->clear();

        if (!$session->get("leftOverDeck")) 
        { 
            $session->set("leftOverDeck", new Deck());
            $session->set("cardHand", []);
        };

        $data = [
            'title' => 'Deck-Home'
        ];
        return $this->render('card/home.html.twig', $data);
    }

    /**
     * @Route("/card/deck", name="card-deck")
     */
    public function deck(): Response
    {
        $deck = new Deck();
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
        $deck = new Deck();

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

    public function draw(
        Request $request,
        SessionInterface $session
    ): Response {

        $shuffle  = $request->request->get('shuffle');

        $this->addFlash(
            'warning', 'No cards left in the deck'
        );
        
        if ($shuffle) 
        { 
            $session->get("leftOverDeck")->buildDeck();
            $session->set("cardHand", []);
        };

        $data = [
            'title' => 'Draw a card',
            'cardHand' => $session->get('leftOverDeck')->getCards(1),
            'leftOverDeck' => $session->get('leftOverDeck')->getDeck(),
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

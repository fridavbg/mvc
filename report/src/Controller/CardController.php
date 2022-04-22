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

        if (!$session->get("leftOverDeck")) {
            $session->set("leftOverDeck", new Deck());
            $session->set("cardHand", [new Deck()]);
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
     * Shuffle leftOverDeck []
     * If deck is empty, reset - new deck []
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
     * Pull one card and display leftOverDeck length [x]
     * When deck is empty, reset with /shuffle []
     *  Save deck in session when draw or draw/:number is called update cardHand & leftOverDeck []
     */

    public function draw(
        Request $request,
        SessionInterface $session
    ): Response {

        // if leftOverDeck is empty 
        $this->addFlash("info", "No cards in deck");

        $data = [
            'title' => 'Draw a card',
            'cardHand' => $session->get('leftOverDeck')->getCards(1),
            'leftOverDeck' => $session->get('leftOverDeck')->getDeck(),
        ];
        return $this->render('card/draw.html.twig', $data);
    }

    /**
     * @Route("/card/deck/draw/:number", name="card-multiple-draw")
     * Take user input of cards to be drawn [] 
     * update cardHand & leftOverDeck []
     * When deck is empty, reset with /shuffle []
     * Save deck in session when draw or draw/:number is called update cardHand & leftOverDeck []
     */

    public function drawMultiple(
        Request $request,
        SessionInterface $session
    ): Response {
        $data = [
            'title' => 'WIP',
        ];
        return $this->render('card/draw.html.twig', $data);
    }


    /**
     * @Route("/card/deck/deal/:players/:cards ", name="card-players")
     * Pull N card and give to N player []
     * Display each player cardHand []
     * Display length of leftOverDeck []
     * When deck is empty, reset with /shuffle []
     * Tips player and cardHand class
     */

    public function deal(
        Request $request,
        SessionInterface $session
    ): Response {
        $data = [
            'title' => 'WIP',
        ];
        return $this->render('card/draw.html.twig', $data);
    }

    /**
     * @Route("/card/deck2/", name="card-deck2")
     * Display deck the same as card/deck. Tips try inheritance.
     *  Try to recreate Deck ex DeckWith2Jokers extends Deck.
     */
    public function deck2(
        Request $request,
        SessionInterface $session
    ): Response {
        $data = [
            'title' => 'WIP',
        ];
        return $this->render('card/draw.html.twig', $data);
    }
}

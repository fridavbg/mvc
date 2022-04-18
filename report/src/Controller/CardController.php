<?php

namespace App\Controller;

use \App\Classes\Card\Deck;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class CardController extends AbstractController
{
    /**
     * @Route("/card", name="card-home")
     */
    public function home(SessionInterface $session): Response
    {
        $sessionCardHand = $session->get("cardHand") ?? 0;
        $data = [
            'title' => 'Deck-Home',
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
        $deck = new Deck();
        $currentDeck = $deck->getDeck();

        $shuffle  = $request->request->get('shuffle');
        $cardsNumToBeDrawn = $request->request->get('numOfCards');
        $draw = $request->request->get('draw');
        $cardHand = $deck->getCardHand();
        $leftOverDeck = $deck->getLeftOverDeck();

        if ($shuffle) {
            $deck->getRandomCards($currentDeck, $cardsNumToBeDrawn);
            $cardHand = $deck->getCardHand();
            $leftOverDeck = $deck->getLeftOverDeck();
            $session->set("cardHand", $cardHand);
            $session->set('leftOverDeck', $leftOverDeck);
        } elseif ($draw) {
            $this->addFlash($cardsNumToBeDrawn, "Numbers of cards picked $cardsNumToBeDrawn");
        }

        $data = [
            'title' => 'Draw a card',
            'deck' => $currentDeck,
            'cardHand' => $cardHand,
            'leftOverDeck' => $leftOverDeck,
            'sessionCardHand' => $session->get('cardHand'),
            'sessionLeftOverDeck' => $session->get('leftOverDeck'),
            'cardsNumToBeDrawn' => $cardsNumToBeDrawn
        ];
        return $this->render('card/draw.html.twig', $data);
    }

    /**
     * @Route(
     *      "/card/draw/",
     *      name="card-draw-process",
     *      methods={"POST"}
     * )
     * Route to handle form inputs
     */

    public function cardProcess(Request $request,  SessionInterface $session): Response
    {
        $numOfCardsPicked = $request->request->get('numOfCards');
        // $deck = new Deck();
        // $deck->getRandomCards($currentDeck, $numOfCards);
        // $currentDeck = $deck->getDeck();
        // $newCardHand = $session->get('cardHand') ?? 0;
        // $newLeftOverDeck = $session->get('leftOverDeck') ?? 0;

        $this->addFlash($numOfCardsPicked, "Numbers of cards picked");

        return $this->redirectToRoute('card-draw');
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

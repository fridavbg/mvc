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
        $deck = new \App\Card\Deck();
        $data = [
            'title' => 'Deck',
        ];
        return $this->render('card/home.html.twig', $data);
    }

    /**
     * @Route("/card/deck", name="card-deck")
     */
    public function deck(): Response
    {
        $deck = new \App\Card\Deck();
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
        $deck = new \App\Card\Deck();
        $data = [
            'title' => 'Shuffled Deck',
            'deck' => $deck->shuffleDeck(),
        ];
        return $this->render('card/deck.html.twig', $data);
    }

    /**
     * @Route("/card/deck/draw", name="card-draw")
     */

    public function draw(): Response
    {
        $deck = new \App\Card\Deck();
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

    /**
     * @Route("/card/deck/draw{numOfCards}", name="multiple-card-draw")
     */

    // public function drawMultiple(int $numOfCards): Response
    // {
    //     $deck = new \App\Card\Deck();
    //     $currentDeck = $deck->getDeck();
    //     $deck->getRandomCards($currentDeck, $numOfCards);
    //     $playerHand = $deck->getCardHand();
    //     $leftOverDeck = $deck->getLeftOverDeck();

    //     $data = [
    //         'title' => 'Draw Multiple cards',
    //         'deck' => $currentDeck,
    //         'playerHand' => $playerHand,
    //         'leftOverDeck' => $leftOverDeck,
    //         'numOfCards' => $numOfCards,
    //     ];

    //     return $this->render('card/draw.html.twig', $data);
    // }
}
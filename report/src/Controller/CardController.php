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
        $currentDeck= $deck->getDeck();
        $card = $deck->getRandomCards($currentDeck, 1);

        $data = [
            'title' => 'Draw a Card',
            'deck' => $currentDeck,
            'card' => $card,
            // 'leftOverDeck' => $deck->updateDeckCards($currentDeck, $card),
        ];
        return $this->render('card/draw.html.twig', $data);
    }
}

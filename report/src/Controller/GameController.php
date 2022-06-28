<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;


class GameController extends AbstractController
{
    /**
     * @Route("/game", name="game-home")
     */
    public function home(SessionInterface $session): Response
    {
        $session->start();
        $session->clear();

        $data = [
            'title' => 'Game-Home'
        ];
        return $this->render('game/game.html.twig', $data);
    }
}
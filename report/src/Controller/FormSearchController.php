<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FormSearchController extends AbstractController
{
    /**
     * @Route("/form", name="form")
     */
    public function form(): Response
    {
        return $this->render('/form/search.html.twig');
    }

}

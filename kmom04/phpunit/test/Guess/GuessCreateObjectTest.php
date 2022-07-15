<?php

namespace Mos\Guess;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class Guess.
 */
class GuessCreateObjectTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreateObjectNoArguments()
    {
        $guess = new Guess();
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 6;
        $this->assertEquals($exp, $res);
    }

    /**
     * Construct object and verify that the object has the expected
     * properties, use only first argument.
     */
    public function testCreateObjectFirstArgument()
    {
        $guess = new Guess(42);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 6;
        $this->assertEquals($exp, $res);

        $res = $guess->number();
        $exp = 42;
        $this->assertEquals($exp, $res);
    }

    /**
     * Construct object and verify that the object has the expected
     * properties, use both arguments.
     */
    public function testCreateObjectBothArguments()
    {
        $guess = new Guess(42, 7);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 7;
        $this->assertEquals($exp, $res);

        $res = $guess->number();
        $exp = 42;
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to make a guess when user is out of tries
     */

    public function testMakeGuessNoMoreTries()
    {
        $guess = new Guess(42, 0);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 0;
        $this->assertEquals($exp, $res);

        $res = $guess->makeGuess(50);
        $exp = 'no';
        $this->assertStringContainsString($exp, $res);
    }

    /**
     * Test to make a guess that is too low
     */
    public function testMakeGuessToLow()
    {
        $guess = new Guess(42, 1);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 1;
        $this->assertEquals($exp, $res);

        $res = $guess->makeGuess(1);
        $exp = "low";
        $this->assertStringContainsString($exp, $res);
    }

    /**
     * Test to make a guess that is too high
     */
    public function testMakeGuessToHigh()
    {
        $guess = new Guess(42, 1);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->tries();
        $exp = 1;
        $this->assertEquals($exp, $res);

        $res = $guess->makeGuess(52);
        $exp = "high";
        $this->assertStringContainsString($exp, $res);
    }

    /**
     * Test to test for exception if guess is out of bounds
     */

    public function testMakeGuessNumberOutOfBounds()
    {
        $guess = new Guess(42, 3);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $this->expectException(GuessException::class);
        $res = $guess->makeGuess(191);
    }

    /**
     * Test to test for 
     */

    public function testMakeCorrectGuess()
    {
        $guess = new Guess(42, 3);
        $this->assertInstanceOf("\Mos\Guess\Guess", $guess);

        $res = $guess->makeGuess(42);
        $exp = "correct";
        $this->assertStringContainsString($exp, $res);
    }
}

import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gamepad2, Trophy, Star, Play, RotateCcw } from "lucide-react";

const Games = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-center space-x-2 text-primary">
              <Gamepad2 className="h-6 w-6" />
              <Badge variant="secondary">Beta Feature</Badge>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Gaming Zone
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take a break from meetings and enjoy these mini-games while our AI handles your schedule!
            </p>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MemoryGame />
            <NumberGuessGame />
            <ReactionTimeGame />
          </div>

          {/* Leaderboard */}
          <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-warning" />
                <span>Leaderboard</span>
              </CardTitle>
              <CardDescription>Top players this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Alex Chen", score: 2450, game: "Memory Game" },
                  { name: "Sarah Kim", score: 1890, game: "Number Guess" },
                  { name: "Mike Johnson", score: 1650, game: "Reaction Time" },
                ].map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gradient-secondary">
                    <div className="flex items-center space-x-3">
                      <Badge variant={index === 0 ? "default" : "secondary"}>
                        #{index + 1}
                      </Badge>
                      <div>
                        <p className="font-medium">{player.name}</p>
                        <p className="text-sm text-muted-foreground">{player.game}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{player.score}</p>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 text-warning fill-current" />
                        <span className="text-xs text-muted-foreground">pts</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

// Memory Game Component
const MemoryGame = () => {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);

  function generateCards() {
    const symbols = ['🎯', '🎨', '🎪', '🎭', '🎵', '🎸'];
    const cards = [...symbols, ...symbols].map((symbol, index) => ({
      id: index,
      symbol,
      isFlipped: false,
    }));
    return cards.sort(() => Math.random() - 0.5);
  }

  const flipCard = (cardId: number) => {
    if (flippedCards.length === 2 || flippedCards.includes(cardId) || matchedCards.includes(cardId)) {
      return;
    }

    const newFlippedCards = [...flippedCards, cardId];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      const [firstCard, secondCard] = newFlippedCards;
      if (cards[firstCard].symbol === cards[secondCard].symbol) {
        setMatchedCards([...matchedCards, firstCard, secondCard]);
        setScore(score + 10);
        setFlippedCards([]);
      } else {
        setTimeout(() => setFlippedCards([]), 1000);
      }
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setFlippedCards([]);
    setMatchedCards([]);
    setScore(0);
    setMoves(0);
  };

  return (
    <Card className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Memory Game</span>
          <Badge variant="secondary">{score} pts</Badge>
        </CardTitle>
        <CardDescription>Match the pairs to win!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-4 gap-2">
          {cards.map((card) => (
            <Button
              key={card.id}
              variant="premium"
              size="icon"
              className="h-12 w-12 text-lg"
              onClick={() => flipCard(card.id)}
              disabled={!flippedCards.includes(card.id) && !matchedCards.includes(card.id)}
            >
              {flippedCards.includes(card.id) || matchedCards.includes(card.id) ? card.symbol : '?'}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Moves: {moves}</span>
          <Button variant="ghost" size="sm" onClick={resetGame}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Number Guess Game Component
const NumberGuessGame = () => {
  const [targetNumber, setTargetNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const submitGuess = () => {
    const guessNum = parseInt(guess);
    if (isNaN(guessNum)) return;

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);

    if (guessNum === targetNumber) {
      setFeedback('🎉 Correct!');
      setScore(score + Math.max(10 - newAttempts, 1));
      setGameOver(true);
    } else if (guessNum < targetNumber) {
      setFeedback('📈 Too low!');
    } else {
      setFeedback('📉 Too high!');
    }

    setGuess('');
  };

  const resetGame = () => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <Card className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Number Guess</span>
          <Badge variant="secondary">{score} pts</Badge>
        </CardTitle>
        <CardDescription>Guess the number between 1-100!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <input
            type="number"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="w-full p-3 rounded-lg bg-secondary text-center text-xl font-bold"
            placeholder="Enter your guess"
            disabled={gameOver}
            min="1"
            max="100"
          />
          {feedback && (
            <p className="text-lg font-medium text-primary">{feedback}</p>
          )}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Attempts: {attempts}</span>
          {gameOver ? (
            <Button variant="success" size="sm" onClick={resetGame}>
              <Play className="h-4 w-4 mr-2" />
              New Game
            </Button>
          ) : (
            <Button variant="hero" size="sm" onClick={submitGuess}>
              Guess
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

// Reaction Time Game Component
const ReactionTimeGame = () => {
  const [gameState, setGameState] = useState<'waiting' | 'ready' | 'click' | 'result'>('waiting');
  const [reactionTime, setReactionTime] = useState(0);
  const [bestTime, setBestTime] = useState(0);
  const [startTime, setStartTime] = useState(0);

  const startGame = () => {
    setGameState('ready');
    const delay = Math.random() * 4000 + 1000; // 1-5 seconds
    setTimeout(() => {
      setGameState('click');
      setStartTime(Date.now());
    }, delay);
  };

  const handleClick = () => {
    if (gameState === 'click') {
      const endTime = Date.now();
      const reaction = endTime - startTime;
      setReactionTime(reaction);
      if (bestTime === 0 || reaction < bestTime) {
        setBestTime(reaction);
      }
      setGameState('result');
    } else if (gameState === 'ready') {
      setGameState('waiting');
      setReactionTime(-1); // Too early
    }
  };

  const resetGame = () => {
    setGameState('waiting');
    setReactionTime(0);
  };

  return (
    <Card className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Reaction Time</span>
          <Badge variant="secondary">{bestTime}ms</Badge>
        </CardTitle>
        <CardDescription>Click when the color changes!</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`h-32 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
            gameState === 'waiting' 
              ? 'bg-gradient-secondary hover:bg-accent' 
              : gameState === 'ready'
              ? 'bg-warning animate-pulse'
              : gameState === 'click'
              ? 'bg-success'
              : 'bg-gradient-primary'
          }`}
          onClick={handleClick}
        >
          <p className="text-xl font-bold text-center">
            {gameState === 'waiting' && 'Click to Start'}
            {gameState === 'ready' && 'Wait for Green...'}
            {gameState === 'click' && 'CLICK NOW!'}
            {gameState === 'result' && (
              reactionTime === -1 ? 'Too Early!' : `${reactionTime}ms`
            )}
          </p>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">
            Best: {bestTime > 0 ? `${bestTime}ms` : 'N/A'}
          </span>
          <Button variant="ghost" size="sm" onClick={resetGame}>
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Games;
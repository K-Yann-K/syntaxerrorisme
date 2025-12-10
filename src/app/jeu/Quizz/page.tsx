"use client";

import React, { useState } from "react";
import Header from "@/feature/Header";
import Footer from "@/feature/Footer";
import { questions, getRandomQuestion } from "@/app/jeu/Quizz/feature/Questions";
import QuizFeedbackAside from "./feature/QuizFeedbackAside";

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [flashVisible, setFlashVisible] = useState(false);
const [flashSuccess, setFlashSuccess] = useState(false);

  // Charge une question aléatoire
  const loadRandomQuestion = () => {
    const next = getRandomQuestion();
    setCurrentQuestion(next);
    setSelected(null);
    setShowAnswer(false);
  };

    const handleSelect = (opt: string) => {
    if (showAnswer) return;

    let isCorrect = false;

    if (currentQuestion.type === "trueFalse") {
        isCorrect =
        (opt === "Vrai" && currentQuestion.answer === true) ||
        (opt === "Faux" && currentQuestion.answer === false);
    } else if (currentQuestion.type === "mcq" && currentQuestion.options) {
        isCorrect = currentQuestion.options.indexOf(opt) === currentQuestion.answer;
    }

    if (isCorrect) {
  setScore(s => s + 1);
  setFlashSuccess(true);
} else {
  setFlashSuccess(false);
}
setFlashVisible(true);
setTimeout(() => setFlashVisible(false), 2000);

    setSelected(opt);
    setShowAnswer(true);
    };


  const nextQuestion = () => {
    setQuestionCount((c) => c + 1);
    if (questionCount + 1 < 10) {
        loadRandomQuestion();
    }
  };

  const resetQuiz = () => {
    setScore(0);
    setQuestionCount(0);
    loadRandomQuestion();
  };

  return (
    <main className="bg-cod-gray-950" >
        <header className="mb-14">
            <Header />
        </header>
        <article className="relative overflow-hidden ">
            <QuizFeedbackAside visible={flashVisible} success={flashSuccess} side="left" />
            <section className="max-w-3xl mx-auto px-4 pb-12 pt-4 text-white ">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-strikemaster-400">
                    Quiz Syntaxerroriste : Testez vos erreurs !
                </h1>

                <p className="mb-4 text-lg opacity-80">
                    Bienvenue sur le quiz officiel du <strong>Syntaxerrorisme</strong> !  
                    Testez vos connaissances sur les <strong>erreurs syntaxiques</strong>,
                    les mauvaises pratiques de développement, et la logique tordue des
                    guerriers du bug. Lisez puis répondez à la question en 
                    choisissant une réponse. Découvrez si vous êtes tombé dans le piège
                    syntaxerroriste, puis passez à la suivante !
                </p>

                <p className=" mb-6">
                    A la fin de ce quiz vous quitterez la voie du syntaxerroriste pour devenir
                    un noble et glorieux syntaxeur avec une expertise de développeur web expérimenté !
                </p>

                {/* --- QUESTION SECTION --- */}
                {questionCount < 10 ? (
                    <section className="my-10 p-4 bg-gray-900 rounded-xl">
                    <h2 className="text-3xl font-bold mb-4 text-strikemaster-300">
                        Question 
                    </h2>

                    <p className="font-semibold mb-4">{currentQuestion.question}</p>

                        <div className="space-y-2">
                        {currentQuestion.type === "mcq" && currentQuestion.options
                            ? currentQuestion.options.map((opt, idx) => {
                                const isCorrect = idx === currentQuestion.answer;

                                return (
                                <button
                                    key={idx}
                                    onClick={() => handleSelect(opt)}
                                    className={`
                                    block w-full text-left px-4 py-2 rounded-lg border transition-all
                                    ${
                                        showAnswer
                                        ? isCorrect
                                            ? "border-green-500 text-green-400 bg-green-500/10"
                                            : selected === opt
                                            ? "border-red-500 text-red-400 bg-red-500/10"
                                            : "border-gray-500/30 opacity-60"
                                        : "border-gray-600 hover:border-strikemaster-400"
                                    }
                                    `}
                                >
                                    {opt}
                                </button>
                                );
                            })
                            : // pour true/false, on affiche les boutons Vrai / Faux
                            ["Vrai", "Faux"].map((opt) => {
                                const isCorrect =
                                (opt === "Vrai" && currentQuestion.answer === true) ||
                                (opt === "Faux" && currentQuestion.answer === false);

                                return (
                                <button
                                    key={opt}
                                    onClick={() => handleSelect(opt)}
                                    className={`
                                    block w-full text-left px-4 py-2 rounded-lg border transition-all
                                    ${
                                        showAnswer
                                        ? isCorrect
                                            ? "border-green-500 text-green-400 bg-green-500/10"
                                            : selected === opt
                                            ? "border-red-500 text-red-400 bg-red-500/10"
                                            : "border-gray-500/30 opacity-60"
                                        : "border-gray-600 hover:border-strikemaster-400"
                                    }
                                    `}
                                >
                                    {opt}
                                </button>
                                );
                            })}
                        </div>


                    {showAnswer && (
                        <button
                        onClick={nextQuestion}
                        className="mt-6 px-4 py-2 bg-strikemaster-600 hover:bg-strikemaster-500 transition rounded-lg font-bold"
                        >
                        Question suivante →
                        </button>
                    )}
                    </section>
                ) : (
                    <section className="my-10 p-4 bg-gray-900 rounded-xl text-center">
                    <h2 className="text-3xl font-bold mb-4 text-strikemaster-300">
                        Quiz terminé !
                    </h2>
                    <p className="text-lg mb-4">
                        Votre score : <strong>{score} / 10 </strong>
                    </p>
                    <button
                        onClick={resetQuiz}
                        className="mt-6 px-4 py-2 bg-strikemaster-600 hover:bg-strikemaster-500 transition rounded-lg font-bold"
                    >
                        Rejouer
                    </button>
                    </section>
                )}


                <section className="mt-12">
                    <h2 className="text-3xl font-bold mb-4 text-strikemaster-300">
                    Comprendre le Syntaxerrorisme
                    </h2>

                    <p className="opacity-80 mb-4">
                    Le Syntaxerrorisme étudie les erreurs syntaxiques sous un angle humoristique, pédagogique et scientifique.
                    Chaque faute de frappe est un indice, chaque bug un message, chaque dépendance cassée un rite initiatique.
                    </p>

                    <p className="opacity-80 mb-4">
                    Maîtriser les pièges du code, qu’ils viennent de Java, Python, React, Git, CSS ou TDD, fait partie du parcours du véritable adepte.
                    Ce quiz vous aide à comprendre ces pièges et à développer une vision plus fine du développement moderne.
                    </p>

                    <p className="opacity-80 mb-4">
                    Explorez nos pages, glossaires et archives pour approfondir votre compréhension du mouvement syntaxerroriste et devenir un maître de la correction.
                    </p>
                </section>
            </section>
            <QuizFeedbackAside visible={flashVisible} success={flashSuccess} side="right" />
        </article>
        <footer>
            <Footer />
        </footer>
    </main>
    
  );
}

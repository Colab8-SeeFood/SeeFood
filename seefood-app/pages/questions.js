import Head from 'next/head'
import questions from "../questions.json";
import styles from '../styles/Home.module.css'
import { useState } from "react";
import Link from 'next/link'

export default function Questions() {
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };
  
    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    return (
        <div className={styles.container}>
            <Head>
                <title>What to eat?</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <div>{questions[currentQuestion].question}</div>
                </div>

                <div className={styles.questions}>
                    {questions[currentQuestion].answerOptions.map((answer, index) => (
                        <div key={index}>
                            <button onClick={handleNext}>{answer.answer}</button>
                        </div>
                    ))}
                </div>

                <button onClick={handlePrevious}>Previous</button>
            </main>
        </div>
    )
}
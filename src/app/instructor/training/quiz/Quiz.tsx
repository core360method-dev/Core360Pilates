"use client";

import { useState } from "react";
import { quizQuestions } from "@/data/instructor/training";

export function Quiz() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const answeredAll = quizQuestions.every((q) => answers[q.id] !== undefined);
  const score = quizQuestions.filter((q) => answers[q.id] === q.answerIndex).length;

  function reset() {
    setAnswers({});
    setSubmitted(false);
    window.scrollTo({ top: 0 });
  }

  return (
    <form
      className="checkin"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {submitted && (
        <div className={`notice ${score >= 8 ? "pass" : ""}`} role="status">
          <h3>
            You scored {score} / {quizQuestions.length}
          </h3>
          <p style={{ margin: 0 }}>
            {score >= 8
              ? "Great work — review any explanations below and keep practicing."
              : "Review the explanations below, revisit the population guides, and try again."}
          </p>
        </div>
      )}

      {quizQuestions.map((q, qi) => {
        const chosen = answers[q.id];
        const correct = chosen === q.answerIndex;
        return (
          <fieldset key={q.id}>
            <legend>
              {qi + 1}. {q.question}
            </legend>
            <p className="hint">{q.topic}</p>
            <div className="choices stacked">
              {q.options.map((opt, oi) => {
                const state = submitted
                  ? oi === q.answerIndex
                    ? "correct"
                    : oi === chosen
                      ? "wrong"
                      : ""
                  : "";
                return (
                  <label key={opt} className={`choice ${state}`}>
                    <input
                      type="radio"
                      name={q.id}
                      checked={chosen === oi}
                      disabled={submitted}
                      onChange={() => setAnswers({ ...answers, [q.id]: oi })}
                    />
                    <span>{opt}</span>
                  </label>
                );
              })}
            </div>
            {submitted && (
              <p className={`explanation ${correct ? "ok" : "miss"}`}>
                {correct ? "✓ Correct. " : "✗ Not quite. "}
                {q.explanation}
              </p>
            )}
          </fieldset>
        );
      })}

      {submitted ? (
        <button type="button" className="btn" onClick={reset}>
          Try again
        </button>
      ) : (
        <button type="submit" className="btn" disabled={!answeredAll}>
          {answeredAll ? "Check my answers" : "Answer every question to submit"}
        </button>
      )}
    </form>
  );
}

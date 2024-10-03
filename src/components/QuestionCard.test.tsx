import { render, screen, fireEvent } from "@testing-library/react";
import QuestionCard from "./QuestionCard";

const mockHandleAnswer = jest.fn();

it("renders question and answer buttons", () => {
  render(
    <QuestionCard
      question="Do you have any allergies?"
      onAnswer={mockHandleAnswer}
    />
  );

  expect(screen.getByText("Do you have any allergies?")).toBeInTheDocument();

  expect(screen.getByText("Yes")).toBeInTheDocument();
  expect(screen.getByText("No")).toBeInTheDocument();
});

it("calls onAnswer when a button is clicked", () => {
  render(
    <QuestionCard
      question="Do you have any allergies?"
      onAnswer={mockHandleAnswer}
    />
  );

  fireEvent.click(screen.getByText("Yes"));

  expect(mockHandleAnswer).toHaveBeenCalledWith("Yes");
});

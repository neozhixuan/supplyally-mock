import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("Login tests", () => {
  beforeEach(() => {
    render(<App />);
    const input = screen.getByPlaceholderText("Enter user name");
    const button = screen.getByTestId("login-button");
    fireEvent.change(input, { target: { value: "Alex" } });
    fireEvent.click(button);
    expect(screen.getByText("Track parcel")).toBeInTheDocument();
    expect(screen.getByText("Alex")).toBeInTheDocument();
  });

  test("Successful login", () => {
    render(<App />);
    expect(screen.getByText("Track parcel")).toBeInTheDocument();
    expect(screen.getByText("Alex")).toBeInTheDocument();
  });

  test("Tracking", () => {
    render(<App />);
    const input = screen.getByTestId("trackinput");
    const button = screen.getByTestId("trackbutton");
    fireEvent.change(input, { target: { value: "12345678" } });
    fireEvent.click(button);
    expect(
      screen.getByText("Please enter your 11 digit tracking ID.")
    ).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "12345678900" } });
    fireEvent.click(button);
    expect(screen.getByText("📦")).toBeInTheDocument();
    const checkbox = screen.getByTestId("checkbox");
    const submit = screen.getByTestId("submit");
    fireEvent.click(submit);
    expect(
      screen.getByText("Please indicate tracking status.")
    ).toBeInTheDocument();
  });
});

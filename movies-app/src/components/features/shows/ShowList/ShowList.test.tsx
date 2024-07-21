import { screen, render } from "@testing-library/react";
import ShowList from "./ShowList";
import useSWR from "swr";
import ShowCard from "../ShowCard/ShowCard";

const mockShows = [
  {
    id: 1,
    title: "Mock Show 1",
    description: "Show description 1",
    averageRating: 4.5,
    image_url: "img1.jpg",
  },
  {
    id: 2,
    title: "Mock Show 2",
    description: "Show description 2",
    averageRating: 3.8,
    image_url: "img2.jpg",
  },
];

jest.mock("../ShowCard/ShowCard", () => {
  return jest.fn().mockReturnValue(null);
});

jest.mock("swr");

describe("ShowList Component", () => {
  beforeEach(() => {
    (useSWR as jest.Mock).mockReturnValue({
      data: { shows: mockShows },
      error: undefined,
      isValidating: false,
    });
  });

  it("renders ShowCard components with correct props", async () => {
    render(<ShowList topRated={false} />);

    mockShows.forEach((show) => {
      expect(ShowCard).toHaveBeenCalledWith({ show }, {});
    });
  });
});

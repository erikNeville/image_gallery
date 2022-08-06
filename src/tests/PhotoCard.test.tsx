import PhotoCard from "../Components/PhotoCard";
import { render } from "@testing-library/react";
import { mockPhoto } from "./mockData";

let mockProps;

describe("PhotoCard", () => {
  const rootId = "photo-card-root";
  const titleId = "photo-card-title";
  const creatorId = "photo-card-creator";

  beforeEach(() => {
    mockProps = {
      photo: mockPhoto,
      onOpenModal: jest.fn(),
    };
  });

  it("should render the root container", () => {
    const { getByTestId } = render(<PhotoCard {...mockProps} />);

    expect(getByTestId(rootId)).toBeTruthy();
  });

  it("should render the proper image title", () => {
    const { getByTestId } = render(<PhotoCard {...mockProps} />);

    expect(getByTestId(titleId)).toHaveTextContent(mockProps.photo.title);
  });

  it("should render the proper image creator", () => {
    const { getByTestId } = render(<PhotoCard {...mockProps} />);

    expect(getByTestId(creatorId)).toHaveTextContent(mockProps.photo.creator);
  });
});
